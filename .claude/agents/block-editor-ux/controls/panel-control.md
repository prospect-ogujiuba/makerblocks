# Panel Controls

For organizing InspectorControls.

## PanelBody

```jsx
import { PanelBody } from "@wordpress/components";

<PanelBody
    title={__("Display Options", "makerblocks")}
    initialOpen={true}
>
    {/* Controls */}
</PanelBody>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Panel header (i18n) |
| initialOpen | boolean | Yes | Default open state |
| icon | string | No | Dashicon name |

## PanelRow

For horizontal alignment:
```jsx
import { PanelRow } from "@wordpress/components";

<PanelRow>
    <ToggleControl />
    <Button />
</PanelRow>
```

## Organization Rules

**initialOpen={true}:**
- Primary settings panel
- Content source selection
- Most-used options

**initialOpen={false}:**
- Secondary panels
- Style settings
- Advanced configuration

## Example Structure

```jsx
<InspectorControls>
    <PanelBody title={__("Content", "makerblocks")} initialOpen={true}>
        {/* Primary controls */}
    </PanelBody>

    <PanelBody title={__("Display", "makerblocks")} initialOpen={false}>
        {/* Display toggles */}
    </PanelBody>

    <PanelBody title={__("Advanced", "makerblocks")} initialOpen={false}>
        {/* Advanced settings */}
    </PanelBody>
</InspectorControls>
```
