# Technology Stack

**Analysis Date:** 2026-01-19

## Languages

**Primary:**
- TypeScript 5.9.3 - Block components, React apps, utility functions
- PHP 7.0+ - WordPress integration, block render templates

**Secondary:**
- JavaScript (ES2020) - Compiled output, wp-scripts build
- SCSS - Styling (Sass 7-1 architecture)

## Runtime

**Environment:**
- WordPress 6.5+ (Full Site Editing)
- Node.js (via wp-scripts)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- React 18 - UI components (via @wordpress/scripts)
- WordPress Block API - FSE block registration
- React Router DOM 7.7.0 - Client-side routing (MakerStarter SPA)

**Styling:**
- Tailwind CSS 4.1.11 - Utility classes
- Sass 1.89.2 - SCSS compilation (7-1 architecture)
- shadcn/ui (new-york style) - Component primitives

**Testing:**
- Vitest 4.0.17 - Test runner
- @testing-library/react 16.3.1 - React testing utilities
- jsdom 27.4.0 - DOM environment

**Build/Dev:**
- @wordpress/scripts 30.19.0 - Block compilation, bundling
- @tailwindcss/cli 4.1.11 - Tailwind compilation
- browser-sync 3.0.4 - Live reload
- npm-run-all 4.1.5 - Parallel script execution

## Key Dependencies

**Critical:**
- `react-dom/client` - React 18 hydration via `createRoot`
- `react-router-dom` - SPA navigation for MakerStarter app
- `@wordpress/scripts` - Block build toolchain

**UI Components:**
- `@radix-ui/react-*` - Headless primitives (accordion, dialog, dropdown-menu, label, slot, tabs)
- `class-variance-authority` 0.7.1 - Variant styling
- `clsx` 2.1.1 - Class name construction
- `tailwind-merge` 3.4.0 - Tailwind class deduplication

**Icons:**
- `@heroicons/react` 2.2.0 - Hero icons
- `lucide-react` 0.554.0 - Lucide icons
- Bootstrap Icons 1.11.1 - CSS icon font (enqueued)
- `@wordpress/icons` 6.2.0 - WordPress icons (editor)

**Tailwind Plugins:**
- `@tailwindcss/aspect-ratio` 0.4.2
- `@tailwindcss/container-queries` 0.1.1
- `@tailwindcss/forms` 0.5.10
- `@tailwindcss/typography` 0.5.16
- `@tailwindplus/elements` 1.0.16
- `tw-animate-css` 1.4.0

## Configuration

**TypeScript:**
- Config: `tsconfig.json`
- Target: ES2020
- Module: ESNext (bundler resolution)
- JSX: react-jsx
- Path alias: `@/*` -> `./src/*`
- Strict mode enabled

**Tailwind CSS:**
- Source: `src/styles/vendors/tailwind/_source.scss`
- Output: `src/styles/vendors/tailwind/_tailwind.scss`
- Theme: CSS custom properties (neutral base color)
- Dark mode: CSS class `.dark`

**Vitest:**
- Config: `vitest.config.ts`
- Environment: jsdom
- Setup: `src/test/setup.ts`
- Path alias: `@` -> `./src`

**Editor:**
- Config: `.editorconfig`
- Indent: tabs (2 spaces for YAML)
- Charset: utf-8
- Line ending: lf

**shadcn/ui:**
- Config: `components.json`
- Style: new-york
- RSC: disabled
- Icon library: lucide

## Build Scripts

**Development:**
```bash
npm run dev           # Parallel: tailwind-watch, sass-dev, wp-start, wp-start-blocks
npm run preview       # dev + browser-sync proxy
```

**Production:**
```bash
npm run prod          # Sequential: tailwind-build, sass-prod, wp-build, wp-build-blocks
```

**Individual:**
```bash
npm run wp-start      # Watch src/scripts -> assets/js
npm run wp-start-blocks  # Watch src/blocks-dev -> blocks
npm run sass-dev      # Watch SCSS -> assets/css/styles.css
npm run tailwind-watch   # Watch Tailwind source
```

## Output Paths

**Scripts:**
- Source: `src/scripts/`
- Output: `assets/js/`

**Blocks:**
- Source: `src/blocks-dev/`
- Output: `blocks/`

**Styles:**
- Source: `src/styles/styles.scss`
- Output: `assets/css/styles.css`

## Platform Requirements

**Development:**
- Node.js (LTS recommended)
- npm
- WordPress 6.5+ with FSE support

**Production:**
- WordPress 6.5+
- PHP 7.0+
- MakerMaker plugin (data layer)
- MakerStarter theme (template layer)
