/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { PROJECTS } from '@/app/data/projects';
import { EXPERIENCE } from '@/app/data/experience';
import { STACK } from '@/app/data/stack';
import { SOCIAL } from '@/app/data/social';
import { SECTIONS } from '@/app/data/sections';

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });
    
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        title: 'Amr Samy | Software Engineer',
        description: 'Software Engineer specializing in React, Next.js, and TypeScript.',
        navigation: SECTIONS.map(s => ({ label: s.label, sectionId: s.id })),
        socialLinks: SOCIAL.map(s => ({ label: s.label, url: s.href })),
      } as any,
    });

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

    await payload.updateGlobal({
      slug: 'hero',
      data: {
        heading: 'AMR SAMY',
        subheading: 'Software Engineer',
        description: 'A Software Engineer focused on building scalable, accessible, and responsive web applications.',
        primaryButtonText: 'Hire Me',
        primaryButtonLink: 'mailto:amrsamy622@gmail.com',
        secondaryButtonText: 'Resume',
      } as any,
    });

    await payload.updateGlobal({
      slug: 'about',
      data: {
        eyebrow: 'This is me',
        heading: "Hi, I'm Amr.",
        content: "I'm a Software Engineer dedicated to turning ideas into scalable, accessible web applications. I specialize in React, Next.js, and TypeScript, with experience in modern UI systems, authentication flows, and integrating REST APIs in real-world SaaS and dashboard environments.",
      },
    });

    for (let i = 0; i < PROJECTS.length; i++) {
      const p = PROJECTS[i];
      await payload.create({
        collection: 'projects',
        data: {
          title: p.name,
          description: p.description,
          isFreelance: p.freelance,
          bullets: p.bullets.map(b => ({ text: b })),
          liveUrl: p.live || '',
          repoUrl: p.repo || '',
          order: i,
        } as any,
      });
    }

    for (let i = 0; i < EXPERIENCE.length; i++) {
      const e = EXPERIENCE[i];
      await payload.create({
        collection: 'experience',
        data: {
          company: e.company,
          role: e.role,
          period: e.period,
          location: e.location,
          order: i,
        } as any,
      });
    }

    let order = 0;
    for (const [category, items] of Object.entries(STACK)) {
      await payload.create({
        collection: 'skills',
        data: {
          category: category,
          items: items.map(skill => ({ skill })),
          order: order++,
        } as any,
      });
    }

    return NextResponse.json({ success: true, message: 'Seeding complete!' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
