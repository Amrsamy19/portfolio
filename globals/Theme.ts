import { GlobalConfig } from 'payload';

export const Theme: GlobalConfig = {
  slug: 'theme',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'background', type: 'text', defaultValue: '#0a0a0b', required: true },
    { name: 'foreground', type: 'text', defaultValue: '#fafafa', required: true },
    { name: 'muted', type: 'text', defaultValue: '#c4b5fd', required: true },
    { name: 'accent', type: 'text', defaultValue: '#c084fc', required: true },
    { name: 'accentHover', type: 'text', defaultValue: '#a855f7', required: true },
    { name: 'card', type: 'text', defaultValue: '#141416', required: true },
    { name: 'border', type: 'text', defaultValue: '#27272a', required: true },
  ],
};
