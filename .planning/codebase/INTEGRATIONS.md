# External Integrations

**Analysis Date:** 2026-01-19

## APIs & External Services

**TypeRocket REST API (makermaker plugin):**
- Purpose: All business data fetching
- Endpoint base: `/tr-api/rest/`
- Client: Native `fetch` wrapper in `src/lib/api.ts`
- Auth: `X-TypeRocket-Nonce` header via `window.siteData.nonce`

**WordPress REST API:**
- Purpose: Standard WP data (available but secondary)
- Endpoint base: `/wp-json/`
- Auth: `X-WP-Nonce` header via `window.siteData.restNonce`

## Data Flow

**Block Rendering:**
1. `render.php` queries WordPress data (menus, users, etc.)
2. Passes to React via `component-data` JSON attribute
3. React component mounts via `MakerBlocks.tsx` hydration
4. Dynamic data fetched from TypeRocket API in `useEffect`

**API Client Pattern (`src/lib/api.ts`):**
```typescript
fetchApi<T>(endpoint, options)  // Full control
get<T>(endpoint)                // GET helper
post<T>(endpoint, data)         // POST helper
put<T>(endpoint, data)          // PUT helper
del<T>(endpoint)                // DELETE helper
```

## Authentication

**TypeRocket Nonce:**
- Generated: `tr_nonce()` in PHP
- Location: `window.siteData.nonce`
- Header: `X-TypeRocket-Nonce`
- Scope: Logged-in users only

**WordPress REST Nonce:**
- Generated: `wp_create_nonce('wp_rest')`
- Location: `window.siteData.restNonce`
- Header: `X-WP-Nonce`

**User Context:**
- `window.siteData.isUserLoggedIn` - Boolean
- `window.siteData.currentUser` - Full user object (logged-in only)
- `window.siteData.currentUserId` - User ID

## Global Data (window.siteData)

**Always Available:**
- `siteUrl` - Site URL
- `siteName` - Site name
- `homeUrl` - Home URL
- `restUrl` - REST API base URL
- `restNonce` - WP REST nonce
- `isUserLoggedIn` - Auth status

**Logged-in Users:**
- `nonce` - TypeRocket nonce
- `adminUrl` - Admin URL
- `ajaxUrl` - Admin AJAX URL
- `currentUser` - `{id, name, email, roles}`

## Related Plugins

**MakerMaker (Required):**
- Provides: TypeRocket REST API endpoints
- Provides: Data models, business logic
- Provides: `tr_nonce()` function

**MakerStarter Theme (Required):**
- Provides: FSE templates
- Provides: Block attributes/context

## WordPress Hooks Used

**Actions:**
- `init` - Block registration
- `wp_enqueue_scripts` - Frontend assets
- `enqueue_block_assets` - Editor assets
- `admin_enqueue_scripts` - Admin assets
- `template_redirect` - 404 redirect

**Filters:**
- `block_categories_all` - Custom block categories

## PHP Constants

- `MAKERBLOCKS_PLUGIN_DIR` - Plugin directory path
- `MAKERBLOCKS_PLUGIN_URL` - Plugin URL
- `MAKERSTARTER_THEME_DIR` - Theme directory path
- `MAKERSTARTER_THEME_URL` - Theme URL
