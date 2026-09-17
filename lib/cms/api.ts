import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export async function getCmsData() {
  try {
    const payload = await getPayload({ config: configPromise });

    const [siteSettings, theme, hero, about, projectsRes, experienceRes, skillsRes] = await Promise.all([
      payload.findGlobal({ slug: 'site-settings' }),
      payload.findGlobal({ slug: 'theme' }),
      payload.findGlobal({ slug: 'hero' }),
      payload.findGlobal({ slug: 'about' }),
      payload.find({ collection: 'projects', sort: 'order', limit: 100 }),
      payload.find({ collection: 'experience', sort: 'order', limit: 100 }),
      payload.find({ collection: 'skills', sort: 'order', limit: 100 }),
    ]);

    return {
      siteSettings,
      theme,
      hero,
      about,
      projects: projectsRes.docs,
      experience: experienceRes.docs,
      skills: skillsRes.docs,
    };
  } catch (error) {
    console.error('Error fetching CMS data:', error);
    return null; // Return null if DB is not seeded or reachable
  }
}
