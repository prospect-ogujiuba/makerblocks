# Directory Structure

**Analysis Date:** 2026-01-19

## Root Layout

```
makerblocks/
├── .claude/          # Claude Code agents and skills
├── .planning/        # GSD planning documents
├── assets/           # Built assets (JS, CSS, images, fonts)
├── blocks/           # Built block output (from src/blocks-dev)
├── inc/              # PHP modules
├── node_modules/     # npm dependencies
├── src/              # Source code (TypeScript, SCSS)
├── tests/            # Test files
├── vendor/           # Composer dependencies
├── makerblocks.php   # Plugin entry point
├── package.json      # npm config
├── tsconfig.json     # TypeScript config
├── vitest.config.ts  # Vitest config
└── components.json   # shadcn/ui config
```

## Source Directory (`src/`)

```
src/
├── blocks-dev/       # Block source (compiles to blocks/)
│   ├── _template/    # Block template scaffold
│   ├── app/          # App block
│   └── header/       # Header block
├── components/       # Shared React components
│   └── ui/           # shadcn/ui components
├── lib/              # Utilities
│   ├── api.ts        # REST API helpers
│   └── utils.ts      # cn() utility
├── scripts/          # Frontend scripts (compiles to assets/js/)
│   ├── apps/         # Full React apps
│   │   └── makerstarter/
│   ├── MakerBlocks.tsx  # Component hydration
│   └── index.ts      # Entry point
├── styles/           # SCSS (Sass 7-1)
│   ├── abstracts/    # Variables, mixins
│   ├── base/         # Reset, typography
│   ├── components/   # Component styles
│   ├── layout/       # Layout styles
│   ├── pages/        # Page-specific
│   └── vendors/      # Tailwind, WordPress
├── test/             # Test setup
└── types/            # TypeScript declarations
```

## PHP Directory (`inc/`)

```
inc/
├── blocks.php        # Block registration
├── enqueue_assets.php # Asset loading
├── helpers.php       # Utility functions
├── post_types.php    # Custom post types
├── variables.php     # Global variables
└── wp_localize.php   # JS data injection
```

## Block Structure (5-file pattern)

```
src/blocks-dev/{block-name}/
├── block.json        # Block metadata (SINGLE SOURCE OF TRUTH)
├── index.ts          # Block registration
├── edit.tsx          # Editor component
├── {BlockName}.tsx   # Frontend React component
└── render.php        # Server-side render
```

## Key File Locations

| Need | Location |
|------|----------|
| Add new block | `src/blocks-dev/{name}/` |
| Shared UI component | `src/components/ui/` |
| API helper | `src/lib/api.ts` |
| Style variable | `src/styles/abstracts/` |
| Block registration | `inc/blocks.php` |
| Asset enqueue | `inc/enqueue_assets.php` |
| JS globals | `inc/wp_localize.php` |
| Utility function | `inc/helpers.php` |

## Build Outputs

| Source | Output |
|--------|--------|
| `src/scripts/` | `assets/js/` |
| `src/blocks-dev/` | `blocks/` |
| `src/styles/styles.scss` | `assets/css/styles.css` |

## Naming Conventions

**Directories:**
- kebab-case for all directories
- Blocks: `src/blocks-dev/{block-name}/`

**Files:**
- React components: PascalCase (`Header.tsx`)
- PHP modules: snake_case (`enqueue_assets.php`)
- UI components: kebab-case (`button.tsx`)
- Config files: lowercase (`package.json`)
