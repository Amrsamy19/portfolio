import { PageLoader } from "@/components/PageLoader";
import { Header } from "@/components/layout/Header";
import { VerticalEmail } from "@/components/layout/VerticalEmail";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { getCmsData } from "@/lib/cms/api";

export default async function Home() {
  const cmsData = await getCmsData();
  
  return (
    <>
      <PageLoader />
      <Header />
      <VerticalEmail />
      <ScrollProgress />
      <FloatingIcons />
      <main className="relative z-10">
        <Hero data={cmsData?.hero} />
        <About data={cmsData?.about} />
        <Stack data={cmsData?.skills} />
        <Experience data={cmsData?.experience} />
        <Projects data={cmsData?.projects} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
