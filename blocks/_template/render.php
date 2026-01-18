<?php
$component_data = []
?>

<section <?php echo get_block_wrapper_attributes([
	'id' => 'makerblocks-template',
	// Add other attributes here as needed
]) ?> component-data="<?php echo esc_attr(wp_json_encode($component_data, JSON_UNESCAPED_SLASHES)); ?>"></section>
