# Phase 1: Analyze Component

Parse the test target to identify what needs testing.

## Input Schema

```yaml
test_target:
  block_name: services
  component: ServicesBlock
  file: src/blocks-dev/services/components/ServicesBlock.jsx
  component_type: frontend|editor|shared
  data_source:
    endpoint: /tr-api/rest/services
    method: GET
  props:
    - serviceId: number
    - showImage: boolean
focus:
  - render_tests: true
  - interaction_tests: true
  - loading_states: true
  - error_handling: true
```

## Analysis Steps

1. **Identify component type**
   - frontend: React component for client rendering
   - editor: WordPress Edit component with InspectorControls
   - shared: Used in both contexts

2. **Extract props interface**
   - List all props with types
   - Note required vs optional
   - Identify callback props (onSelect, onChange)

3. **Map data fetching**
   - API endpoints used
   - Loading/error state patterns
   - Response shape expected

4. **Catalog user interactions**
   - Click handlers
   - Form inputs
   - Selection behaviors

## Output

Test plan for Phase 2:
- Props to test
- Mocks required
- Interaction scenarios
- Edge cases to cover
