"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { contactCopy } from "@/lib/content";
import { CONTACT_CC, CONTACT_ENDPOINT, STUDIO_EMAIL, inquiryMailto } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NEED = "A free Website Check";

type Fields = { name: string; email: string; website: string; message: string };
type Errors = Partial<Record<keyof Fields | "authorized", string>>;
type Status =
  | { kind: "idle" }
  | { kind: "invalid" }
  | { kind: "success" }
  | { kind: "error" };

const empty: Fields = { name: "", email: "", website: "", message: "" };

function validate(fields: Fields, authorized: boolean): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Enter your name.";
  if (!fields.email.trim()) errors.email = "Enter your email.";
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = "Enter a valid email.";
  if (!fields.website.trim()) errors.website = "Enter your website.";
  if (!fields.message.trim()) errors.message = "Tell us a little about your business.";
  else if (fields.message.trim().length < 10) {
    errors.message = "Add a few more words about your business.";
  }
  if (!authorized) errors.authorized = contactCopy.authorizationError;
  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function accepted(data: { success?: unknown; message?: unknown }) {
  if (String(data.success) === "true") return true;
  const message = String(data.message ?? "").toLowerCase();
  return message.includes("activation") || message.includes("activate form");
}

export function WebsiteCheckForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [authorized, setAuthorized] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [sending, setSending] = useState(false);
  const [honey, setHoney] = useState("");
  const statusId = useId();

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields, authorized);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ kind: "invalid" });
      return;
    }
    // The honeypot value is sent to FormSubmit as _honey, which silently drops
    // filled submissions. The visitor (or bot) still sees the normal success state.

    const draft = inquiryMailto({
      name: fields.name,
      email: fields.email,
      need: NEED,
      message: fields.message,
      website: fields.website,
      authorized,
    });
    if (!CONTACT_ENDPOINT) {
      window.location.href = draft;
      setStatus({ kind: "error" });
      return;
    }

    setSending(true);
    setStatus({ kind: "idle" });
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          website: fields.website.trim(),
          need: NEED,
          message: fields.message.trim(),
          authorization: contactCopy.authorization,
          authorized: "yes",
          _subject: "Free Website Check request \u2014 10Point Studios",
          _template: "table",
          _captcha: "true",
          _honey: honey,
          ...(CONTACT_CC ? { _cc: CONTACT_CC } : {}),
          _replyto: fields.email.trim(),
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        success?: unknown;
        message?: unknown;
      } | null;
      if (!response.ok || !data || !accepted(data)) {
        throw new Error("rejected");
      }
      setFields(empty);
      setAuthorized(false);
      setErrors({});
      setStatus({ kind: "success" });
    } catch {
      setStatus({ kind: "error" });
    } finally {
      setSending(false);
    }
  }

  const statusText =
    status.kind === "invalid"
      ? "Check the highlighted fields."
      : status.kind === "success"
        ? contactCopy.success
        : status.kind === "error"
          ? contactCopy.error
          : "";

  const mailto = inquiryMailto({
    name: fields.name,
    email: fields.email,
    need: NEED,
    message: fields.message,
    website: fields.website,
    authorized,
  });

  return (
    <form
      className="form glass-dark reveal"
      id="free-check-form"
      action="#"
      method="post"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="hp" aria-hidden="true">
        <label htmlFor="check-company">Company</label>
        <input
          id="check-company"
          name="_honey"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
      </div>
      <Field id="check-name" label="Name" error={errors.name}>
        <input
          id="check-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={fields.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "check-name-error" : undefined}
          onChange={(event) => set("name", event.target.value)}
        />
      </Field>
      <Field id="check-email" label="Email" error={errors.email}>
        <input
          id="check-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={fields.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "check-email-error" : undefined}
          onChange={(event) => set("email", event.target.value)}
        />
      </Field>
      <Field id="check-website" label="Website" error={errors.website}>
        <input
          id="check-website"
          name="website"
          type="url"
          inputMode="url"
          autoComplete="url"
          placeholder="https://"
          value={fields.website}
          aria-invalid={errors.website ? true : undefined}
          aria-describedby={errors.website ? "check-website-error" : undefined}
          onChange={(event) => set("website", event.target.value)}
        />
      </Field>
      <Field id="check-message" label="About your business" error={errors.message}>
        <textarea
          id="check-message"
          name="message"
          placeholder="A little about your business."
          value={fields.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "check-message-error" : undefined}
          onChange={(event) => set("message", event.target.value)}
        />
      </Field>
      <div className="field check-field">
        <label className="check-label" htmlFor="check-authorized">
          <input
            id="check-authorized"
            name="authorized"
            type="checkbox"
            checked={authorized}
            required
            aria-invalid={errors.authorized ? true : undefined}
            aria-describedby={errors.authorized ? "check-authorized-error" : undefined}
            onChange={(event) => setAuthorized(event.target.checked)}
          />
          <span>{contactCopy.authorization}</span>
        </label>
        {errors.authorized ? (
          <p className="field-error" id="check-authorized-error">
            {errors.authorized}
          </p>
        ) : null}
      </div>
      <button className="btn btn-accent btn-lg" type="submit" disabled={sending}>
        {sending ? "Sending\u2026" : "Get my Free Website Check"}
      </button>
      <p className="form-help">{contactCopy.help}</p>
      <p className={statusText ? "form-status is-set" : "form-status"} id={statusId} role="status">
        {status.kind === "error" ? (
          <>
            That didn{"\u2019"}t send. Try again, or email us at{" "}
            <a href={mailto}>{STUDIO_EMAIL}</a>.
          </>
        ) : (
          statusText
        )}
      </p>
    </form>
  );
}
