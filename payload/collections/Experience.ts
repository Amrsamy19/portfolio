import { CollectionConfig } from 'payload';

export const Experience: CollectionConfig = {
  slug: 'experience',
  defaultSort: 'order',
  admin: {
    useAsTitle: 'company',
    defaultColumns: ['company', 'role', 'startDate', 'isCurrent', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'company', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMMM yyyy',
        },
      },
    },
    {
      name: 'isCurrent',
      type: 'checkbox',
      label: 'Present',
      defaultValue: false,
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMMM yyyy',
        },
        condition: (_, siblingData) => !siblingData.isCurrent,
      },
    },
    { name: 'location', type: 'text', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'order', type: 'number', required: true },
  ],
};
