/**
 * @fileoverview Hero block configuration for Payload CMS
 * @module HeroBlock
 */

import { Block } from 'payload'

/**
 * Hero block configuration
 * Defines the structure and fields for the hero section block in Payload CMS
 *
 * @type {Block}
 * @property {string} slug - Unique identifier for the block type
 * @property {Array<Object>} fields - Field definitions for the block
 * @property {Object} fields.heading - Main heading text field
 * @property {Object} fields.subheading - Rich text field for the subheading
 * @property {Object} fields.image - Upload field for the hero image
 * @property {Object} fields.cta_button - Group field for call-to-action button
 * @property {Object} fields.cta_button.label - Text field for button label
 * @property {Object} fields.cta_button.url - Text field for button URL
 */
export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'cta_button',
      label: 'CTA Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
