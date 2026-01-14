# Phase 2: Plan Controls

Plan panel organization and control grouping.

## Load Control Patterns

Based on attribute types, load from controls/:
- boolean attributes → toggle-control.md
- string attributes → text-control.md
- number with min/max → range-control.md
- enum/options → select-control.md
- media objects → media-control.md
- colors → color-control.md

## Panel Organization Rules

**initialOpen={true}** (primary):
- Content source selection
- Most-used settings
- Required fields

**initialOpen={false}** (secondary):
- Display options
- Style settings
- Advanced configuration

## Grouping Strategy

```jsx
<InspectorControls>
    <PanelBody title="Content Source" initialOpen={true}>
        {/* Mode selection, binding controls */}
    </PanelBody>

    <PanelBody title="Display Options" initialOpen={false}>
        {/* Toggles, range controls */}
    </PanelBody>

    <PanelBody title="Style Settings" initialOpen={false}>
        {/* Colors, spacing */}
    </PanelBody>
</InspectorControls>
```

## Conditional Controls

```jsx
{showFilters && (
    <TextControl label="Filter Label" />
)}
```

## Output

Panel structure plan with control assignments.
