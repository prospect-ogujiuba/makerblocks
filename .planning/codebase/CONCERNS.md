# Codebase Concerns

**Analysis Date:** 2026-01-06

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
- Issue: 17 blocks directly use `fetch()` with duplicate logic
- Files: All blocks with REST API calls
- Impact: Inconsistent error handling, no request cancellation
- Fix approach: Create `src/utils/api.js` wrapper with standard patterns

**Excessive useState in ContactForm:**
- Issue: 13+ useState hooks managing complex form state
- File: `src/blocks-dev/contact-form/ContactForm.jsx` (lines 38-50)
- Impact: Hard to track state transitions, potential for bugs
- Fix approach: Use useReducer or form library (react-hook-form)

## Known Bugs

**No Request Cancellation:**
- Symptoms: "Setting state on unmounted component" warnings possible
- Trigger: Navigate away while fetch in progress
- Files: All blocks with fetch calls
- Workaround: Currently ignored
- Root cause: No AbortController implementation
- Fix: Add AbortController to useEffect cleanup

**Direct DOM Manipulation:**
- Symptoms: Potential stale references or race conditions
- Trigger: getElementById for "services-count", "categories-count" elements
- File: `src/blocks-dev/services/Services.jsx` (lines 151-157)
- Workaround: None
- Root cause: React anti-pattern
- Fix: Use refs or lift state to parent

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

**Unguarded window.confirm:**
- Risk: Could fail in headless environments
- Files: `src/blocks-dev/contact-form/ContactForm.jsx` (line 538)
- Current mitigation: None
- Recommendations: Add fallback or modal confirmation

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

**Inline Function Definitions:**
- Problem: Functions recreated on each render
- Files: Multiple blocks
- Cause: Arrow functions in JSX props
- Improvement: useCallback for event handlers

## Fragile Areas

**MakerBlocks Hydration:**
- File: `src/scripts/MakerBlocks.js`
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

**lucide-react:**
- Risk: Only used in LocationMap block, Bootstrap Icons used everywhere else
- Impact: Inconsistent icon systems
- Migration plan: Replace with Bootstrap Icons for consistency

**react-router-dom:**
- Risk: Included in dependencies but usage unclear
- Impact: Bundle size if unused
- Migration plan: Remove if not needed

## Missing Critical Features

**AbortController for Fetch:**
- Problem: No request cancellation on component unmount
- Current workaround: None (potential memory leaks)
- Blocks: All 17 blocks with fetch calls
- Implementation complexity: Low

**Error Boundaries:**
- Problem: No React error boundaries around blocks
- Current workaround: Try/catch in MakerBlocks.js (errors logged, not displayed)
- Blocks: Component render failures leave blank UI
- Implementation complexity: Low

**Request Debouncing:**
- Problem: No debouncing for search inputs
- Current workaround: None
- Blocks: SearchBar component
- Implementation complexity: Low

## Test Coverage Gaps

**No Unit Tests:**
- What's not tested: Utility functions, component logic
- Risk: Regressions go unnoticed
- Priority: Medium
- Difficulty: Need to set up Jest/Vitest

**No Integration Tests:**
- What's not tested: REST API data fetching, form submission
- Risk: API integration breaks silently
- Priority: High
- Difficulty: Need mock server setup

**No E2E Tests:**
- What's not tested: Complete user flows
- Risk: User-facing bugs in production
- Priority: Medium
- Difficulty: Need Playwright/Cypress setup

---

*Concerns audit: 2026-01-06*
*Update as issues are fixed or new ones discovered*
