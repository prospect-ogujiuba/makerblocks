<?php
// page-header/render.php - Updated with TypeRocket integration

// Get current page/post data
global $post;
$current_post = $post;

use MakerMaker\Models\Client;

$clients = Client::new()->findAll()->get();

// Default page header data
$page_header_data = [
	'subtitle' => '',
	'title' => get_the_title()
];

// Prepare all data for React
$component_data = [
	'header' => $page_header_data,
	'nonce' => wp_create_nonce('page_header_actions'),
	'clients' => $clients->toArray(),
	'breadcrumbs' => function_exists('custom_breadcrumbs') ? custom_breadcrumbs() : '',
];

// Output the container with data
echo sprintf(
	'<div %s data-component-props="%s"></div>',
	get_block_wrapper_attributes([
		'id' => 'b2bcnc-page-header',
	]),
	esc_attr(json_encode($component_data))
);


