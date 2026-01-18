# Technology Stack

**Analysis Date:** 2026-01-18

## Languages

**Primary:**
- TypeScript 5.9.3 - All application code (`package.json`)
- PHP 7.0+ - WordPress plugin layer (`makerblocks.php`)

**Secondary:**
- JavaScript (JSX) - Legacy block files (`src/blocks-dev/*/edit.js`)
- SCSS - Styling (`src/styles/`)

## Runtime

**Environment:**
- Node.js (npm) - Build tooling
- PHP 7.0+ (WordPress 6.5+) - Server runtime
- Browser (React 18) - Client runtime via hydration

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 18 - UI framework (via wp-scripts)
- React Router 7.7.0 - SPA navigation (`src/scripts/apps/makerstarter/`)
- WordPress FSE Block API - Block registration

**UI Components:**
- Radix UI - Primitives (`@radix-ui/react-*`)
- ShadCN pattern - Component composition (`src/components/ui/`)

**Testing:**
- Vitest 4.0.17 - Unit tests (`vitest.config.ts`)
- Testing Library 16.3.1 - React testing
- jsdom 27.4.0 - DOM environment

**Build/Dev:**
- wp-scripts 30.19.0 - WordPress build tooling
- Tailwind CSS 4.1.11 - Utility CSS
- Sass 1.89.2 - CSS preprocessing
- npm-run-all 4.1.5 - Parallel tasks
- browser-sync 3.0.4 - Live reload

## Key Dependencies

**Critical:**
- @heroicons/react 2.2.0 - Icon library
- class-variance-authority 0.7.1 - Variant styling
- clsx 2.1.1 - Class merging
- tailwind-merge 3.4.0 - Tailwind class deduplication

**UI Primitives:**
- @radix-ui/react-accordion ^1.2.12
- @radix-ui/react-dialog ^1.1.15
- @radix-ui/react-dropdown-menu ^2.1.16
- @radix-ui/react-tabs ^1.1.13

## Configuration

**Environment:**
- No .env files - Configuration via WordPress
- PHP globals: `MAKERBLOCKS_PLUGIN_DIR`, `MAKERBLOCKS_PLUGIN_URL`
- JS globals: `window.siteData` (siteUrl, nonce, user info)

**Build:**
- `tsconfig.json` - ES2020 target, React JSX, `@/*` path alias
- `vitest.config.ts` - jsdom environment, globals enabled
- `components.json` - ShadCN component registry

## Platform Requirements

**Development:**
- Node.js (any recent version)
- WordPress 6.5+ with PHP 7.0+
- No Docker required

**Production:**
- WordPress plugin
- Installed in `wp-content/plugins/makerblocks/`
- Requires makermaker plugin (REST API backend)

---

*Stack analysis: 2026-01-18*
*Update after major dependency changes*
