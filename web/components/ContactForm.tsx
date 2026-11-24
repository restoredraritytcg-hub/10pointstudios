"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { contactCopy } from "@/lib/content";
import { CONTACT_CC, CONTACT_ENDPOINT, STUDIO_EMAIL, inquiryMailto } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { name: string; email: string; need: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "invalid" }
  | { kind: "success" }
  | { kind: "error" };

const empty: Fields = { name: "", email: "", need: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Enter your name.";
  if (!fields.email.trim()) errors.email = "Enter your email.";
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = "Enter a valid email.";
  if (!fields.need) errors.need = "Choose what you need.";
  if (!fields.message.trim()) errors.message = "Tell us a little about the project.";
  else if (fields.message.trim().length < 10) {
    errors.message = "Add a few more words about the project.";
  }
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
  // FormSubmit queues the first submissions and emails an activation link.
  // Those messages are delivered after the inbox confirms, so the visitor is done.
  return message.includes("activation") || message.includes("activate form");
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
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
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ kind: "invalid" });
      return;
    }
    if (honey.trim()) {
      setStatus({ kind: "success" });
      return;
    }

    const draft = inquiryMailto(fields);
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
          need: fields.need,
          message: fields.message.trim(),
          _subject: "Project inquiry — 10Point Studios",
          _template: "table",
          _captcha: "false",
          _honey: "",
          _cc: CONTACT_CC,
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

  const mailto = inquiryMailto(fields);

  return (
    <form className="form glass-dark reveal" action="#" method="post" noValidate onSubmit={onSubmit}>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input
          id="company-website"
          name="_honey"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
      </div>
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={fields.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(event) => set("name", event.target.value)}
        />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={fields.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(event) => set("email", event.target.value)}
        />
      </Field>
      <Field id="need" label="What do you need?" error={errors.need}>
        <select
          id="need"
          name="need"
          value={fields.need}
          aria-invalid={errors.need ? true : undefined}
          aria-describedby={errors.need ? "need-error" : undefined}
          onChange={(event) => set("need", event.target.value)}
        >
          <option value="">Choose one</option>
          {contactCopy.needs.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="About the project" error={errors.message}>
        <textarea
          id="message"
          name="message"
          placeholder={"A few sentences on what you\u2019re trying to do."}
          value={fields.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => set("message", event.target.value)}
        />
      </Field>
      <button className="btn btn-accent btn-lg" type="submit" disabled={sending}>
        {sending ? "Sending\u2026" : "Send"}
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
