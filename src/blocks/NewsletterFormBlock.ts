/**
 * @fileoverview Newsletter form block configuration for Payload CMS
 * @module NewsletterFormBlock
 */

import { Block } from 'payload'

/**
 * Newsletter form block configuration
 * Defines the structure and fields for the newsletter form block in Payload CMS
 *
 * @type {Block}
 * @property {string} slug - Unique identifier for the block type
 * @property {Array<Object>} fields - Field definitions for the block
 */
export const NewsletterFormBlock: Block = {
  slug: 'newsletter-form',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: false,
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
}
