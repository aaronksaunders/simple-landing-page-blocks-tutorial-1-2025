/**
 * @fileoverview Users collection configuration for Payload CMS
 * @module Users
 */

import type { CollectionConfig } from 'payload'

/**
 * Users collection configuration
 * Defines the structure and fields for user accounts in Payload CMS
 *
 * @type {CollectionConfig}
 * @property {string} slug - Unique identifier for the collection
 * @property {Object} admin - Admin panel configuration
 * @property {string} admin.useAsTitle - Field to use as title in admin UI
 * @property {boolean} auth - Enables authentication functionality
 * @property {Array<Object>} fields - Additional field definitions for the collection
 */
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
