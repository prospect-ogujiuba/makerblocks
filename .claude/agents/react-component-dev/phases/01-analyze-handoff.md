# Phase 1: Analyze Handoff

Parse the architecture_handoff from block-architect to extract component requirements.

## Input

```yaml
handoff:
  metadata:
    from_stage: "block-architecture"
    to_stage: "react-component"
  schema:
    block_name: string
    mount_id: string
    component_file: string
    attributes_schema: object
    component_data_shape: object
  decisions: []
  discovery_hints: []
```

## Extraction Steps

1. **Identify mount point**
   - `mount_id` → Where component hydrates (matches render.php div ID)
   - `component_file` → Exact filename to create (PascalCase.jsx)

2. **Extract props structure**
   - `component_data_shape` → Props received from PHP
   - Map each prop to type and default value

3. **Catalog decisions**
   - Array handling requirements
   - State management implications
   - Special UI considerations

4. **Process discovery hints**
   - Check conditions (e.g., `data_source.dynamic == true`)
   - Queue pattern files to load in Phase 3

## Output

Internal state for Phase 2:
- `block_name`: kebab-case block identifier
- `component_name`: PascalCase component name
- `mount_id`: Hydration target ID
- `props`: Array of {name, type, default}
- `decisions`: Architectural decisions to honor
- `patterns_needed`: Pattern files to load
