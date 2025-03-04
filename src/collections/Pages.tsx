/**
 * @fileoverview Pages collection configuration for Payload CMS
 * @module Pages
 */

import { HeroBlock } from '@/blocks/HeroBlock'
import { ContentBlock } from '@/blocks/ContentBlock'
import { CollectionConfig } from 'payload'
import { NewsletterFormBlock } from '@/blocks/NewsletterFormBlock'

/**
 * Pages collection configuration
 * Defines the structure and fields for pages in Payload CMS
 *
 * @type {CollectionConfig}
 * @property {string} slug - Unique identifier for the collection
 * @property {Array<Object>} fields - Field definitions for the collection
 * @property {Object} fields.title - Text field for page title
 * @property {Object} fields.slug - Text field for page URL slug
 * @property {Object} fields.layout - Blocks field for page layout components
 */
const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [HeroBlock, ContentBlock, NewsletterFormBlock],
    },
  ],
}

export default Pages
