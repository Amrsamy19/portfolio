import { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'Amr Samy | Software Engineer' },
    { name: 'description', type: 'textarea', required: true, defaultValue: 'Software Engineer specializing in React, Next.js, and TypeScript.' },
    { name: 'keywords', type: 'array', fields: [{ name: 'keyword', type: 'text' }] },
    { name: 'socialLinks', type: 'array', fields: [{ name: 'label', type: 'text' }, { name: 'url', type: 'text' }] },
    { name: 'navigation', type: 'array', fields: [{ name: 'label', type: 'text' }, { name: 'sectionId', type: 'text' }] },
  ],
};
