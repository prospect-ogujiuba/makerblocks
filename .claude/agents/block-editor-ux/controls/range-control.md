# RangeControl

For number attributes with min/max bounds.

## Usage

```jsx
import { RangeControl } from "@wordpress/components";

<RangeControl
    label={__("Items Per Page", "makerblocks")}
    value={attributes.itemsPerPage}
    onChange={(value) => setAttributes({ itemsPerPage: value })}
    min={6}
    max={24}
    step={3}
    help={__("Number of items to display", "makerblocks")}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Control label (i18n) |
| value | number | Yes | Current number value |
| onChange | function | Yes | setAttributes handler |
| min | number | Yes | Minimum value |
| max | number | Yes | Maximum value |
| step | number | No | Increment step (default: 1) |
| help | string | Yes | Help text (i18n) |

## When to Use

- Number attributes with defined range
- itemsPerPage, columns, spacing
- Any numeric setting with bounds

## From Handoff

Map from attributes_schema:
```yaml
itemsPerPage:
  type: number
  default: 12
  min: 6
  max: 24
  step: 6
```
