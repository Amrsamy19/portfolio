import { PageLoader } from "@/components/ui/PageLoader";
import { Header } from "@/components/layout/Header";
import { VerticalEmail } from "@/components/layout/VerticalEmail";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/features/home/Hero";
import { About } from "@/components/features/home/About";
import { Stack } from "@/components/features/home/Stack";
import { Experience } from "@/components/features/home/Experience";
import { Projects } from "@/components/features/home/Projects";
import { Contact } from "@/components/features/home/Contact";
import { Footer } from "@/components/features/home/Footer";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import { getCmsData } from "@/core/cms/api";

export default async function Home() {
  const cmsData = await getCmsData();

  return (
    <>
      <PageLoader />
      <Header data={cmsData?.siteSettings} />
      <VerticalEmail />
      <ScrollProgress />
      <FloatingIcons skills={cmsData?.skills} />
      <main className="relative z-10">
        <Hero data={cmsData?.hero} />
        <About data={cmsData?.about} />
        <Stack data={cmsData?.skills} />
        <Experience data={cmsData?.experience} />
        <Projects data={cmsData?.projects} />
        <Contact data={cmsData?.siteSettings} />
        <Footer />
      </main>
    </>
  );
}
