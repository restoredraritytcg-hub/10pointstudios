/** UTM and referrer values from the current page, for FormSubmit lead fields. */
export function leadSource(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const) {
    const value = params.get(key)?.trim();
    if (value) out[key] = value;
  }
  const referrer = document.referrer.trim();
  if (referrer) out.referrer = referrer;
  out.landing_page = window.location.href;
  return out;
}
