"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { env } from "@/core/env";

const resend = new Resend(env.RESEND_API_KEY);

export type SendEmailState = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().max(200, "Subject is too long").optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
});

export async function sendEmail(
  _prev: SendEmailState,
  formData: FormData
): Promise<SendEmailState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = parsed.data;

  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return {
      success: false,
      message:
        "Email is not configured. Please add RESEND_API_KEY to your environment.",
    };
  }

  const recipient = env.RECIPIENT_EMAIL ?? "amrsamy622@gmail.com";
  const from =
    env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      subject: subject?.trim()
        ? `[Portfolio] ${subject.trim()}`
        : "[Portfolio] New message",
      text: `From: ${name} <${email}>\n\nSubject: ${subject ?? "(none)"}\n\n${message}`,
      replyTo: email,
    });

    if (error) {
      return { success: false, message: error.message };
    }

    revalidatePath('/');
    return { success: true, message: "Message sent. I'll get back to you soon!" };
  } catch (err: unknown) {
    console.error(err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

