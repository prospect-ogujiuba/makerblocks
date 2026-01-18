# Codebase Concerns

**Analysis Date:** 2026-01-18

## Tech Debt

**Large Components Exceeding 200 Lines:**
- Issue: Monolithic components hard to maintain
- Files:
  - `src/scripts/apps/makerstarter/pages/Settings.tsx` (481 lines)
  - `src/blocks-dev/header/Header.tsx` (262 lines)
  - `src/scripts/apps/makerstarter/pages/Shop.tsx` (272 lines)
- Why: Rapid prototyping, inline component definitions
- Impact: Hard to test, modify, or reuse parts
- Fix approach: Extract ToggleSwitch to `src/components/ui/`, split Settings into sub-components

**Sidebar/Logo Code Duplication:**
- Issue: Identical sidebar structure duplicated for mobile/desktop
- Files:
  - `src/scripts/apps/makerstarter/layouts/DashboardLayout.tsx:102-127`
  - `src/blocks-dev/header/Header.tsx:54-126` and `139-224`
- Why: Responsive design done via duplication not abstraction
- Impact: Logo/nav changes require updates in multiple places
- Fix approach: Extract `<SidebarNav />` component, render once with responsive visibility

**Hardcoded Asset Paths:**
- Issue: Plugin asset URLs scattered across components
- Files:
  - `src/scripts/apps/makerstarter/pages/Cases.tsx:85`
  - `src/scripts/apps/makerstarter/pages/Portfolio.tsx:42`
  - `src/scripts/apps/makerstarter/pages/Shop.tsx:165`
- Why: Quick prototyping without centralization
- Impact: Path changes break multiple files
- Fix approach: Create `src/lib/assets.ts` with `getAssetUrl()` helper

## Known Bugs

**Empty Form Submission Handler:**
- Symptoms: Contact form doesn't submit, no feedback to user
- Trigger: User fills form and clicks submit
- File: `src/scripts/apps/makerstarter/pages/Contact.tsx:30-32`
- Workaround: None (form is non-functional)
- Root cause: `handleSubmit` only calls `preventDefault()`, no API call

**Settings Not Persisted:**
- Symptoms: Profile, notification, theme changes lost on refresh
- Trigger: Change any setting, refresh page
- File: `src/scripts/apps/makerstarter/pages/Settings.tsx`
- Workaround: None
- Root cause: State is component-local, no API integration

## Security Considerations

**Unvalidated Window Global Access:**
- Risk: If `window.siteData` undefined, components crash
- Files:
  - `src/lib/api.ts:14` - Destructures without null check
  - `src/scripts/apps/makerstarter/layouts/DashboardLayout.tsx:45`
- Current mitigation: None
- Recommendations: Add null guard: `const siteData = window.siteData ?? { siteUrl: '', nonce: '' }`

**External URLs Without Fallback:**
- Risk: External Tailwind/Unsplash URLs may fail
- Files:
  - `src/blocks-dev/header/Header.tsx:57, 144` (tailwindcss.com)
  - `src/blocks-dev/header/Header.tsx:221, 250` (unsplash.com)
- Current mitigation: None
- Recommendations: Use local assets or add fallback images

## Performance Bottlenecks

**No Lazy Loading:**
- Problem: All page data hardcoded in components
- Files: All pages in `src/scripts/apps/makerstarter/pages/`
- Measurement: Initial bundle includes all page data
- Cause: Static data arrays instead of API fetching
- Improvement path: Convert to `useEffect` + `api.get()` with loading states

**Duplicated Logo Rendering:**
- Problem: Same logo image rendered twice (mobile + desktop)
- File: `src/scripts/apps/makerstarter/layouts/DashboardLayout.tsx`
- Measurement: Extra DOM nodes, potential layout thrash
- Cause: Responsive design via duplication
- Improvement path: Single logo with CSS visibility toggling

## Fragile Areas

**MakerBlocks Hydration:**
- File: `src/scripts/MakerBlocks.tsx`
- Why fragile: Parses JSON from DOM attributes, mounts multiple roots
- Common failures: Malformed JSON, missing mount points
- Safe modification: Add error boundaries, test with malformed data
- Test coverage: None (critical gap)

**Block Registration Order:**
- File: `inc/blocks.php`
- Why fragile: Blocks registered in loop, order matters for editor
- Common failures: Block not appearing if registration fails silently
- Safe modification: Add error logging for failed registrations

## Missing Critical Features

**Form Submission Flow:**
- Problem: Contact form collects data but never submits
- File: `src/scripts/apps/makerstarter/pages/Contact.tsx`
- Current workaround: None (broken UX)
- Blocks: Users can't contact site owners
- Implementation complexity: Low (add API call + loading state)

**Cart/Checkout Flow:**
- Problem: Shop page has cart UI but no persistence
- File: `src/scripts/apps/makerstarter/pages/Shop.tsx`
- Current workaround: None
- Blocks: No e-commerce functionality
- Implementation complexity: Medium (needs makermaker API endpoints)

## Test Coverage Gaps

**No Unit Tests Exist:**
- What's not tested: Everything
- Risk: Regressions go unnoticed
- Priority: High
- Difficulty to test: Low - Vitest configured, just needs test files

**Priority Test Targets:**
1. `src/lib/api.ts` - API client (critical)
2. `src/scripts/MakerBlocks.tsx` - Hydration logic
3. `src/components/ui/*.tsx` - UI primitives

**Missing Block Validation:**
- What's not tested: Block structure validation
- File: `tests/validate-block-structure.js` referenced but doesn't exist
- Risk: Invalid blocks deployed
- Priority: Medium

## Accessibility Gaps

**Missing Alt Attributes:**
- Files:
  - `src/scripts/apps/makerstarter/pages/Cases.tsx:84-87`
  - `src/scripts/apps/makerstarter/pages/Portfolio.tsx:73-75`
  - `src/scripts/apps/makerstarter/pages/Shop.tsx:165-168`
- Risk: WCAG non-compliance, screen reader issues
- Recommendations: Add descriptive alt text to all images

## Documentation Gaps

**Complex Components Without Comments:**
- Files:
  - `src/scripts/apps/makerstarter/pages/Settings.tsx` - Nested tabs, toggles
  - `src/scripts/MakerBlocks.tsx` - Hydration flow
- Risk: Onboarding difficulty
- Recommendations: Add JSDoc explaining state flow and error handling

---

*Concerns audit: 2026-01-18*
*Update as issues are fixed or new ones discovered*
