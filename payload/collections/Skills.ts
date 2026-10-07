import { CollectionConfig } from 'payload';

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'category',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Database', value: 'database' },
        { label: 'Tools', value: 'tools' },
      ],
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [{ name: 'skill', type: 'text', required: true }],
    },
    { name: 'order', type: 'number', required: true },
  ],
};
