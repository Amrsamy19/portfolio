import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SiteSettingsData } from "@/core/cms/api";

export interface ContactProps {
  data?: SiteSettingsData;
}

export function Contact({ data }: ContactProps) {
  const socialLinks = data?.socialLinks ?? [];
  const email = "amrsamy622@gmail.com";

  return (
    <AnimatedSection
      as="section"
      id="contact"
      className="px-6 py-24 md:px-24 border-t border-(--border)"
      delayOrder={0}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-(--muted) mb-12 max-w-xl text-lg">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out through any of the platforms
          below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {/* Email Card */}
          <a
            href={`mailto:${email}`}
            className="group block p-6 rounded-2xl border border-(--border) bg-(--card) card-hover hover:border-(--accent)/50"
          >
            <p className="text-sm font-medium text-(--muted) mb-1 uppercase tracking-wider">
              Email
            </p>
            <p className="text-xl font-semibold text-foreground group-hover:text-(--accent) transition-colors">
              {email}
            </p>
          </a>

          {/* Social Links */}
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-(--border) bg-(--card) card-hover hover:border-(--accent)/50"
            >
              <p className="text-sm font-medium text-(--muted) mb-1 uppercase tracking-wider">
                {link.label}
              </p>
              <p className="text-xl font-semibold text-foreground group-hover:text-(--accent) transition-colors">
                {link.label === "GitHub" || link.label === "LinkedIn" ? "@" + link.url.split("/").filter(Boolean).pop() : link.url}
              </p>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
