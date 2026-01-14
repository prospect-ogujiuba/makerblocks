# Phase 1: Analyze Attributes

Parse the architecture_handoff to extract attribute requirements and map to controls.

## Input

```yaml
handoff:
  schema:
    attributes_schema:
      showSearch:
        type: boolean
        default: true
      itemsPerPage:
        type: number
        default: 12
        min: 6
        max: 24
  decisions: []
  discovery_hints: []
```

## Attribute-to-Control Mapping

| Attribute Type | Control | Condition |
|----------------|---------|-----------|
| string | TextControl | In sidebar |
| string | RichText | In preview (editable) |
| boolean | ToggleControl | Always |
| number | RangeControl | Has min/max |
| number | NumberControl | No range specified |
| array | SelectControl | With multiple prop |
| object (media) | MediaUpload | For images/files |

## Extraction Steps

1. List all attributes from `attributes_schema`
2. Determine control type based on type and constraints
3. Note min/max/step for RangeControl
4. Note enum values for SelectControl
5. Apply decisions from handoff

## Output

Attribute map for Phase 2:
```
- heading: string → RichText (preview)
- showSearch: boolean → ToggleControl
- itemsPerPage: number (min:6, max:24) → RangeControl
```
