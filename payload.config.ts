import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import path from 'path';
import { fileURLToPath } from 'url';

import { Users } from './collections/Users';
import { Projects } from './collections/Projects';
import { Experience } from './collections/Experience';
import { Skills } from './collections/Skills';
import { Media } from './collections/Media';

import { SiteSettings } from './globals/SiteSettings';
import { Hero } from './globals/Hero';
import { About } from './globals/About';
import { Theme } from './globals/Theme';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Projects,
    Experience,
    Skills,
    Media,
  ],
  globals: [
    SiteSettings,
    Hero,
    About,
    Theme,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgres://postgres:postgres@127.0.0.1:5432/portfolio',
      ssl: process.env.DATABASE_URI?.includes('127.0.0.1') ? false : { rejectUnauthorized: false },
      max: 5,
      idleTimeoutMillis: 1,
      connectionTimeoutMillis: 10000,
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
});
