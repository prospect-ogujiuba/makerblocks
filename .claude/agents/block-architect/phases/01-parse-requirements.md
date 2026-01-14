# Phase 1: Parse Requirements

<purpose>
Parse input handoff and extract block specification from requirements.
</purpose>

## Input: requirements_handoff.yaml

Location: .planning/handoffs/requirements_handoff.yaml

### Required Fields
```yaml
schema:
  block_name: string      # kebab-case (e.g., "services-grid")
  title: string           # Display title (e.g., "Services Grid")
  category: string        # makerblocks | makerblocks-layout | makerblocks-templates
  attributes: array       # [{name, type, default}]
```

### Optional Fields
```yaml
  data_source:
    endpoint: string      # REST API endpoint (e.g., "/tr-api/rest/services")
    dynamic: boolean      # true = client-side fetch needed
  ui_features: array      # [filters, pagination, loading_states]
  icon: string            # Dashicons name
  supports: object        # {align: true, html: false}
```

## Extraction Logic

1. **Block naming derivation:**
   - Directory: `{block_name}` (kebab-case)
   - Component: PascalCase from block_name (services-grid → ServicesGrid)
   - Mount ID: `makerblocks-{block_name}`
   - Block name: `makerblocks/{block_name}`

2. **Attribute analysis:**
   - Identify attribute types needed (triggers phase 2 loading)
   - Note which need special handling (object, array)

3. **UI complexity assessment:**
   - Static (no data_source) vs Dynamic (REST fetch)
   - Skeleton variant selection based on ui_features

## Output: block_spec

Pass to Phase 2:
```yaml
block_spec:
  names:
    directory: "{block-name}"
    component: "{BlockName}"
    mount_id: "makerblocks-{block-name}"
    block_name: "makerblocks/{block-name}"
  attributes: [{name, type, default}]
  is_dynamic: boolean
  skeleton_variant: card|hero|grid|form|null
```
