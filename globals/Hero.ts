import { GlobalConfig } from 'payload';

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'heading', type: 'text', required: true, defaultValue: 'AMR SAMY' },
    { name: 'subheading', type: 'text', required: true, defaultValue: 'Software Engineer' },
    { name: 'description', type: 'textarea', defaultValue: 'A Software Engineer focused on building scalable, accessible, and responsive web applications.' },
    { name: 'primaryButtonText', type: 'text', defaultValue: 'Hire Me' },
    { name: 'primaryButtonLink', type: 'text', defaultValue: 'mailto:amrsamy622@gmail.com' },
    { name: 'secondaryButtonText', type: 'text', defaultValue: 'Resume' },
    { name: 'secondaryButtonLink', type: 'text', defaultValue: '/Amr_Samy_CV.pdf' },
  ],
};
