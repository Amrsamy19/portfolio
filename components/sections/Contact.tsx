"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { sendEmail, type SendEmailState } from "@/app/actions/send-email";

const initialState: SendEmailState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary mt-2 w-full sm:w-auto inline-flex items-center justify-center bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[var(--background)] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <AnimatedSection
      as="section"
      id="contact"
      className="px-16 py-24 md:px-24 border-t border-[var(--border)]"
      delayOrder={0}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
      <p className="text-[var(--muted)] mb-10 max-w-xl">
        Have a project in mind or want to say hi? Send me a message and
        I&apos;ll get back to you.
      </p>

      <form action={formAction} className="max-w-xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="block">
            <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Name
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
            />
          </label>
        </div>

        <label className="block">
          <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Subject
          </span>
          <input
            type="text"
            name="subject"
            placeholder="Project inquiry, collaboration, etc."
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message…"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-y min-h-[120px]"
          />
        </label>

        {state.message && (
          <p
            className={`text-sm ${
              state.success ? "text-[var(--accent)]" : "text-red-400"
            }`}
          >
            {state.message}
          </p>
        )}

        <SubmitButton />
      </form>

      <p className="mt-8 text-sm text-[var(--muted)]">
        Or email directly:{" "}
        <a
          href="mailto:amrsamy622@gmail.com"
          className="link-hover text-[var(--accent)] hover:text-[var(--accent)]"
        >
          amrsamy622@gmail.com
        </a>
      </p>
    </AnimatedSection>
  );
}
