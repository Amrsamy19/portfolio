import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

import type { HeroData } from "@/components/features/home/Hero";
import type { AboutData } from "@/components/features/home/About";
import type { SkillData } from "@/components/features/home/Stack";
import type { ExperienceData } from "@/components/features/home/Experience";
import type { ProjectData } from "@/components/features/home/Projects";

export interface ThemeData {
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  accentHover: string;
  card: string;
  border: string;
}

export interface SiteSettingsData {
  title?: string;
  description?: string;
  socialLinks?: { label: string; url: string }[];
  navigation?: { label: string; sectionId: string }[];
}

export interface CmsData {
  siteSettings: SiteSettingsData;
  theme: ThemeData;
  hero: HeroData;
  about: AboutData;
  projects: ProjectData[];
  experience: ExperienceData[];
  skills: SkillData[];
}

async function fetchCmsData(): Promise<CmsData | null> {
  try {
    const payload = await getPayload({ config: configPromise });

    const [
      siteSettings,
      theme,
      hero,
      about,
      projectsRes,
      experienceRes,
      skillsRes,
    ] = await Promise.all([
      payload.findGlobal({ slug: 'site-settings' }),
      payload.findGlobal({ slug: 'theme' }),
      payload.findGlobal({ slug: 'hero' }),
      payload.findGlobal({ slug: 'about' }),
      payload.find({ collection: 'projects', sort: 'order', limit: 100 }),
      payload.find({ collection: 'experience', sort: 'order', limit: 100 }),
      payload.find({ collection: 'skills', sort: 'order', limit: 100 }),
    ]);

    return {
      siteSettings: siteSettings as unknown as SiteSettingsData,
      theme: theme as unknown as ThemeData,
      hero: {
        heading: hero.heading?.toString(),
        subheading: hero.subheading?.toString(),
        description: hero.description?.toString(),
        primaryButtonText: hero.primaryButtonText?.toString(),
        primaryButtonLink: hero.primaryButtonLink?.toString(),
        secondaryButtonText: hero.secondaryButtonText?.toString(),
        secondaryButtonLink: (typeof hero.resume === 'object' && hero.resume !== null && 'url' in hero.resume) ? String((hero.resume as { url?: string }).url) : '/Amr_Samy_CV.pdf',
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

/**
 * Cached wrapper around fetchCmsData.
 * Re-validates every 5 minutes or when revalidateTag('cms') is called.
 */
export const getCmsData = unstable_cache(
  fetchCmsData,
  ['cms-data'],
  { revalidate: 300, tags: ['cms'] }
);
