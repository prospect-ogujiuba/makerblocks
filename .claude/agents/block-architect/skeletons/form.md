# Skeleton: Form Variant

<when>Block contains form inputs (contact, booking, filters)</when>

## Template

```php
<div class="skeleton-loader" aria-hidden="true">
	<div class="skeleton-form animate-pulse bg-white rounded-lg p-8 space-y-6">
		<div class="skeleton-form-title h-8 bg-slate-200 rounded w-1/2"></div>
		<div class="space-y-4">
			<?php for ($i = 0; $i < 4; $i++): ?>
			<div class="space-y-2">
				<div class="skeleton-label h-4 w-24 bg-slate-200 rounded"></div>
				<div class="skeleton-input h-12 bg-slate-200 rounded-lg w-full"></div>
			</div>
			<?php endfor; ?>
			<div class="skeleton-submit h-12 w-40 bg-slate-200 rounded-lg"></div>
		</div>
	</div>
</div>
```

## Usage

- Contact forms
- Booking/inquiry forms
- Filter panels
- Search forms
