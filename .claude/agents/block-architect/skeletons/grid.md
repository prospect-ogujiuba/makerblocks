# Skeleton: Grid Variant

<when>Block displays simple grid of items (icons, stats, features)</when>

## Template

```php
<div class="skeleton-loader" aria-hidden="true">
	<div class="container mx-auto px-4 py-16">
		<div class="skeleton-grid grid grid-cols-1 md:grid-cols-4 gap-6">
			<?php for ($i = 0; $i < 8; $i++): ?>
			<div class="animate-pulse">
				<div class="skeleton-item bg-white rounded-lg p-4 space-y-3">
					<div class="skeleton-icon h-12 w-12 bg-slate-200 rounded-lg"></div>
					<div class="skeleton-title h-5 bg-slate-200 rounded w-3/4"></div>
					<div class="skeleton-text h-4 bg-slate-200 rounded w-full"></div>
				</div>
			</div>
			<?php endfor; ?>
		</div>
	</div>
</div>
```

## Usage

- Feature grids with icons
- Stats counters
- Category listings
- Simple item grids
