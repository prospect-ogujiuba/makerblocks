# ToggleControl

For boolean attributes (on/off switches).

## Usage

```jsx
import { ToggleControl } from "@wordpress/components";

<ToggleControl
    label={__("Show Feature", "makerblocks")}
    checked={attributes.showFeature}
    onChange={(value) => setAttributes({ showFeature: value })}
    help={__("Enable optional feature", "makerblocks")}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Control label (i18n) |
| checked | boolean | Yes | Current boolean value |
| onChange | function | Yes | setAttributes handler |
| help | string | Yes | Help text (i18n) |

## When to Use

- Boolean attributes: showSearch, showFilters, etc.
- Feature toggles
- Visibility controls

## Common Patterns

```jsx
// Multiple related toggles
<ToggleControl
    label={__("Show Search", "makerblocks")}
    checked={showSearch}
    onChange={(value) => setAttributes({ showSearch: value })}
    help={__("Display search bar", "makerblocks")}
/>
<ToggleControl
    label={__("Show Filters", "makerblocks")}
    checked={showFilters}
    onChange={(value) => setAttributes({ showFilters: value })}
    help={__("Display filter panel", "makerblocks")}
/>
```
