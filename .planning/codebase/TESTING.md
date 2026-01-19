# Testing

**Analysis Date:** 2026-01-19

## Framework

**Primary:**
- Vitest 4.0.17 - Test runner
- @testing-library/react 16.3.1 - React component testing
- jsdom 27.4.0 - DOM environment

## Configuration

**File:** `vitest.config.ts`

```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Commands

```bash
npm run test           # Run tests
npm run test:ui        # Run with UI
npm run test:coverage  # Run with coverage
npm run test:blocks    # Validate block structure
```

## Test Structure

**Location:** `src/test/`

**Setup file:** `src/test/setup.ts`

## Block Validation

**File:** `tests/validate-block-structure.js`

**Purpose:** Validates block.json structure for all blocks in `src/blocks-dev/`

**Run:** `npm run test:blocks`

## Coverage Gaps

**Not tested:**
- React components (TSX)
- PHP modules (inc/*.php)
- API integration
- Block editor functionality

**Currently tested:**
- Block structure validation only
