<?php
// hero/render.php

// Get site data
$site_data = [
	'name' => get_bloginfo('name'),
	'url' => home_url()
];

// Prepare all data for React
$component_data = [

	'nonce' => wp_create_nonce('cta_actions'),
];

echo sprintf(
	'<section %s data-component-props="%s"></section>',
	get_block_wrapper_attributes([
		'id' => 'b2bcnc-cta',
	]),
	esc_attr(json_encode($component_data))
);
