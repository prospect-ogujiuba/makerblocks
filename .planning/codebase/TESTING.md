# Testing Patterns

**Analysis Date:** 2026-01-06

## Test Framework

**Runner:**
- Custom Node.js validation script (not Jest/Vitest)
- File: `tests/validate-block-structure.js`

**Assertion Library:**
- Native Node.js (fs module)
- Custom validation logic with ANSI color output

**Run Commands:**
```bash
npm run test:blocks       # Validate block structure (5-file pattern)
npm run lint:js          # ESLint via @wordpress/scripts
npm run lint:css         # Stylelint via @wordpress/scripts
npm run format           # Code formatting
```

## Test File Organization

**Location:**
- `tests/validate-block-structure.js` - Single test file
- No unit test files (*.test.js) present
- No integration or e2e tests

**Structure:**
```
tests/
└── validate-block-structure.js    # Block structure validator
```

## Test Structure

**Validation Script Pattern:**
```javascript
const REQUIRED_FILES = ['block.json', 'index.js', 'edit.js', 'render.php'];
const EXCLUDED_BLOCKS = ['_template'];

// For each block directory:
// 1. Check required files exist
// 2. Check for JSX component (Block.jsx or {BlockName}.jsx)
// 3. Warn if using generic Block.jsx
```

**Output:**
- Green checkmarks for passing blocks
- Red X for failures
- Yellow warnings for style issues
- Exit code 0 = all pass, exit code 1 = failures

## Mocking

**Framework:**
- Not applicable (no unit tests)

**What to Mock:**
- N/A - only structure validation implemented

## Fixtures and Factories

**Test Data:**
- None - validation script reads filesystem directly

**Location:**
- N/A

## Coverage

**Requirements:**
- No coverage target
- No coverage tooling configured

**Current State:**
- Block structure validation only
- No unit, integration, or e2e tests
- No test coverage reports

## Test Types

**Structure Validation:**
- Validates 5-file pattern for 33 blocks
- Excludes `_template` block
- Checks for named component files

**No Unit Tests:**
- No Jest/Vitest configured
- No component testing
- No utility function testing

**No Integration Tests:**
- No API integration tests
- No form submission flow tests

**No E2E Tests:**
- No Playwright/Cypress configured
- No user flow testing

## Common Patterns

**Running Validation:**
```bash
npm run test:blocks
# or
node tests/validate-block-structure.js
```

**Expected Output (passing):**
```
✓ services (Services.jsx)
✓ contact-form (ContactForm.jsx)
✓ hero-section (HeroSection.jsx)
...
All 32 blocks pass structure validation
```

**Expected Output (failing):**
```
✗ broken-block: Missing render.php
✗ incomplete-block: No JSX component file
2 blocks failed validation
```

## Gaps and Recommendations

**Missing Coverage:**
- Unit tests for utility functions (`src/utils/`)
- Component tests for shared components (`src/components/`)
- Integration tests for REST API data fetching
- E2E tests for form submission flows
- Snapshot testing for block rendering

**Priority Areas:**
- Contact form submission flow (High)
- REST API data fetching (High)
- Error boundary behavior (Medium)
- Component rendering (Medium)

---

*Testing analysis: 2026-01-06*
*Update when test patterns change*
