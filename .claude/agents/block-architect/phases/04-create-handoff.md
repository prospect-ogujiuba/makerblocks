# Phase 4: Create Handoff

<purpose>
Produce architecture_handoff.yaml for downstream agents (react-component-dev, block-editor-ux).
</purpose>

## Handoff Location

Output: `.planning/handoffs/architecture_handoff.yaml`

## Required Sections

### 1. metadata
```yaml
metadata:
  from_stage: "block-architecture"
  to_stage: "react-component, editor-ux"
  timestamp: "{current_timestamp}"
  version: "1.0"
```

### 2. schema
```yaml
schema:
  block_name: "{block-name}"
  mount_id: "makerblocks-{block-name}"
  component_file: "{BlockName}.jsx"
  attributes_schema: {from phase 2}
  component_data_shape: {props passed via render.php}
```

### 3. discovery_hints
For react-component-dev:
```yaml
- hint: "Component needs useFetch hook pattern"
  condition: "data_source.dynamic == true"
- hint: "Component needs filter state management"
  condition: "ui_features contains 'filters'"
```

For block-editor-ux:
```yaml
- hint: "Editor needs RangeControl for itemsPerPage"
  condition: "attribute type is number"
- hint: "Editor needs MediaUpload for image"
  condition: "attribute type is object with url property"
```

### 4. decisions
Document attribute decisions with rationale and impact.

### 5. constraints
```yaml
- constraint: "mount_id must match MakerBlocks.js registry"
  enforcement: "hard"
```

## Successor-Specific Data

### For react-component-dev
- Component data shape (props from render.php)
- Fetch requirements (endpoint, nonce handling)
- Loading/error state patterns

### For block-editor-ux
- Attributes to controls mapping
- Inspector panel organization
- Editor preview requirements
