# Technology Stack

**Analysis Date:** 2026-01-06

## Languages

**Primary:**
- PHP 7.0+ - `makerblocks.php`, `inc/*.php`, `src/blocks-dev/*/render.php`
- JavaScript/JSX (ES6+) - `src/scripts/`, `src/blocks-dev/*/*.jsx`

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

**Build/Dev:**
- @wordpress/scripts 30.19.0 - Bundling, transpilation, linting
- Tailwind CSS 4.1.11 - Utility-first CSS via `@tailwindcss/cli`
- Sass 1.89.2 - SCSS compilation
- Browser Sync 3.0.4 - Development preview
- npm-run-all 4.1.5 - Task orchestration

**Testing:**
- Custom Node.js validation - `tests/validate-block-structure.js`
- wp-scripts lint (ESLint/Stylelint) - Code quality

## Key Dependencies

**Critical:**
- @headlessui/react 2.2.4 - UI component library (dialogs, transitions)
- @heroicons/react 2.2.0 - Icon library
- lucide-react 0.554.0 - Additional icon system
- react-router-dom 7.7.0 - Routing (optional)

**Tailwind Plugins:**
- @tailwindcss/forms 0.5.10 - Form styling
- @tailwindcss/typography 0.5.16 - Prose styling
- @tailwindcss/aspect-ratio 0.4.2 - Aspect ratio utilities
- @tailwindcss/container-queries 0.1.1 - Container queries
- @tailwindplus/elements 1.0.16 - Extended utilities

**Infrastructure:**
- Bootstrap Icons 1.11.1 - Icon font (CSS) - `assets/css/bootstrap-icons.css`
- Carbon Fields - Advanced field library - `vendor/htmlburger/carbon-fields/`

## Configuration

**Environment:**
- No `.env` files - configuration via WordPress settings
- API nonces injected via `wp_localize_script` - `inc/wp_localize.php`
- Global data in `window.siteData` object

**Build:**
- `package.json` - npm scripts (dev, prod, lint)
- `.editorconfig` - Editor formatting rules
- No explicit ESLint/Prettier config (uses wp-scripts defaults)

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

*Stack analysis: 2026-01-06*
*Update after major dependency changes*
