# Testing Patterns

**Analysis Date:** 2026-01-18

## Test Framework

**Runner:**
- Vitest 4.0.17 (`package.json`)
- Config: `vitest.config.ts`

**Assertion Library:**
- Vitest built-in expect
- jest-dom matchers extended

**Run Commands:**
```bash
npm test                    # Run all tests
npm run test:ui             # Interactive UI
npm run test:coverage       # Coverage report
npm run test:blocks         # Block structure validation (script missing)
```

## Test File Organization

**Location:**
- Setup file: `src/test/setup.ts`
- Test pattern: `*.test.ts` / `*.test.tsx` (none exist yet)
- Co-located with source (intended pattern)

**Naming:**
- `{module-name}.test.ts` for unit tests
- No integration/e2e tests

**Structure:**
```
src/
├── lib/
│   ├── api.ts
│   └── api.test.ts (to be created)
├── scripts/
│   ├── MakerBlocks.tsx
│   └── MakerBlocks.test.tsx (to be created)
└── test/
    └── setup.ts
```

## Test Structure

**Suite Organization:**
```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('ModuleName', () => {
  describe('functionName', () => {
    beforeEach(() => {
      // reset state
    })

    it('should handle valid input', () => {
      // arrange
      // act
      // assert
    })
  })
})
```

**Patterns:**
- Vitest globals enabled (no imports needed for describe/it/expect)
- jsdom environment for DOM testing
- beforeEach for per-test setup

## Mocking

**Framework:**
- Vitest built-in (vi)

**Window Global Mock (from setup.ts):**
```typescript
window.siteData = {
  siteUrl: 'http://localhost',
  siteName: 'Test Site',
  nonce: 'test-nonce',
  restNonce: 'test-rest-nonce',
}
```

**What to Mock:**
- `window.siteData` (mocked in setup)
- fetch for API calls
- WordPress globals (@wordpress/*)

**What NOT to Mock:**
- Pure utility functions
- Type definitions

## Fixtures and Factories

**Test Data:**
- Window mock in `src/test/setup.ts`
- No factory patterns established yet

**Location:**
- Shared fixtures: `src/test/fixtures/` (to be created)
- Inline mocks for simple cases

## Coverage

**Requirements:**
- No enforced coverage target
- Coverage available via `npm run test:coverage`

**Configuration:**
- Vitest built-in coverage
- Exclusions not configured

**View Coverage:**
```bash
npm run test:coverage
open coverage/index.html
```

## Test Types

**Unit Tests:**
- Scope: Single function/component
- Environment: jsdom
- Speed: Fast (<100ms)
- Examples: None yet (to be created)

**Integration Tests:**
- Not established

**E2E Tests:**
- Not established
- Block validation script referenced but missing

## Common Patterns

**Async Testing:**
```typescript
it('should fetch data', async () => {
  const result = await fetchApi('endpoint')
  expect(result).toBeDefined()
})
```

**Error Testing:**
```typescript
it('should throw on invalid input', () => {
  expect(() => parse(null)).toThrow()
})
```

**React Component Testing:**
```typescript
import { render, screen } from '@testing-library/react'

it('renders button', () => {
  render(<Button>Click</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
```

## Current Gaps

**Missing Tests:**
- No `*.test.ts` or `*.test.tsx` files in codebase
- Block validation script (`tests/validate-block-structure.js`) referenced but doesn't exist
- No component tests for UI layer
- No API client tests

**Priority Areas:**
1. `src/lib/api.ts` - Critical for data flow
2. `src/scripts/MakerBlocks.tsx` - Hydration logic
3. `src/components/ui/*.tsx` - UI primitives

---

*Testing analysis: 2026-01-18*
*Update when test patterns change*
