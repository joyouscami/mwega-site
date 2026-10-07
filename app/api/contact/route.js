import { topics } from "@/content/site";

/* Receives the contact form and emails it through Resend (resend.com).
   Needs RESEND_API_KEY and CONTACT_TO_EMAIL in the environment. See .env.example. */
const clean = (value, max) => String(value == null ? "" : value).trim().slice(0, max);
const oneLine = (value, max) => clean(value, max).replace(/\s+/g, " ");
const json = (body, status = 200) => Response.json(body, { status });

export async function POST(request) {
  let data;
  try { data = await request.json(); } catch (error) { return json({ ok: false, error: "invalid" }, 400); }
  if (!data || typeof data !== "object") return json({ ok: false, error: "invalid" }, 400);
  if (clean(data.website, 200)) return json({ ok: true }); // hidden field: only bots fill it in

  const name = oneLine(data.name, 120), organisation = oneLine(data.organisation, 160), email = oneLine(data.email, 200);
  const phone = oneLine(data.phone, 40), topic = oneLine(data.topic, 60), message = clean(data.message, 5000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !topics.includes(topic) || message.length < 10) return json({ ok: false, error: "invalid" }, 400);

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error("Contact form: RESEND_API_KEY and CONTACT_TO_EMAIL are not set, so the enquiry was not sent.");
    return json({ ok: false, error: "not_configured" }, 503);
  }
  const text = ["Name: " + name, "Organisation: " + (organisation || "-"), "Email: " + email, "Phone: " + (phone || "-"), "Topic: " + topic, "", message].join("\n");
  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "Mwega website <onboarding@resend.dev>", to: [to], reply_to: email, subject: "Website enquiry: " + topic + " (" + name + ")", text }),
  });
  if (!sent.ok) {
    console.error("Contact form: Resend answered " + sent.status + ". " + (await sent.text()));
    return json({ ok: false, error: "send_failed" }, 502);
  }
  return json({ ok: true });
}
