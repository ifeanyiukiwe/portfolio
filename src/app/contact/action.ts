"use server";
import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: { name?: string; email?: string; message?: string };
  values?: { name: string; email: string; message: string };
};

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // 1. Read name, email and message from formData, as strings, trimmed
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // 2. Build an errors object:

  //    - name empty → "Enter your name"
  //    - email empty or no "@" → "Enter an email address in the correct format, like name@example.com"
  //    - message empty → "Enter your message"
  //    - message longer than 5,000 characters → "Your message must be 5,000 characters or fewer"
  const errors: NonNullable<ContactState["errors"]> = {};
  if (!name) {
    errors.name = "Enter your name";
  }
  if (!email || !email.includes("@")) {
    errors.email =
      "Enter an email address in the correct format, like name@example.com";
  }
  if (!message) {
    errors.message = "Enter your message";
  }
  if (message.length > 5000) {
    errors.message = "Your message must be 5,000 characters or fewer";
  }

  // 3. If errors has any keys → return { status: "error", errors }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values: { name, email, message } };
  }
  // 4. Create the transporter with nodemailer.createTransport({
  //      host, port (convert to a number), secure: true,
  //      auth: { user, pass } — all from process.env })
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  // 5. In a try/catch, await transporter.sendMail({
  //      from: your SMTP_USER,   ← always YOUR address
  //      replyTo: their email,   ← so "Reply" goes to them
  //      to: process.env.CONTACT_TO,
  //      subject: `Portfolio message from ${name}`,
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER, // your address: process.env.SMTP_USER
      replyTo: email, // the visitor's email variable
      to: process.env.CONTACT_TO, // process.env.CONTACT_TO
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`, // put the message variable here
    });
    return { status: "success" };
  } catch (error) {
    console.error("Contact form email failed:", error);
    return { status: "error", values: { name, email, message } };
  }
  //      text: the message, with their name and email at the top })
  // 6. Success → return { status: "success" }
  //    Catch → console.error the error, return { status: "error" }
}
