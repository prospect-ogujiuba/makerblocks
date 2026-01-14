# Phase 2: Plan Tests

Determine test categories and required mocks.

## Load Based on Focus

Load from categories/:
- `render_tests: true` → categories/render-tests.md
- `interaction_tests: true` → categories/interaction-tests.md
- `loading_states: true` → patterns/async-testing.md
- `error_handling: true` → patterns/mock-patterns.md

## Mock Requirements

### Frontend Components
```jsx
// Fetch mock
global.fetch = jest.fn();
```

### Editor Components
```jsx
// WordPress mocks
jest.mock('@wordpress/block-editor', () => ({...}));
jest.mock('@wordpress/components', () => ({...}));
jest.mock('@wordpress/data', () => ({...}));
```

## Test Structure Plan

```
describe('ComponentName', () => {
    describe('rendering', () => {...});
    describe('user interactions', () => {...});
    describe('data fetching', () => {...});
    describe('error handling', () => {...});
});
```

## Output

Test file structure:
- describe blocks
- Mock setup
- Test cases per category
