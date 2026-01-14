# TextControl

For string attributes in InspectorControls sidebar.

## Usage

```jsx
import { TextControl } from "@wordpress/components";

<TextControl
    label={__("Button Text", "makerblocks")}
    value={attributes.buttonText}
    onChange={(value) => setAttributes({ buttonText: value })}
    help={__("Text displayed on button", "makerblocks")}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Control label (i18n) |
| value | string | Yes | Current attribute value |
| onChange | function | Yes | setAttributes handler |
| help | string | Yes | Help text (i18n) |
| placeholder | string | No | Placeholder text |

## When to Use

- String attributes in sidebar
- URLs, button text, labels
- NOT for editable text in preview (use RichText)

## TextareaControl Variant

For longer text:
```jsx
<TextareaControl
    label={__("Description", "makerblocks")}
    value={attributes.description}
    onChange={(value) => setAttributes({ description: value })}
    rows={4}
/>
```
