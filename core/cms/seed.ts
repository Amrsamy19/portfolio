import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());
import fs from 'fs';
import path from 'path';
import { getPayload } from 'payload';
import configPromise from '../../payload.config';
import { PROJECTS } from '../../core/data/projects';
import { EXPERIENCE } from '../../core/data/experience';
import { STACK } from '../../core/data/stack';
import { SOCIAL } from '../../core/data/social';
import { SECTIONS } from '../../core/data/sections';

async function seed() {
  const payload = await getPayload({ config: configPromise });

  console.log('Seeding Global: Site Settings...');
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      title: 'Amr Samy | Software Engineer',
      description: 'Software Engineer specializing in React, Next.js, and TypeScript.',
      navigation: SECTIONS.map((s) => ({ label: s.label, sectionId: s.id })),
      socialLinks: SOCIAL.map((s) => ({ label: s.label, url: s.href })),
    } as any,
  });

  console.log('Seeding Global: Theme...');
  await payload.updateGlobal({
    slug: 'theme',
    data: {
      background: '#0a0a0b',
      foreground: '#fafafa',
      muted: '#c4b5fd',
      accent: '#c084fc',
      accentHover: '#a855f7',
      card: '#141416',
      border: '#27272a',
    },
  });

  console.log('Seeding Global: Hero...');
  await payload.updateGlobal({
    slug: 'hero',
    data: {
      heading: 'AMR SAMY',
      subheading: 'Software Engineer',
      description:
        'A Software Engineer focused on building scalable, accessible, and responsive web applications.',
      primaryButtonText: 'Hire Me',
      primaryButtonLink: 'mailto:amrsamy622@gmail.com',
      secondaryButtonText: 'Resume',
      secondaryButtonLink: '/Amr_Samy_CV.pdf',
    } as any,
  });

  console.log('Seeding Global: About...');
  await payload.updateGlobal({
    slug: 'about',
    data: {
      eyebrow: 'This is me',
      heading: "Hi, I'm Amr.",
      content:
        "I'm a Software Engineer dedicated to turning ideas into scalable, accessible web applications. I specialize in React, Next.js, and TypeScript, with experience in modern UI systems, authentication flows, and integrating REST APIs in real-world SaaS and dashboard environments.",
    },
  });

  console.log('Seeding Collection: Projects...');
  let projectOrder = 0;
  for (const p of PROJECTS) {
    console.log('Creating project:', p.title);
    await payload.create({
      collection: 'projects',
      data: {
        title: p.title,
        description: p.description,
        isFreelance: p.isFreelance ?? false,
        bullets: p.bullets,
        liveUrl: p.liveUrl ?? '',
        repoUrl: p.repoUrl ?? '',
        order: projectOrder++,
      } as any,
    });
  }

  console.log('Seeding Collection: Experience...');
  let expOrder = 0;
  for (const e of EXPERIENCE) {
    let logoId = null;
    if (e.logo) {
      const filePath = path.join(process.cwd(), 'public', e.logo.replace(/^\//, ''));
      if (fs.existsSync(filePath)) {
        const media = await payload.create({
          collection: 'media',
          data: { alt: `${e.company} logo` },
          filePath,
        });
        logoId = media.id;
      } else {
        console.warn(`Logo not found at ${filePath}`);
      }
    }

    await payload.create({
      collection: 'experience',
      data: {
        company: e.company,
        role: e.role,
        location: e.location,
        startDate: e.startDate ? new Date(e.startDate).toISOString() : new Date().toISOString(),
        endDate: e.endDate ? new Date(e.endDate).toISOString() : undefined,
        isCurrent: e.isCurrent,
        logo: logoId,
        order: expOrder++,
      } as any,
    });
  }

  console.log('Seeding Collection: Skills...');
  let skillOrder = 0;
  for (const [category, items] of Object.entries(STACK)) {
    await payload.create({
      collection: 'skills',
      data: {
        category,
        items: items.map((skill) => ({ skill })),
        order: skillOrder++,
      } as any,
    });
  }

  console.log('Seeding Complete!');
  process.exit(0);
}

seed().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
