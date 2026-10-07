import { GlobalConfig } from 'payload';

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'eyebrow', type: 'text', defaultValue: 'This is me' },
    { name: 'heading', type: 'text', defaultValue: "Hi, I'm Amr." },
    { name: 'content', type: 'textarea', defaultValue: "I'm a Software Engineer dedicated to turning ideas into scalable, accessible web applications. I specialize in React, Next.js, and TypeScript, with experience in modern UI systems, authentication flows, and integrating REST APIs in real-world SaaS and dashboard environments." },
  ],
};
