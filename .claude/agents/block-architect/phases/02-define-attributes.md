# Phase 2: Define Attributes

<purpose>
Define block.json attributes schema based on block_spec from Phase 1.
</purpose>

## Triggers: Load Attribute Patterns

<triggers>
- condition: "attributes contains type='string'"
  loads: ["attributes/string.md"]
- condition: "attributes contains type='boolean'"
  loads: ["attributes/boolean.md"]
- condition: "attributes contains type='number'"
  loads: ["attributes/number.md"]
- condition: "attributes contains type='object'"
  loads: ["attributes/object.md"]
- condition: "attributes contains type='array'"
  loads: ["attributes/array.md"]
</triggers>

## Attribute Definition Process

For each attribute in block_spec.attributes:

1. **Determine JSON schema type:**
   - string → `"type": "string"`
   - boolean → `"type": "boolean"`
   - number → `"type": "number"`
   - object → `"type": "object"` with nested default
   - array → `"type": "array"` with items schema

2. **Set default value:**
   - Use provided default or type-appropriate fallback
   - String: `""`, Boolean: `false`, Number: `0`
   - Object: `{}`, Array: `[]`

3. **Add validation (if applicable):**
   - Number with range → use in editor RangeControl
   - String with options → use in editor SelectControl

## Output: attributes_schema

```json
{
  "exampleString": {
    "type": "string",
    "default": "Default text"
  },
  "showFeature": {
    "type": "boolean",
    "default": true
  },
  "itemCount": {
    "type": "number",
    "default": 12
  }
}
```

## Common Patterns

### Media/Image Attribute
```json
"backgroundImage": {
  "type": "object",
  "default": {"id": 0, "url": "", "alt": ""}
}
```

### Selection IDs
```json
"selectedIds": {
  "type": "array",
  "default": []
}
```

Pass attributes_schema to Phase 3 for block.json generation.
