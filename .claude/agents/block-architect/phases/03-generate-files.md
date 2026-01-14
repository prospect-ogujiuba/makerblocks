# Phase 3: Generate Files

<purpose>
Generate the 5-file block structure using block_spec and attributes_schema.
</purpose>

## Triggers: Load Required Patterns

<triggers>
- condition: "always"
  loads: ["patterns/block-json.md", "patterns/index-js.md"]
- condition: "always"
  loads: ["patterns/edit-js.md", "patterns/component-jsx.md"]
- condition: "always"
  loads: ["patterns/render-php.md"]
- condition: "block_spec.is_dynamic == true"
  loads: ["patterns/render-php.md#fetch-pattern"]
- condition: "block_spec.skeleton_variant != null"
  loads: ["skeletons/{skeleton_variant}.md"]
</triggers>

## File Generation Order

### 1. block.json
- Load: patterns/block-json.md
- Substitutions: block_name, title, category, attributes_schema
- apiVersion: 3 (MANDATORY)

### 2. index.js
- Load: patterns/index-js.md
- Standard template, minimal substitutions

### 3. edit.js
- Load: patterns/edit-js.md
- Generate InspectorControls based on attributes
- Map types to controls: string→TextControl, boolean→ToggleControl, number→RangeControl

### 4. {BlockName}.jsx
- Load: patterns/component-jsx.md
- PascalCase filename from block_spec.names.component
- Document expected props from component-data

### 5. render.php
- Load: patterns/render-php.md
- Load: skeletons/{variant}.md if specified
- Mount ID: block_spec.names.mount_id
- component-data encoding with JSON_UNESCAPED_SLASHES

## Output Location

Files created at: `src/blocks-dev/{block-name}/`

## Verification Checklist

- [ ] All 5 files created
- [ ] apiVersion 3 in block.json
- [ ] get_block_wrapper_attributes() in render.php
- [ ] component-data properly encoded
- [ ] Skeleton loader included
- [ ] No database queries in render.php
