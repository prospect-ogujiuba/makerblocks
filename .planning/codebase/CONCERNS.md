# Codebase Concerns

**Analysis Date:** 2026-01-18

## Tech Debt

**Large Component Files:**
- Issue: 3 components exceed 1000 lines
- Files: `src/blocks-dev/contact-submissions/ContactSubmissions.jsx` (1605 lines), `src/blocks-dev/contact-form/ContactForm.jsx` (1369 lines), `src/blocks-dev/resources-page/ResourcesPage.jsx` (1104 lines)
- Impact: Hard to maintain, test, and reason about
- Fix approach: Extract subcomponents, move form fields to shared components

**Duplicate Form Field Components:**
- Issue: InputField, TextAreaField, SelectField duplicated across blocks
- Files: `src/blocks-dev/contact-submissions/ContactSubmissions.jsx`, `src/blocks-dev/contact-form/ContactForm.jsx`
- Impact: Maintenance burden, inconsistent behavior
- Fix approach: Extract to `src/components/fields/` and share

**No Centralized API Client:**
- Issue: Multiple blocks directly use `fetch()` with duplicate logic
- Files: All blocks with REST API calls
- Impact: Inconsistent error handling, no request cancellation
- Fix approach: Use `src/lib/api.ts` wrapper (added but not widely adopted)

**Mixed JS/TS Codebase:**
- Issue: Header block and scripts converted to TypeScript, other blocks still JS
- Files: `src/blocks-dev/*/` (most still .jsx)
- Impact: Inconsistent type safety, gradual migration needed
- Fix approach: Convert remaining blocks to TypeScript incrementally

## Known Bugs

**No Request Cancellation:**
- Symptoms: "Setting state on unmounted component" warnings possible
- Trigger: Navigate away while fetch in progress
- Files: All blocks with fetch calls (except converted ones)
- Workaround: Currently ignored
- Root cause: No AbortController implementation in most blocks
- Fix: Add AbortController to useEffect cleanup (pattern in CONVENTIONS.md)

**Direct DOM Manipulation:**
- Symptoms: Potential stale references or race conditions
- Trigger: getElementById for "services-count", "categories-count" elements
- File: `src/blocks-dev/services/Services.jsx` (lines 151-157)
- Workaround: None
- Root cause: React anti-pattern
- Fix: Use refs or lift state to parent

## Build Tooling Issues

**Path Aliases Not Supported:**
- Issue: `@/*` aliases configured in tsconfig.json but wp-scripts doesn't resolve them
- Files: `tsconfig.json`, all TypeScript files
- Impact: Must use relative imports (`../../lib/utils` instead of `@/lib/utils`)
- Workaround: Use relative imports only - this is documented in CONVENTIONS.md
- Root cause: wp-scripts webpack config doesn't read tsconfig paths

**Tailwind v4 Syntax:**
- Issue: CSS variables require `@theme` block instead of standard Tailwind patterns
- Files: `src/styles/vendors/tailwind/_source.scss`
- Impact: Shadcn CSS variables need manual syntax adjustment
- Workaround: Use `@theme` block for variable definitions
- Root cause: Tailwind v4 breaking changes

## Security Considerations

**Nonce Exposure:**
- Risk: TypeRocket and REST nonces exposed in `window.siteData`
- Files: `inc/wp_localize.php`
- Current mitigation: Standard WordPress pattern, nonces are session-based
- Recommendations: Nonces are correctly implemented, low risk

**No Input Sanitization on Client:**
- Risk: API responses used directly without validation
- Files: All blocks fetching data
- Current mitigation: Server-side sanitization in TypeRocket
- Recommendations: Add Zod or similar for response validation

## Performance Bottlenecks

**Parallel Fetch Overload:**
- Problem: 11+ parallel fetch calls in Services block
- File: `src/blocks-dev/services/Services.jsx` (lines 50-62)
- Cause: Fetching services, categories, types, pricing simultaneously
- Improvement: Use Promise.all with batching or server-side aggregation

**No API Response Caching:**
- Problem: Every page load fetches fresh data
- Files: All blocks with REST API calls
- Cause: No caching strategy implemented
- Improvement: Add React Query or SWR for caching

## Fragile Areas

**MakerBlocks Hydration:**
- File: `src/scripts/MakerBlocks.tsx`
- Why fragile: Component registry must match DOM IDs exactly
- Common failures: Block added but not registered in registry
- Safe modification: Always update registry when adding blocks
- Test coverage: None (manual testing only)

**API Response Format Assumptions:**
- File: `src/blocks-dev/services/Services.jsx` (lines 299-354)
- Why fragile: Extensive data normalization assumes specific format
- Common failures: API format changes break rendering
- Safe modification: Add defensive checks before accessing nested properties
- Test coverage: None

## Dependencies at Risk

**lucide-react Dual Usage:**
- Risk: Used alongside Bootstrap Icons, potential bundle size concern
- Impact: Inconsistent icon systems in different blocks
- Migration plan: Standardize on one icon system

## Missing Critical Features

**AbortController for Fetch:**
- Problem: No request cancellation on component unmount in most blocks
- Current workaround: None (potential memory leaks)
- Blocks: All blocks with fetch calls (except header)
- Implementation complexity: Low - pattern documented in CONVENTIONS.md

**Error Boundaries:**
- Problem: No React error boundaries around blocks
- Current workaround: Try/catch in MakerBlocks.tsx (errors logged, not displayed)
- Blocks: Component render failures leave blank UI
- Implementation complexity: Low

## Test Coverage Gaps

**No Unit Tests Written Yet:**
- What's not tested: Utility functions, component logic
- Risk: Regressions go unnoticed
- Priority: High
- Difficulty: Infrastructure ready (Vitest), just needs test files

**No Shadcn Component Tests:**
- What's not tested: Button, Sheet, Dialog, etc.
- Risk: Component variants may break
- Priority: High
- Difficulty: Low - @testing-library/react ready

**No Integration Tests:**
- What's not tested: REST API data fetching, form submission
- Risk: API integration breaks silently
- Priority: Medium
- Difficulty: Need mock server setup

---

*Concerns audit: 2026-01-18*
*Update as issues are fixed or new ones discovered*
