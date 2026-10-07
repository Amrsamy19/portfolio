import { GlobalConfig } from 'payload';

export const Theme: GlobalConfig = {
  slug: 'theme',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'randomize',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/payload/RandomizeTheme',
        }
      }
    },
    { name: 'background', type: 'text', defaultValue: '#0a0a0b', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
    { name: 'foreground', type: 'text', defaultValue: '#fafafa', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
    { name: 'muted', type: 'text', defaultValue: '#c4b5fd', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
    { name: 'accent', type: 'text', defaultValue: '#c084fc', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
    { name: 'accentHover', type: 'text', defaultValue: '#a855f7', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
    { name: 'card', type: 'text', defaultValue: '#141416', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
    { name: 'border', type: 'text', defaultValue: '#27272a', required: true, admin: { components: { Field: '@/components/payload/ColorField' } } },
  ],
};
