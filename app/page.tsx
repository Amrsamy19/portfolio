"use client";

import { PageLoader } from "@/components/PageLoader";
import { Header } from "@/components/layout/Header";
import { VerticalEmail } from "@/components/layout/VerticalEmail";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Header />
      <VerticalEmail />
      <ScrollProgress />
      <FloatingIcons />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Partners />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
