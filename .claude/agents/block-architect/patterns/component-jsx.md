# Pattern: {BlockName}.jsx

<when>Always - required for every block</when>

## Template

```javascript
/**
 * {Block Title} Component
 * Shared component used in both editor and frontend
 *
 * @param {object} props - Component props from PHP component-data
 * @param {string} props.attributeOne - Description
 * @param {boolean} props.attributeTwo - Description
 */
export default function {BlockName}({
	attributeOne = 'default',
	attributeTwo = false
}) {
	return (
		<div className="container mx-auto px-4 py-8">
			{/* Component implementation */}
		</div>
	);
}
```

## Naming Convention

- File: PascalCase matching directory (services-grid → ServicesGrid.jsx)
- Component: PascalCase function name
- Props: camelCase matching component-data keys

## Dynamic Data Pattern

If data_source.dynamic == true:
```javascript
import { useState, useEffect } from 'react';

export default function {BlockName}({ endpoint, nonce, ...props }) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(endpoint, {
			headers: { 'X-TypeRocket-Nonce': nonce }
		})
		.then(res => res.json())
		.then(setData)
		.catch(setError)
		.finally(() => setLoading(false));
	}, [endpoint, nonce]);

	if (loading) return <LoadingSkeleton />;
	if (error) return <ErrorState />;

	return (/* render with data */);
}
```
