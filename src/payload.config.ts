/**
 * @fileoverview Main configuration file for Payload CMS
 * @module payload.config
 */

// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Pages from './collections/Pages'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * Payload CMS configuration
 * Defines the core settings and features of the CMS
 *
 * @type {import('payload').Config}
 * @property {Object} admin - Admin panel configuration
 * @property {string} admin.user - Collection to use for admin users
 * @property {Object} admin.importMap - Import map configuration for admin UI
 * @property {Array<CollectionConfig>} collections - Registered collections
 * @property {Function} editor - Rich text editor configuration
 * @property {string} secret - Secret key for authentication
 * @property {Object} typescript - TypeScript configuration
 * @property {Object} db - Database adapter configuration
 * @property {Function} sharp - Image processing configuration
 * @property {Array<Object>} plugins - Registered plugins
 */
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    formBuilderPlugin({}),
  ],
})
