import nodemailer from "nodemailer";

export interface ContactMessage {
  naam: string;
  email: string;
  bericht: string;
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is niet geconfigureerd. Zet SMTP_HOST, SMTP_PORT, SMTP_USER en SMTP_PASSWORD in .env.local (lokaal) en in de Vercel projectinstellingen (productie).",
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
  });
}

export async function sendContactEmail({ naam, email, bericht }: ContactMessage) {
  const transporter = getTransporter();
  const from = process.env.SMTP_USER as string;
  const to = process.env.CONTACT_TO_EMAIL || from;

  await transporter.sendMail({
    from: `"Rekenstation contactformulier" <${from}>`,
    to,
    replyTo: email,
    subject: `Nieuw bericht via contactformulier van ${naam}`,
    text: `Naam: ${naam}\nE-mail: ${email}\n\nBericht:\n${bericht}`,
    html: `<p><strong>Naam:</strong> ${escapeHtml(naam)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Bericht:</strong></p><p>${escapeHtml(bericht).replace(/\n/g, "<br />")}</p>`,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
