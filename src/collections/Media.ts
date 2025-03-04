/**
 * @fileoverview Media collection configuration for Payload CMS
 * @module Media
 */

import type { CollectionConfig } from 'payload'

/**
 * Media collection configuration
 * Defines the structure and fields for media uploads in Payload CMS
 *
 * @type {CollectionConfig}
 * @property {string} slug - Unique identifier for the collection
 * @property {Object} access - Access control configuration
 * @property {Function} access.read - Function determining read access (public in this case)
 * @property {Array<Object>} fields - Field definitions for the collection
 * @property {Object} fields.alt - Text field for image alt text
 * @property {boolean} upload - Enables file upload functionality
 */
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
