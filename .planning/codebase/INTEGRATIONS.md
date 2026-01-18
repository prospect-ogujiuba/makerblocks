# External Integrations

**Analysis Date:** 2026-01-18

## APIs & External Services

**TypeRocket REST API:**
- Endpoint base: `/tr-api/rest/`
- SDK/Client: Custom fetch wrapper `src/lib/api.ts`
- Auth: `X-TypeRocket-Nonce` header from `window.siteData.nonce`
- Methods: GET, POST, PUT, DELETE via `fetchApi()`
- Source: makermaker plugin (sibling dependency)

**WordPress REST API:**
- Auth: `wp_rest` nonce from `window.siteData.restNonce`
- Used for: Authenticated WP operations

## Data Storage

**Databases:**
- WordPress database via TypeRocket API
- No direct queries in blocks (architecture rule)
- Connection: Handled by makermaker plugin

**File Storage:**
- WordPress media library
- Plugin assets: `assets/images/`
- No external cloud storage

**Caching:**
- None implemented in plugin
- Relies on WordPress/server caching

## Authentication & Identity

**Auth Provider:**
- WordPress native authentication
- Session: PHP session via WordPress
- Token storage: Cookies (WordPress standard)

**Nonce System:**
- TypeRocket nonce: `tr_nonce()` → `inc/wp_localize.php`
- WordPress REST nonce: `wp_create_nonce('wp_rest')`
- Both passed via `window.siteData`

**User Data Flow:**
- `is_user_logged_in()` check in `inc/wp_localize.php`
- User object passed to frontend when authenticated
- Fields: ID, name, email, avatar, roles

## Monitoring & Observability

**Error Tracking:**
- None configured
- Console.warn/error in `MakerBlocks.tsx`

**Analytics:**
- None (handled externally)

**Logs:**
- WordPress debug.log when WP_DEBUG enabled

## CI/CD & Deployment

**Hosting:**
- WordPress plugin directory
- Manual deployment to `wp-content/plugins/`

**CI Pipeline:**
- Not configured
- Build scripts: `npm run prod`

## Environment Configuration

**Development:**
- Required: WordPress 6.5+, PHP 7.0+, Node.js
- No .env files
- Mock in tests: `src/test/setup.ts` mocks `window.siteData`

**Production:**
- Same WordPress instance
- No separate staging configuration

## Webhooks & Callbacks

**Incoming:**
- None in this plugin

**Outgoing:**
- None in this plugin

## Related Plugins/Themes

**Required Dependencies:**
- **makermaker** - REST API backend (TypeRocket MVC)
- **makerstarter** - Theme layer (templates, attributes)

**Integration Points:**
- `MAKERSTARTER_THEME_DIR`, `MAKERSTARTER_THEME_URL` globals
- Theme directory constants defined in `makerblocks.php`

## Icon Libraries

**Bootstrap Icons:**
- Stylesheet: `assets/css/bootstrap-icons.css` v1.11.1
- Loaded via `inc/enqueue_assets.php`

**Heroicons:**
- React components: `@heroicons/react`
- Used in React components

**Lucide React:**
- React icons: `lucide-react`
- Used in ShadCN components

---

*Integration audit: 2026-01-18*
*Update when adding/removing external services*
