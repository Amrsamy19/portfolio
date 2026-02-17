"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailState = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  _prev: SendEmailState,
  formData: FormData
): Promise<SendEmailState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const body = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !body?.trim()) {
    return { success: false, message: "Name, email, and message are required." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return {
      success: false,
      message: "Email is not configured. Please add RESEND_API_KEY to your environment.",
    };
  }

  const recipient = process.env.RECIPIENT_EMAIL || "amrsamy622@gmail.com";
  const from = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      subject: subject?.trim() ? `[Portfolio] ${subject.trim()}` : "[Portfolio] New message",
      text: `From: ${name} <${email}>\n\nSubject: ${subject || "(none)"}\n\n${body}`,
      replyTo: email,
    });

    if (error) {
      return { success: false, message: error.message };
    }

    return { success: true, message: "Message sent. I'll get back to you soon!" };
  } catch (e) {
    console.error(e);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
