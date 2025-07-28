<?php

// Get current page/post data
global $post;
$current_post = $post;

// Default page header data
$page_header_data = [
	'subtitle' => '',
	'title' => get_the_title()
];


$component_data = [
	'header' => $page_header_data,
	'breadcrumbs' => function_exists('custom_breadcrumbs') ? custom_breadcrumbs() : '',
];

?>

<div <?php echo get_block_wrapper_attributes([
			'id' => 'b2bcnc-page-header',
		]) . '" component-data="' . esc_attr(json_encode($component_data)); ?>"></div>
