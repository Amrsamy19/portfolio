import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export async function getCmsData() {
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
