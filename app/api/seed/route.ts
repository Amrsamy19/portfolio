import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { PROJECTS } from '@/core/data/projects';
import { EXPERIENCE } from '@/core/data/experience';
import { STACK } from '@/core/data/stack';
import { SOCIAL } from '@/core/data/social';
import { SECTIONS } from '@/core/data/sections';

export async function GET(): Promise<NextResponse> {
  try {
    const payload = await getPayload({ config: configPromise });

    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        title: 'Amr Samy | Software Engineer',
        description: 'Software Engineer specializing in React, Next.js, and TypeScript.',
        navigation: SECTIONS.map((s) => ({ label: s.label, sectionId: s.id })),
        socialLinks: SOCIAL.map((s) => ({ label: s.label, url: s.href })),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        description:
          'A Software Engineer focused on building scalable, accessible, and responsive web applications.',
        primaryButtonText: 'Hire Me',
        primaryButtonLink: 'mailto:amrsamy622@gmail.com',
        secondaryButtonText: 'Resume',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    });

    await payload.updateGlobal({
      slug: 'about',
      data: {
        eyebrow: 'This is me',
        heading: "Hi, I'm Amr.",
        content:
          "I'm a Software Engineer dedicated to turning ideas into scalable, accessible web applications. I specialize in React, Next.js, and TypeScript, with experience in modern UI systems, authentication flows, and integrating REST APIs in real-world SaaS and dashboard environments.",
      },
    });

    let projectOrder = 0;
    for (const p of PROJECTS) {
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      });
    }

    let expOrder = 0;
    for (const e of EXPERIENCE) {
      await payload.create({
        collection: 'experience',
        data: {
          company: e.company,
          role: e.role,
          location: e.location,
          order: expOrder++,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      });
    }

    let order = 0;
    for (const [category, items] of Object.entries(STACK)) {
      await payload.create({
        collection: 'skills',
        data: {
          category,
          items: items.map((skill) => ({ skill })),
          order: order++,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      });
    }

    return NextResponse.json({ success: true, message: 'Seeding complete!' });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
