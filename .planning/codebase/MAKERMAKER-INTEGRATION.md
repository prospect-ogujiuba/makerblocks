# MakerMaker Integration Guide for MakerBlocks

**Purpose:** Reference guide for MakerBlocks agents to integrate with MakerMaker's TypeRocket REST API and data layer.

**Date:** 2026-01-11

---

## Executive Summary

MakerMaker provides a zero-configuration REST API for ALL TypeRocket models. MakerBlocks consumes this API to display service catalog data in Gutenberg blocks and FSE templates.

**Key Integration Points:**
1. REST API endpoints (`/tr-api/rest/{resource}`)
2. Authentication via `X-TypeRocket-Nonce` header
3. Model relationships & data structure
4. Query parameters (search, filters, pagination, sorting)
5. Response envelope format

---

## REST API Structure

### Base Endpoint Pattern

```
GET /tr-api/rest/{resource}?{parameters}
GET /tr-api/rest/{resource}/{id}
```

**Authentication:**
- Header: `X-TypeRocket-Nonce: {nonce}`
- Available globally: `window.siteData.nonces.typerocket`

### Response Envelope

**Successful List Response:**
```json
{
  "success": true,
  "data": [ /* array of models */ ],
  "meta": {
    "total": 142,
    "per_page": 25,
    "current_page": 1,
    "last_page": 6,
    "from": 1,
    "to": 25
  }
}
```

**Single Item Response:**
```json
{
  "success": true,
  "data": { /* single model */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "code": "ERROR_CODE"
}
```

---

## Query Parameters

### Available Parameters

| Parameter | Description | Example | Default |
|-----------|-------------|---------|---------|
| `search` | Full-text search | `?search=laser` | - |
| `{field}` | Filter by field | `?is_active=1` | - |
| `orderby` | Sort field | `?orderby=name` | `id` |
| `order` | Sort direction | `?order=desc` | `asc` |
| `per_page` | Items per page (max 100) | `?per_page=25` | `25` |
| `page` | Page number | `?page=2` | `1` |

### Common Query Examples

```javascript
// Search services
GET /tr-api/rest/services?search=installation

// Filter active services by category
GET /tr-api/rest/services?is_active=1&category_id=5

// Sort by name, paginate
GET /tr-api/rest/services?orderby=name&order=asc&per_page=10&page=1

// Combined query
GET /tr-api/rest/services?search=laser&is_active=1&orderby=name&per_page=25
```

---

## Available Data Models

### Core Service Management

**services** (`/tr-api/rest/services`)
- Core service entity with SKU, pricing, complexity
- Fields: `id`, `sku`, `slug`, `name`, `short_desc`, `long_desc`, `base_price`, `is_active`, `is_featured`
- Relationships: `serviceType`, `category`, `complexityLevel`, `prices`, `addons`, `bundles`, `equipment`, `deliverables`

**service-categories** (`/tr-api/rest/service-categories`)
- Hierarchical service categorization
- Fields: `id`, `slug`, `name`, `description`, `parent_category_id`
- Relationships: `parentCategory`, `subcategories`, `services`

**service-types** (`/tr-api/rest/service-types`)
- Service type classification
- Fields: `id`, `code`, `name`, `description`, `icon`
- Relationships: `services`

**complexity-levels** (`/tr-api/rest/complexity-levels`)
- Complexity tiers with price multipliers
- Fields: `id`, `code`, `name`, `description`, `multiplier`, `order`
- Relationships: `services`

### Pricing

**service-prices** (`/tr-api/rest/service-prices`)
- Current pricing by tier and currency
- Fields: `id`, `service_id`, `pricing_tier_id`, `pricing_model_id`, `amount`, `currency`, `is_current`
- Relationships: `service`, `pricingTier`, `pricingModel`

**pricing-models** (`/tr-api/rest/pricing-models`)
- Pricing model definitions (hourly, fixed, tiered)
- Fields: `id`, `code`, `name`, `description`
- Relationships: `prices`

**pricing-tiers** (`/tr-api/rest/pricing-tiers`)
- Customer tiers (small_business, enterprise, etc.)
- Fields: `id`, `code`, `name`, `description`, `order`
- Relationships: `prices`

**price-records** (`/tr-api/rest/price-records`)
- Historical price tracking
- Fields: `id`, `service_id`, `amount`, `currency`, `effective_date`, `end_date`

**currency-rates** (`/tr-api/rest/currency-rates`)
- Multi-currency exchange rates
- Fields: `id`, `from_currency`, `to_currency`, `rate`, `effective_date`

### Service Relationships

**service-addons** (`/tr-api/rest/service-addons`)
- Required/optional service add-ons
- Fields: `id`, `service_id`, `addon_service_id`, `is_required`, `quantity`
- Relationships: `service`, `addonService`

**service-bundles** (`/tr-api/rest/service-bundles`)
- Service package bundles
- Fields: `id`, `sku`, `slug`, `name`, `description`, `bundle_price`
- Relationships: `bundleItems`

**bundle-items** (`/tr-api/rest/bundle-items`)
- Items within bundles
- Fields: `id`, `bundle_id`, `service_id`, `quantity`, `discount_percent`
- Relationships: `bundle`, `service`

**service-relationships** (`/tr-api/rest/service-relationships`)
- Prerequisites, dependencies, incompatibilities
- Fields: `id`, `service_id`, `related_service_id`, `relationship_type`
- Relationships: `service`, `relatedService`

### Equipment & Deliverables

**equipment** (`/tr-api/rest/equipment`)
- Required equipment for services
- Fields: `id`, `sku`, `name`, `description`, `unit_cost`, `quantity_available`
- Relationships: `services` (via junction)

**service-equipment** (`/tr-api/rest/service-equipment`)
- Many-to-many junction with quantity
- Fields: `id`, `service_id`, `equipment_id`, `quantity_required`
- Relationships: `service`, `equipment`

**deliverables** (`/tr-api/rest/deliverables`)
- Service deliverables
- Fields: `id`, `name`, `description`, `deliverable_type`
- Relationships: `services` (via junction)

**service-deliverables** (`/tr-api/rest/service-deliverables`)
- Many-to-many junction
- Fields: `id`, `service_id`, `deliverable_id`, `order`
- Relationships: `service`, `deliverable`

**delivery-methods** (`/tr-api/rest/delivery-methods`)
- Delivery options (digital, physical, on-site)
- Fields: `id`, `code`, `name`, `description`

**service-delivery** (`/tr-api/rest/service-delivery`)
- Service delivery associations
- Fields: `id`, `service_id`, `delivery_method_id`, `estimated_days`

### Coverage & Support

**coverage-areas** (`/tr-api/rest/coverage-areas`)
- Geographic coverage zones
- Fields: `id`, `name`, `type`, `coordinates`, `is_active`
- Relationships: `services` (via junction)

**service-coverages** (`/tr-api/rest/service-coverages`)
- Service availability by area
- Fields: `id`, `service_id`, `coverage_area_id`

**teams** (`/tr-api/rest/teams`)
- Team member management
- Fields: `id`, `name`, `email`, `role`, `bio`, `is_active`

**contact-submissions** (`/tr-api/rest/contact-submissions`)
- Customer inquiry/quote requests
- Fields: `id`, `name`, `email`, `phone`, `service_id`, `message`, `status`
- Relationships: `service`

---

## Model Relationship Patterns

### Understanding Eager Loading

Models use `$with` property for eager loading to prevent N+1 queries:

```php
// Service model has:
protected $with = ['serviceType', 'category.parentCategory', 'complexityLevel'];
```

This means when you fetch services, these relationships are AUTOMATICALLY included:

```json
{
  "id": 1,
  "name": "Basic Installation",
  "serviceType": {
    "id": 2,
    "name": "Installation"
  },
  "category": {
    "id": 5,
    "name": "Residential",
    "parentCategory": {
      "id": 1,
      "name": "Services"
    }
  }
}
```

### Common Relationship Patterns

**belongsTo (Many-to-One):**
- Service → ServiceType
- Service → Category
- ServicePrice → Service

**hasMany (One-to-Many):**
- Service → Prices
- Category → Services
- ServiceBundle → BundleItems

**belongsToMany (Many-to-Many):**
- Service ↔ Equipment (via service_equipment junction)
- Service ↔ Deliverables (via service_deliverables junction)
- Service ↔ CoverageAreas (via service_coverages junction)

---

## React Fetch Patterns

### Standard Fetch with Nonce

```javascript
const fetchServices = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = `/tr-api/rest/services${queryString ? '?' + queryString : ''}`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-TypeRocket-Nonce': window.siteData.nonces.typerocket
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || 'API request failed');
  }

  return result.data;
};
```

### With Loading States & Error Handling

```javascript
import { useState, useEffect } from 'react';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ is_active: 1 });

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchServices(filters);
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, [filters]);

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.short_desc}</p>
          <p>${service.base_price}</p>
        </div>
      ))}
    </div>
  );
};
```

### Pagination Hook

```javascript
const usePaginatedServices = (perPage = 10) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPage = async (filters = {}) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/tr-api/rest/services?` + new URLSearchParams({
          ...filters,
          per_page: perPage,
          page: page
        }),
        {
          headers: {
            'Accept': 'application/json',
            'X-TypeRocket-Nonce': window.siteData.nonces.typerocket
          }
        }
      );

      const result = await response.json();

      if (result.success) {
        setData(result.data);
        setMeta(result.meta);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    meta,
    loading,
    page,
    setPage,
    fetchPage,
    hasNext: meta && page < meta.last_page,
    hasPrev: page > 1
  };
};
```

---

## Block Data Patterns

### Server-Side Render Pattern

**render.php:**
```php
<?php
$services = (new \MakerMaker\Models\Service())
    ->where('is_active', 1)
    ->where('is_featured', 1)
    ->with(['category', 'serviceType'])
    ->take(6)
    ->get();

$data = [
    'services' => $services->toArray(),
    'restUrl' => rest_url('tr-api/rest/services'),
    'nonce' => wp_create_nonce('typerocket_rest_nonce')
];
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'makerblocks-services']); ?>>
    <div
        id="makerblocks-services-<?php echo $block_id; ?>"
        data-component-data="<?php echo esc_attr(json_encode($data)); ?>"
    ></div>
</div>
```

**React component:**
```javascript
import { useEffect, useState } from 'react';

const ServicesBlock = ({ blockId }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const container = document.getElementById(`makerblocks-services-${blockId}`);
    if (container) {
      const data = JSON.parse(container.dataset.componentData);
      setServices(data.services);
    }
  }, [blockId]);

  return (
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};
```

---

## Common Integration Scenarios

### Scenario 1: Service Catalog Block

**Requirements:**
- Display active services
- Filter by category
- Show pricing
- Link to detail page

**API Usage:**
```javascript
// Initial load
GET /tr-api/rest/services?is_active=1&per_page=12

// Filter by category
GET /tr-api/rest/services?is_active=1&category_id=5

// Search
GET /tr-api/rest/services?is_active=1&search=installation

// With pricing (eager loaded automatically via $with)
// Response includes: service.prices array
```

### Scenario 2: Service Detail Page

**Requirements:**
- Display single service
- Show related equipment
- Display pricing tiers
- List deliverables

**API Usage:**
```javascript
// Get service (relationships auto-loaded via $with)
GET /tr-api/rest/services/5

// Response includes:
{
  "id": 5,
  "name": "...",
  "serviceType": { ... },
  "category": { ... },
  "prices": [ ... ],          // hasMany
  "equipment": [ ... ],        // belongsToMany
  "deliverables": [ ... ],     // belongsToMany
  "addons": [ ... ]            // hasMany
}
```

### Scenario 3: Quote Request Form

**Requirements:**
- Select service from dropdown
- Capture customer info
- Submit to contact_submissions

**API Usage:**
```javascript
// Populate service dropdown
GET /tr-api/rest/services?is_active=1&orderby=name

// Submit quote request
POST /tr-api/rest/contact-submissions
Content-Type: application/json
X-TypeRocket-Nonce: {nonce}

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "service_id": 5,
  "message": "I'd like a quote..."
}
```

---

## Security Considerations

### Filterable Fields

Only fields in model's `$fillable` AND NOT in `$guard` can be filtered.

**Protected by default:**
- `id`, `version`
- `created_at`, `updated_at`, `deleted_at`
- `created_by`, `updated_by`
- `password`, `token`, `secret`, `hash`

### Authorization

All queries check model policy before execution. Blocks typically consume public data, but admin blocks may need authentication.

**Public endpoints** (no auth required):
- Active services: `is_active=1`
- Featured content: `is_featured=1`
- Public contact submissions

**Protected endpoints** (require auth):
- Draft/inactive content
- Price records
- Team management

---

## Troubleshooting

### "Resource not found"
- Verify resource slug matches registration in `inc/resources/`
- Check endpoint spelling (kebab-case, pluralized)

### "Invalid filter field"
- Field must be in model's `$fillable` array
- Field must NOT be in `$guard` array

### "Unauthorized"
- Check nonce: `window.siteData.nonces.typerocket`
- Verify user has required capability via policy

### Search returns nothing
- Check model has searchable text fields
- Model may need custom `getSearchableFields()` method

### N+1 Query Issues
- Check model's `$with` property for eager loading
- Use browser network tab to verify single request

---

## Key Files Reference

**MakerMaker Core:**
- REST Wrapper: `app/Http/ReflectiveRestWrapper.php`
- Query Builder: `app/Http/ReflectiveQueryBuilder.php`
- Models: `app/Models/*.php`
- Initialization: `app/MakermakerTypeRocketPlugin.php`

**Documentation:**
- Architecture: `.planning/codebase/REFLECTIVE_REST_API.md`
- Quick Reference: `.planning/codebase/REFLECTIVE_API_QUICK_REFERENCE.md`
- Model Guide: `.planning/codebase/docs/Model.md`

---

## Summary Checklist for Block Development

✅ **Authentication:** Use `window.siteData.nonces.typerocket`
✅ **Endpoints:** `/tr-api/rest/{resource}` with query params
✅ **Response:** Check `result.success` before using `result.data`
✅ **Relationships:** Leverage eager loading via `$with` property
✅ **Errors:** Handle HTTP errors and API error responses
✅ **Loading States:** Show loading UI during fetch
✅ **Pagination:** Use `meta` object for pagination controls
✅ **Security:** Only query public data or verify auth
✅ **Performance:** Minimize requests, use appropriate `per_page`

---

*Last Updated: 2026-01-11*
*Makermaker Version: v1.0 (TypeRocket Pro v6)*
