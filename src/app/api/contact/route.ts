import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const { naam, email, bericht, website } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: een verborgen veld dat alleen bots invullen.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (typeof naam !== "string" || naam.trim() === "") {
    return NextResponse.json({ error: "Vul je naam in." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Vul een geldig e-mailadres in." }, { status: 400 });
  }
  if (typeof bericht !== "string" || bericht.trim().length < 10) {
    return NextResponse.json(
      { error: "Je bericht moet minimaal 10 tekens bevatten." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({ naam: naam.trim(), email: email.trim(), bericht: bericht.trim() });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Versturen van contactformulier mislukt:", error);
    return NextResponse.json(
      { error: "Het bericht kon niet worden verstuurd. Probeer het later opnieuw." },
      { status: 500 },
    );
  }
}
