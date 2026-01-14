# REST Fetch Pattern

TypeRocket REST API fetch pattern for dynamic data.

## Base Pattern

```jsx
useEffect(() => {
    if (!window.siteData?.siteUrl) {
        console.warn('siteData not available, skipping fetch');
        setIsLoading(false);
        return;
    }

    const apiUrl = `${window.siteData.siteUrl}/tr-api/rest/{resource}`;

    fetch(apiUrl, {
        headers: {
            'X-TypeRocket-Nonce': window.siteData?.nonce || ''
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json();
        })
        .then(response => {
            // Response envelope: {success, data, meta}
            setData(response.data || []);
            setIsLoading(false);
        })
        .catch(err => {
            console.error('Fetch error:', err);
            setError(err.message || 'Failed to load');
            setIsLoading(false);
        });
}, []);
```

## Available Endpoints

Base: `/tr-api/rest/`

- `/teams`
- `/services`
- `/service-categories`
- `/service-bundles`
- `/service-types`
- `/pricing-models`
- `/pricing-tiers`
- `/equipment`
- `/deliverables`
- `/coverage-areas`
- `/delivery-methods`

## Response Envelope

```json
{
  "success": true,
  "data": [...],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 20
  }
}
```

## window.siteData

```javascript
{
  siteUrl: 'https://example.com',
  nonce: 'abc123',
  restNonce: 'xyz789',
  isUserLoggedIn: true
}
```
