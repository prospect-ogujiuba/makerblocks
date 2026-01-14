# Skeleton: Card Variant

<when>Block displays card grid (services, team members, products)</when>

## Template

```php
<div class="skeleton-loader" aria-hidden="true">
	<div class="skeleton-grid grid grid-cols-1 md:grid-cols-3 gap-6">
		<?php for ($i = 0; $i < 6; $i++): ?>
		<div class="animate-pulse">
			<div class="skeleton-card bg-white rounded-lg shadow-sm p-6 space-y-4">
				<div class="skeleton-image w-full h-48 bg-slate-200 rounded-lg"></div>
				<div class="skeleton-title h-6 bg-slate-200 rounded w-3/4"></div>
				<div class="space-y-2">
					<div class="skeleton-text h-4 bg-slate-200 rounded w-full"></div>
					<div class="skeleton-text h-4 bg-slate-200 rounded w-5/6"></div>
				</div>
			</div>
		</div>
		<?php endfor; ?>
	</div>
</div>
```

## Usage

- Card grids with images and text
- Service listings, team showcases
- Product catalogs, portfolio items
