# Pattern: edit.js

<when>Always - required for every block</when>

## Template

```javascript
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl, RangeControl } from "@wordpress/components";

/**
 * Edit component for {Block Title}
 */
export default function Edit({ attributes, setAttributes }) {
	const { {destructured_attributes} } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Block Settings", "makerblocks")} initialOpen={true}>
					{/* Controls based on attribute types */}
				</PanelBody>
			</InspectorControls>

			<section {...useBlockProps()}>
				<div className="bg-slate-50 p-6 rounded-lg border-2 border-dashed border-slate-300">
					<h3 className="text-lg font-bold text-slate-700 mb-2">
						{__("{Block Title} - Editor Preview", "makerblocks")}
					</h3>
					<p className="text-sm text-slate-600">
						{__("Preview with placeholder data. Configure in sidebar →", "makerblocks")}
					</p>
				</div>
			</section>
		</>
	);
}
```

## Attribute-to-Control Mapping

| Attribute Type | Control Component |
|---------------|-------------------|
| string | TextControl |
| boolean | ToggleControl |
| number | RangeControl |
| object (image) | MediaUpload |
| array | Custom multi-select |

## Control Template

```javascript
<TextControl
	label={__("Label", "makerblocks")}
	value={attributeName}
	onChange={(value) => setAttributes({ attributeName: value })}
	help={__("Help text", "makerblocks")}
/>
```
