/**
 * @fileoverview Content block configuration for Payload CMS
 * @module ContentBlock
 */

import { Block } from 'payload'

/**
 * Content block configuration
 * Defines the structure and fields for the content block in Payload CMS
 *
 * @type {Block}
 * @property {string} slug - Unique identifier for the block type
 * @property {Array<Object>} fields - Field definitions for the block
 * @property {Object} fields.heading - Text field for the block heading
 * @property {Object} fields.content - Rich text field for the main content
 */
export const ContentBlock: Block = {
  slug: 'content',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
