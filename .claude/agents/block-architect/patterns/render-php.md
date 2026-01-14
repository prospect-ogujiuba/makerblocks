# Pattern: render.php

<when>Always - required for every block</when>

## Template

```php
<?php
// 1. Extract attributes with fallbacks
$attribute_one = $attributes['attributeOne'] ?? 'default';
$attribute_two = $attributes['attributeTwo'] ?? false;

// 2. Prepare component data array (block attributes only)
$component_data = [
	'attributeOne' => $attribute_one,
	'attributeTwo' => $attribute_two,
];

// 3. NO DATABASE QUERIES - data fetched client-side
?>

<section <?php echo get_block_wrapper_attributes(); ?>>
	<div id="makerblocks-{block-name}" component-data="<?php echo esc_attr(wp_json_encode($component_data, JSON_UNESCAPED_SLASHES)); ?>">

		<!-- 4. Skeleton loader (load from skeletons/*.md) -->
		{SKELETON_LOADER}

	</div>
</section>
```

## Critical Rules

1. **component-data encoding:**
   - MUST use `wp_json_encode($data, JSON_UNESCAPED_SLASHES)`
   - MUST wrap with `esc_attr()`

2. **Block wrapper:**
   - MUST use `get_block_wrapper_attributes()`
   - NEVER hardcode class names

3. **Mount ID:**
   - Pattern: `makerblocks-{block-name}`
   - Must match MakerBlocks.js registry

4. **No database queries:**
   - Pass attributes only
   - Data fetched client-side via REST API
