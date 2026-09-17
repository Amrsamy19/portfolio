import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
    { name: 'isFreelance', type: 'checkbox', defaultValue: false },
    { name: 'bullets', type: 'array', required: true, fields: [{ name: 'text', type: 'text', required: true }] },
    { name: 'liveUrl', type: 'text' },
    { name: 'repoUrl', type: 'text' },
    { name: 'order', type: 'number', required: true },
  ],
};
