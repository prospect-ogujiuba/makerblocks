# SelectControl

For enum/options selection.

## Usage

```jsx
import { SelectControl } from "@wordpress/components";

<SelectControl
    label={__("Display Style", "makerblocks")}
    value={attributes.displayStyle}
    options={[
        { label: __("Grid", "makerblocks"), value: "grid" },
        { label: __("List", "makerblocks"), value: "list" },
        { label: __("Cards", "makerblocks"), value: "cards" }
    ]}
    onChange={(value) => setAttributes({ displayStyle: value })}
    help={__("Choose layout style", "makerblocks")}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Control label (i18n) |
| value | string | Yes | Current selected value |
| options | array | Yes | Array of {label, value} |
| onChange | function | Yes | setAttributes handler |
| help | string | Yes | Help text (i18n) |
| multiple | boolean | No | Allow multi-select |

## With Placeholder

```jsx
options={[
    { label: __("— Select —", "makerblocks"), value: "" },
    { label: __("Option 1", "makerblocks"), value: "option1" }
]}
```

## Dynamic Options

```jsx
options={[
    { label: __("— Select —", "makerblocks"), value: "" },
    ...items.map(item => ({
        label: item.name,
        value: item.id.toString()
    }))
]}
```
