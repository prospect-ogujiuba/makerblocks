# Color Controls

For color selection attributes.

## ColorPicker

Full color picker:
```jsx
import { ColorPicker } from "@wordpress/components";

<ColorPicker
    color={attributes.backgroundColor}
    onChange={(color) => setAttributes({ backgroundColor: color })}
    enableAlpha
/>
```

## ColorPalette

Theme color palette:
```jsx
import { ColorPalette } from "@wordpress/components";

const colors = [
    { name: 'Primary', color: '#3b82f6' },
    { name: 'Secondary', color: '#64748b' },
    { name: 'Success', color: '#22c55e' }
];

<ColorPalette
    colors={colors}
    value={attributes.accentColor}
    onChange={(color) => setAttributes({ accentColor: color })}
/>
```

## PanelColorSettings

Inspector panel integration:
```jsx
import { PanelColorSettings } from "@wordpress/block-editor";

<PanelColorSettings
    title={__("Color Settings", "makerblocks")}
    initialOpen={false}
    colorSettings={[
        {
            value: backgroundColor,
            onChange: (color) => setAttributes({ backgroundColor: color }),
            label: __("Background Color", "makerblocks")
        }
    ]}
/>
```

## When to Use

- ColorPicker: Custom color selection
- ColorPalette: Preset theme colors
- PanelColorSettings: Standard WP color panel
