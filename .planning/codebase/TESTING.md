# Testing Patterns

**Analysis Date:** 2026-01-18

## Test Framework

**Runner:**
- Vitest - Modern test runner with TypeScript support
- Config: `vitest.config.ts` in project root

**Assertion Library:**
- Vitest built-in expect
- @testing-library/jest-dom for DOM matchers

**Run Commands:**
```bash
npm test                  # Run all tests (watch mode)
npm run test:ui          # Vitest UI
npm run test:coverage    # Coverage report
npm run test:blocks      # Block structure validation
npm run lint:js          # ESLint via @wordpress/scripts
npm run lint:css         # Stylelint via @wordpress/scripts
```

## Test File Organization

**Location:**
- `src/**/*.test.ts` - Unit tests (co-located with source)
- `src/test/setup.ts` - Test setup file
- `tests/validate-block-structure.js` - Block validation (legacy)

**Naming:**
- `*.test.ts` or `*.test.tsx` for test files
- Co-located with source files

**Structure:**
```
src/
├── lib/
│   ├── utils.ts
│   └── utils.test.ts       # Unit tests
├── components/
│   └── ui/
│       ├── button.tsx
│       └── button.test.tsx  # Component tests
├── test/
│   └── setup.ts            # Global test setup
tests/
└── validate-block-structure.js  # Block validation
```

## Test Structure

**Suite Organization:**
```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  describe('rendering', () => {
    it('renders with default variant', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toHaveClass('bg-primary');
    });

    it('renders with outline variant', () => {
      render(<Button variant="outline">Click me</Button>);
      expect(screen.getByRole('button')).toHaveClass('border');
    });
  });

  describe('interactions', () => {
    it('calls onClick when clicked', async () => {
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Click me</Button>);

      await userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledOnce();
    });
  });
});
```

**Patterns:**
- Use beforeEach for per-test setup
- Use afterEach to restore mocks: `vi.restoreAllMocks()`
- Group related tests with nested describe blocks
- One assertion focus per test

## Mocking

**Framework:**
- Vitest built-in mocking (`vi`)
- Module mocking via `vi.mock()` at top of test file

**Patterns:**
```typescript
import { vi } from 'vitest';

// Mock module
vi.mock('../lib/api', () => ({
  fetchData: vi.fn()
}));

// Mock window.siteData
beforeEach(() => {
  vi.stubGlobal('siteData', {
    siteUrl: 'https://test.local',
    nonce: 'test-nonce',
    restNonce: 'test-rest-nonce'
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
});
```

**What to Mock:**
- External API calls (fetch)
- window.siteData globals
- WordPress dependencies (@wordpress/*)
- Browser APIs (localStorage, etc.)

**What NOT to Mock:**
- Internal pure functions
- Simple utilities
- React component internals

## Fixtures and Factories

**Test Data:**
```typescript
// Factory functions in test file
function createTestService(overrides?: Partial<Service>): Service {
  return {
    id: 1,
    name: 'Test Service',
    status: 'active',
    ...overrides
  };
}

// Shared fixtures
// src/test/fixtures/services.ts
export const mockServices = [
  createTestService({ id: 1, name: 'Service A' }),
  createTestService({ id: 2, name: 'Service B' }),
];
```

**Location:**
- Factory functions: Define in test file near usage
- Shared fixtures: `src/test/fixtures/` for multi-file test data

## Coverage

**Requirements:**
- No enforced coverage target (yet)
- Coverage tracked for awareness
- Focus on critical paths (utilities, components)

**Configuration:**
```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      exclude: ['**/*.test.*', 'src/test/**']
    }
  }
});
```

**View Coverage:**
```bash
npm run test:coverage
open coverage/index.html
```

## Test Types

**Unit Tests:**
- Test single function/component in isolation
- Mock all external dependencies
- Fast: each test <100ms
- Location: `src/**/*.test.ts`

**Component Tests:**
- Test React components with @testing-library/react
- Focus on user-visible behavior
- Location: `src/components/**/*.test.tsx`

**Structure Validation:**
- Validates 5-file pattern for blocks
- Excludes `_template` block
- Location: `tests/validate-block-structure.js`

**No E2E Tests:**
- No Playwright/Cypress configured
- CLI integration tested manually

## Common Patterns

**Async Testing:**
```typescript
it('should handle async operation', async () => {
  const result = await fetchData();
  expect(result).toBe('expected');
});
```

**Error Testing:**
```typescript
it('should throw on invalid input', () => {
  expect(() => parse(null)).toThrow('Cannot parse null');
});

// Async error
it('should reject on failure', async () => {
  await expect(asyncCall()).rejects.toThrow('error message');
});
```

**Component Testing:**
```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('shows loading state then data', async () => {
  render(<DataComponent />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});
```

**Snapshot Testing:**
- Not currently used
- Prefer explicit assertions for clarity

## Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: { '@': '/src' }  // Note: aliases work in tests, not wp-scripts build
  }
});
```

## Gaps and Recommendations

**Current Coverage:**
- Block structure validation ✓
- Vitest infrastructure ✓ (newly added)

**Priority Areas:**
- Shadcn component tests (High)
- Utility function tests - cn(), api helpers (High)
- Block component tests (Medium)
- Integration tests for REST API data fetching (Medium)

---

*Testing analysis: 2026-01-18*
*Update when test patterns change*
