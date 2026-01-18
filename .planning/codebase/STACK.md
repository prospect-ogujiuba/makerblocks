# Technology Stack

**Analysis Date:** 2026-01-18

## Languages

**Primary:**
- TypeScript 5.x (strict mode) - `src/scripts/*.ts`, `src/blocks-dev/*/*.tsx`
- PHP 7.0+ - `makerblocks.php`, `inc/*.php`, `src/blocks-dev/*/render.php`

**Secondary:**
- Sass/SCSS - `src/styles/` (7-1 architecture)
- CSS - Tailwind output `src/styles/vendors/tailwind/`

## Runtime

**Environment:**
- PHP (WordPress runtime)
- Node.js 12+ (build tooling)
- Browser (React 18+ hydration)

**Package Manager:**
- npm - `package.json`, `package-lock.json`
- Composer (vendor dependency) - `vendor/htmlburger/carbon-fields/`

## Frameworks

**Core:**
- React 18 - Block editor and frontend hydration
- WordPress Gutenberg (Block API v3) - `src/blocks-dev/*/block.json`

**UI Components:**
- Shadcn/Radix UI - Component primitives (`src/components/ui/`)
- class-variance-authority - Variant styling
- tailwind-merge + clsx - Class composition via `cn()` utility

**Build/Dev:**
- @wordpress/scripts 30.19.0 - Bundling, transpilation, linting
- TypeScript - Type checking (noEmit, strict mode)
- Tailwind CSS 4.x - Utility-first CSS via `@tailwindcss/cli`
- Sass 1.89.2 - SCSS compilation
- Browser Sync 3.0.4 - Development preview

**Testing:**
- Vitest - Unit testing framework (`vitest.config.ts`)
- @testing-library/react - Component testing
- @testing-library/jest-dom - DOM matchers
- Custom Node.js validation - `tests/validate-block-structure.js`

## Key Dependencies

**Critical:**
- @radix-ui/react-dialog - Modal dialogs
- @radix-ui/react-dropdown-menu - Dropdown menus
- @radix-ui/react-accordion - Collapsible sections
- @radix-ui/react-slot - Polymorphic components
- lucide-react - Icon library

**Styling:**
- class-variance-authority - Component variants
- clsx + tailwind-merge - Class merging via `src/lib/utils.ts`
- tw-animate-css - Animation utilities

**Tailwind Plugins:**
- @tailwindcss/forms 0.5.10 - Form styling
- @tailwindcss/typography 0.5.16 - Prose styling
- @tailwindcss/aspect-ratio 0.4.2 - Aspect ratio utilities
- @tailwindcss/container-queries 0.1.1 - Container queries

**Infrastructure:**
- Bootstrap Icons 1.11.1 - Icon font (CSS) - `assets/css/bootstrap-icons.css`
- Carbon Fields - Advanced field library - `vendor/htmlburger/carbon-fields/`

## Configuration

**TypeScript:**
- `tsconfig.json` - Strict mode, ES2020 target, bundler resolution
- Path aliases configured but **not supported by wp-scripts** (use relative imports)

**Environment:**
- No `.env` files - configuration via WordPress settings
- API nonces injected via `wp_localize_script` - `inc/wp_localize.php`
- Global data in `window.siteData` object

**Build:**
- `package.json` - npm scripts (dev, prod, lint, test)
- `vitest.config.ts` - Test runner config
- `components.json` - Shadcn CLI config (new-york style)
- `.editorconfig` - Editor formatting rules

## Platform Requirements

**Development:**
- Any platform with Node.js 12+ and npm
- WordPress installation with Gutenberg support
- No Docker or external dependencies required

**Production:**
- WordPress 6.0+ with Full Site Editing support
- PHP 7.0+
- Deployed as WordPress plugin

---

*Stack analysis: 2026-01-18*
*Update after major dependency changes*
