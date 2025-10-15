<?php

$component_data = []; ?>

<header
	<?php
	echo get_block_wrapper_attributes([
		'id' => 'b2bcnc-hero',
	]);
	?>
	component-data="<?php echo esc_attr(wp_json_encode($component_data, JSON_UNESCAPED_SLASHES)); ?>">
</header>
