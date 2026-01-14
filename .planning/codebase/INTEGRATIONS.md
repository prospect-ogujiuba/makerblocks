# External Integrations

**Analysis Date:** 2026-01-06

## APIs & External Services

**TypeRocket REST API (MakerMaker Plugin):**
- Base URL: `/tr-api/rest/`
- Authentication: `X-TypeRocket-Nonce` header via `window.siteData.nonce`
- Response format: `{success: true, data: [...], meta: {...}}`
- Client-side fetching in React `useEffect` hooks

Endpoints:
- `/services` - Service catalog
- `/service-categories` - Service classifications
- `/service-types` - Service type taxonomy
- `/pricing-models` - Pricing model definitions
- `/pricing-tiers` - Pricing tier definitions
- `/delivery-methods` - Delivery method options
- `/coverage-areas` - Geographic coverage areas
- `/service-bundles` - Bundle packages
- `/equipment` - Equipment listings
- `/deliverables` - Deliverable definitions
- `/teams` - Team member listings
- `/contact-submissions` - Form submissions

Files: `src/blocks-dev/services/Services.jsx`, `src/blocks-dev/team-showcase/TeamShowcase.jsx`, `src/blocks-dev/contact-submissions/ContactSubmissions.jsx`

**WordPress REST API:**
- Base URL: `/wp-json/wp/v2/`
- Purpose: Media library access for featured images
- Endpoints: `/media` (batch fetch with `include=` param)
- File: `src/blocks-dev/services/Services.jsx` (lines 86-88)

**Google Maps:**
- Embedded maps via iframe (`embedUrl` attribute)
- Directions: `https://www.google.com/maps/dir/?api=1&destination={lat},{lng}`
- Search: `https://www.google.com/maps/search/?api=1&query={address}`
- No API key required (embeds and basic URLs)
- File: `src/blocks-dev/location-map/LocationMap.jsx`

## Data Storage

**Databases:**
- WordPress MySQL via TypeRocket ORM (accessed via REST API only)
- No direct database queries in this plugin
- All data fetched client-side from MakerMaker REST endpoints

**File Storage:**
- WordPress Media Library for images
- Accessed via WP REST API `/wp-json/wp/v2/media`

**Caching:**
- None implemented in plugin
- Relies on browser caching and WordPress/server-side caching

## Authentication & Identity

**Auth Provider:**
- WordPress built-in authentication
- Session detection via `is_user_logged_in()` - `inc/wp_localize.php`
- User data injected to frontend when logged in

**Nonce System:**
- TypeRocket nonce: `tr_nonce()` - `inc/wp_localize.php:80`
- WordPress REST nonce: `wp_create_nonce('wp_rest')` - `inc/wp_localize.php:30`
- Both exposed in `window.siteData` global

## Monitoring & Observability

**Error Tracking:**
- Not configured - errors logged to browser console only
- `console.error()` calls in `src/scripts/MakerBlocks.js`

**Analytics:**
- Not detected

**Logs:**
- Browser console only (development)
- No server-side logging in plugin

## CI/CD & Deployment

**Hosting:**
- WordPress plugin (uploaded to `wp-content/plugins/`)
- No dedicated deployment pipeline

**CI Pipeline:**
- Not configured
- `npm run test:blocks` for local validation

## Environment Configuration

**Development:**
- Required: WordPress installation with Gutenberg
- Mock services: None (uses live TypeRocket endpoints)
- Build: `npm run dev` for watch mode

**Production:**
- Build: `npm run prod` for minified assets
- No environment-specific configuration

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- Contact form submissions POST to TypeRocket endpoint
- Handler: `src/scripts/MakerBlocks.js` (lines 264-314)
- Events: `contact-form-submit`, `contact-form-result`

## Global Context (window.siteData)

Injected via `wp_localize_script` - `inc/wp_localize.php`:
```javascript
{
  siteUrl, siteName, siteDescription,
  restUrl, restNonce,           // WP REST API
  nonce,                        // TypeRocket nonce
  isUserLoggedIn, currentUser,
  adminUrl, ajaxUrl,
  themeUrl, pluginUrl,
  postId, postTitle, postType   // If singular
}
```

---

*Integration audit: 2026-01-06*
*Update when adding/removing external services*
