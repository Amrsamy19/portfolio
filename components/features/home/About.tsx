import { AnimatedSection } from "@/components/ui/AnimatedSection";

export interface AboutData {
  eyebrow?: string;
  heading?: string;
  content?: string;
}

export interface AboutProps {
  data?: AboutData;
}

export function About({ data }: AboutProps) {
  const eyebrow = data?.eyebrow ?? "";
  const heading = data?.heading ?? "";
  const content = data?.content ?? "";

  return (
    <AnimatedSection
      as="section"
      id="about"
      className="px-6 py-24 md:px-24 border-t border-(--border)"
      delayOrder={0}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-(--muted) mb-4 font-medium">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          {heading}
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-(--muted) leading-relaxed">
          <p>{content}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
