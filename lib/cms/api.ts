import { getPayload } from 'payload';
import configPromise from '@payload-config';

import type { HeroData } from "@/components/sections/Hero";
import type { AboutData } from "@/components/sections/About";
import type { SkillData } from "@/components/sections/Stack";
import type { ExperienceData } from "@/components/sections/Experience";
import type { ProjectData } from "@/components/sections/Projects";

export interface CmsData {
  siteSettings: unknown;
  theme: unknown;
  hero: HeroData;
  about: AboutData;
  projects: ProjectData[];
  experience: ExperienceData[];
  skills: SkillData[];
}

export async function getCmsData(): Promise<CmsData | null> {
  try {
    const payload = await getPayload({ config: configPromise });

    // Execute sequentially to prevent ECONNRESET from exhausting serverless connection pools
    const siteSettings = await payload.findGlobal({ slug: 'site-settings' });
    const theme = await payload.findGlobal({ slug: 'theme' });
    const hero = await payload.findGlobal({ slug: 'hero' });
    const about = await payload.findGlobal({ slug: 'about' });
    const projectsRes = await payload.find({ collection: 'projects', sort: 'order', limit: 100 });
    const experienceRes = await payload.find({ collection: 'experience', sort: 'order', limit: 100 });
    const skillsRes = await payload.find({ collection: 'skills', sort: 'order', limit: 100 });

    return {
      siteSettings,
      theme,
      hero: {
        heading: hero.heading?.toString(),
        subheading: hero.subheading?.toString(),
        description: hero.description?.toString(),
        primaryButtonText: hero.primaryButtonText?.toString(),
        primaryButtonLink: hero.primaryButtonLink?.toString(),
        secondaryButtonText: hero.secondaryButtonText?.toString(),
        secondaryButtonLink: hero.secondaryButtonLink?.toString(),
      },
      about: {
        eyebrow: about.eyebrow?.toString(),
        heading: about.heading?.toString(),
        content: about.content?.toString(),
      },
      projects: projectsRes.docs.map((p) => ({
        id: p.id as string | number | undefined,
        title: p.title?.toString() || "",
        description: p.description?.toString() || "",
        isFreelance: Boolean(p.isFreelance),
        bullets: Array.isArray(p.bullets) ? p.bullets.map((b: { text?: string; id?: string | null }) => ({ text: b.text?.toString() || "", id: b.id })) : [],
        liveUrl: p.liveUrl?.toString(),
        repoUrl: p.repoUrl?.toString(),
      })),
      experience: experienceRes.docs.map((e) => ({
        id: e.id as string | number | undefined,
        company: e.company?.toString() || "",
        role: e.role?.toString() || "",
        startDate: e.startDate?.toString(),
        endDate: e.endDate?.toString(),
        isCurrent: Boolean(e.isCurrent),
        location: e.location?.toString() || "",
        logo: typeof e.logo === "string" ? e.logo : (e.logo && typeof e.logo === 'object' && 'url' in e.logo ? { url: (e.logo as { url?: string }).url } : ""),
      })),
      skills: skillsRes.docs.map((s) => ({
        id: s.id as string | number | undefined,
        category: s.category?.toString() || "",
        items: Array.isArray(s.items) ? s.items.map((i: { skill?: string; id?: string | null }) => ({ skill: i.skill?.toString() || "", id: i.id })) : [],
      })),
    };
  } catch (error) {
    console.error('Error fetching CMS data:', error);
    return null; // Return null if DB is not seeded or reachable
  }
}
