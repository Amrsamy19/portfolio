import { CollectionConfig } from 'payload';

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    useAsTitle: 'company',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'company', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'period', type: 'text', required: true },
    { name: 'location', type: 'text', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'order', type: 'number', required: true },
  ],
};
