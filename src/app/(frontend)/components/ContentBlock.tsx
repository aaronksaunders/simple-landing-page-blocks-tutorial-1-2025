/**
 * @fileoverview Content block component for rendering content sections
 * @module ContentBlock
 */

import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

/**
 * Props type for the content block extracted from Page layout
 * @typedef {Extract<Page['layout'][0], { blockType: 'content' }>} ContentProps
 */
type ContentProps = Extract<Page['layout'][0], { blockType: 'content' }>

/**
 * ContentBlock component
 * Renders a content section with a heading and rich text content
 *
 * @component
 * @param {Object} props - Component props
 * @param {ContentProps} props.block - Content block configuration from Payload CMS
 * @returns {JSX.Element} Content section component
 */
export default function ContentBlock({ block }: { block: ContentProps }) {
  return (
    <div>
      <div>
        <h2>{block.heading}</h2>
        <RichText data={block.content} />
      </div>
    </div>
  )
}
