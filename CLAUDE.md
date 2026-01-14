# CLAUDE.md

Guidance for Claude Code. Progressive disclosure: read `.planning/codebase/` files as needed.

# Outputs

## Quick Reference

**What this is:** WordPress FSE blocks plugin (UI-only, no business logic)

**Critical Rule:** All data via TypeRocket REST API (`/tr-api/rest/`) from makermaker plugin. NO database queries in blocks.

**Commands:**

```bash
npm run dev      # Development (watch all)
npm run prod     # Production build
npm run test:blocks  # Validate block structure
```

## Architecture (STRICT)

| Plugin       | Responsibility                                 |
| ------------ | ---------------------------------------------- |
| makerblocks  | UI layer ONLY (FSE blocks, may query REST API) |
| makermaker   | Business logic ONLY (TypeRocket MVC, REST API) |
| makerstarter | Theme layer (templates, attributes)            |

**Block Pattern (5 files):**
`block.json`, `index.js`, `edit.js`, `{BlockName}.jsx`, `render.php`

**Data Flow:**

1. `render.php` → passes attributes via `component-data` JSON
2. React component → fetches from REST API in `useEffect`
3. `MakerBlocks.js` → hydrates React on frontend

## Key Locations

| Need              | Location                                                          |
| ----------------- | ----------------------------------------------------------------- |
| Add block         | `src/blocks-dev/`, register in `inc/blocks.php`, `MakerBlocks.js` |
| Shared components | `src/components/` (Button, Badge, IconPicker, SkeletonLoader)     |
| Styles            | `src/styles/` (Sass 7-1), Tailwind 4                              |
| PHP modules       | `inc/` (blocks, enqueue_assets, wp_localize)                      |
| Block template    | `src/blocks-dev/_template/`                                       |

## Globals

**PHP:** `MAKERBLOCKS_PLUGIN_DIR`, `MAKERBLOCKS_PLUGIN_URL`

**JS:** `window.siteData.siteUrl`, `.nonce` (TypeRocket), `.restNonce` (WP)

## Deep Documentation

Read `.planning/codebase/` files for details:

| File                        | Contents                                             |
| --------------------------- | ---------------------------------------------------- |
| `ARCHITECTURE.md`           | Layers, data flow, entry points, error handling      |
| `STRUCTURE.md`              | Directory layout, file locations, where to add code  |
| `CONVENTIONS.md`            | Naming, code style, import order, React/PHP patterns |
| `MAKERMAKER-INTEGRATION.md` | REST endpoints, auth, response format, examples      |
| `STACK.md`                  | Tailwind, Sass, wp-scripts, Bootstrap Icons          |
| `INTEGRATIONS.md`           | External dependencies, Carbon Fields                 |
| `CONCERNS.md`               | Logging, validation, authentication                  |
| `TESTING.md`                | Block validation, test commands                      |

---

## Communication Rules

- Extreme concision. Sacrifice grammar for the sake of concision.
- No verbose READMEs, summaries, trees, diagrams unless explicitly requested
- End plans with concise unresolved questions

## Version Control - Git

1. Commits must be surgical but not overly granular
2. Commit messages must be one liners
3. No self insertion
4. DO not commit docs (.md) files
