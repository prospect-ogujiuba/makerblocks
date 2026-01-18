/**
 * CANONICAL ATTRIBUTE PATTERN - Template Block
 *
 * This template demonstrates the correct pattern for handling block attributes:
 *
 * 1. SINGLE SOURCE OF TRUTH: All attributes defined in block.json
 * 2. NO REDUNDANCY: Attributes NOT redefined in component
 * 3. WORDPRESS PROVIDES: attributes and setAttributes automatically passed as props
 * 4. COMPONENT CONSUMES: Destructure from props, use directly
 *
 * block.json = defines schema -> WordPress = provides to component -> component = uses
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/
 */
import { __ } from "@wordpress/i18n"
import { useBlockProps, InspectorControls } from "@wordpress/block-editor"
import {
  PanelBody,
  TextControl,
  ToggleControl,
  RangeControl,
} from "@wordpress/components"

import type { BlockEditProps } from "../../types/wordpress"

/**
 * Block attributes type (mirrors block.json)
 */
interface TemplateAttributes {
  heading: string
  content: string
  showFeature: boolean
  numericValue: number
}

/**
 * Edit component for Template Block
 *
 * PATTERN NOTES:
 * - Receives {attributes, setAttributes} from WordPress (NOT defined here)
 * - Attributes come from block.json definitions
 * - No default values needed - WordPress uses block.json defaults
 * - Use setAttributes() to update (partial updates supported)
 */
export default function Edit({
  attributes,
  setAttributes,
}: BlockEditProps<TemplateAttributes>) {
  const { heading, content, showFeature, numericValue } = attributes

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Block Settings", "makerblocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Heading", "makerblocks")}
            value={heading}
            onChange={(value: string) => setAttributes({ heading: value })}
            help={__("Main heading for this block", "makerblocks")}
          />
          <TextControl
            label={__("Content", "makerblocks")}
            value={content}
            onChange={(value: string) => setAttributes({ content: value })}
            help={__("Block content text", "makerblocks")}
          />
          <ToggleControl
            label={__("Show Feature", "makerblocks")}
            checked={showFeature}
            onChange={(value: boolean) => setAttributes({ showFeature: value })}
            help={__("Toggle to show/hide optional feature", "makerblocks")}
          />
          <RangeControl
            label={__("Numeric Value", "makerblocks")}
            value={numericValue}
            onChange={(value: number | undefined) =>
              setAttributes({ numericValue: value ?? 100 })
            }
            min={0}
            max={200}
            help={__("Example numeric setting", "makerblocks")}
          />
        </PanelBody>
      </InspectorControls>
      <section {...useBlockProps()}>
        <div className="bg-slate-50 p-6 rounded-lg border-2 border-dashed border-slate-300">
          <h3 className="text-lg font-bold text-slate-700 mb-2">{heading}</h3>
          <p className="text-sm text-slate-600 mb-3">{content}</p>
          {showFeature && (
            <div className="text-xs text-slate-500 italic">
              Optional feature is enabled (Value: {numericValue})
            </div>
          )}
          <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-200">
            {__("Editor preview - configure settings in sidebar ->", "makerblocks")}
          </p>
        </div>
      </section>
    </>
  )
}
