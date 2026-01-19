# Codebase Concerns

**Analysis Date:** 2026-01-19

## Tech Debt

**Duplicate render.php Code:**
- Issue: `src/blocks-dev/app/render.php` and `src/blocks-dev/header/render.php` contain identical menu helper function
- Impact: Changes must be made in multiple places
- Fix: Extract to `inc/helpers.php`

**Hardcoded Menu ID:**
- Issue: Menu ID hardcoded as `7` in both render.php files
- Files: `src/blocks-dev/app/render.php:80`, `src/blocks-dev/header/render.php:80`
- Fix: Use block attributes or theme location

**Empty Post Types Loop:**
- Issue: `$postypes = []` - array empty but loop exists
- Files: `inc/post_types.php`
- Fix: Remove file or populate

**Commented Header Component:**
- Issue: Header block commented out in MakerBlocks registry
- Files: `src/scripts/MakerBlocks.tsx:21`
- Fix: Uncomment when ready or remove

**Global Variables in PHP:**
- Issue: Uses `global $style_version` etc.
- Files: `inc/variables.php`, `inc/enqueue_assets.php`
- Fix: Use class-based architecture or constants

## Known Bugs

**404 Redirect Hides Errors:**
- All 404s redirect to homepage with 301
- Files: `inc/helpers.php:132-138`
- Impact: Masks errors, bad for SEO

**Mismatched Block ID:**
- App block outputs `id="makerblocks-app"` but tag is `<header>`
- Files: `src/blocks-dev/app/render.php:102`

## Security Considerations

**TypeRocket Nonce Exposure:**
- Nonce exposed in global JS object for logged-in users
- Files: `inc/wp_localize.php:80`
- Mitigation: Only exposed to logged-in users

**Sensitive Data in Global JS:**
- User email, roles exposed in `siteData` object
- Files: `inc/wp_localize.php:63-69`
- Recommendation: Minimize exposed data

## Performance Bottlenecks

**React Router SPA on Every Page:**
- Full React app with 9 routes loaded on every page
- Files: `src/scripts/apps/makerstarter/MakerStarter.tsx`
- Fix: Use WordPress routing, lazy-load per block

**Menu Tree Computation:**
- Rebuilds menu tree on every page load
- Files: `src/blocks-dev/header/render.php:3-73`
- Fix: Cache in transient

## Fragile Areas

**Type Definitions vs Implementation:**
- `src/types/global.d.ts` missing fields from `inc/wp_localize.php`
- Keep types in sync with PHP output

**Build Output Directories:**
- Source in `src/`, output in root dirs
- Easy to edit wrong files

## Dependencies at Risk

**React/ReactDOM Not Declared:**
- React not in package.json; relies on WordPress
- Add as peerDependencies

**Icon Library Redundancy:**
- Both `@heroicons/react` and `lucide-react` installed
- Pick one, remove the other

## Missing Critical Features

- No Error Boundaries
- No API error handling in UI
- No loading states
- Contact form `handleSubmit` is empty

## Test Coverage Gaps

**No React Component Tests:**
- All TSX components untested
- Priority: High

**No PHP Unit Tests:**
- `inc/*.php` untested
- Priority: Medium

**Only Block Structure Test:**
- `npm run test:blocks` validates block.json only
