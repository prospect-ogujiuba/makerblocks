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
	'title' => '',
	'description' => '',
	'background_color' => 'bg-white',
	'text_color' => 'text-gray-900',
	'subtitle_color' => 'text-blue-600',
];

// Check if we're on a specific page/post and get custom header data
if ($current_post) {
	// Use default page/post data
	$page_header_data['title'] = $current_post->post_title;

	// Set contextual defaults based on post type
	switch ($current_post->post_type) {
		case 'page':
			if (is_front_page()) {
				$page_header_data['subtitle'] = 'Welcome to';
				$page_header_data['title'] = get_bloginfo('name');
				$page_header_data['description'] = get_bloginfo('description');
			} elseif (is_page('contact')) {
				$page_header_data['subtitle'] = 'Get in touch';
				$page_header_data['description'] = 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.';
			} elseif (is_page('about')) {
				$page_header_data['subtitle'] = 'About us';
				$page_header_data['description'] = 'Learn more about our company, mission, and the team behind our products.';
			}
			break;

		case 'post':
			$page_header_data['subtitle'] = 'Blog Post';
			$page_header_data['description'] = wp_trim_words($current_post->post_content, 25);
			break;

		case 'product':
			$page_header_data['subtitle'] = 'Product';
			$page_header_data['description'] = $product_meta['short_description'] ?? wp_trim_words($current_post->post_content, 25);
			break;

		default:
			$page_header_data['subtitle'] = ucfirst($current_post->post_type);
			$page_header_data['description'] = wp_trim_words($current_post->post_content, 25);
			break;
	}
}

// Handle archive pages
if (is_archive()) {
	if (is_category()) {
		$category = get_queried_object();
		$page_header_data['subtitle'] = 'Category';
		$page_header_data['title'] = $category->name;
		$page_header_data['description'] = $category->description ?: 'Browse all posts in this category.';
	} elseif (is_tag()) {
		$tag = get_queried_object();
		$page_header_data['subtitle'] = 'Tag';
		$page_header_data['title'] = $tag->name;
		$page_header_data['description'] = $tag->description ?: 'Browse all posts with this tag.';
	} elseif (is_post_type_archive()) {
		$post_type = get_queried_object();
		$page_header_data['subtitle'] = 'Archive';
		$page_header_data['title'] = $post_type->labels->name ?? ucfirst($post_type->name);
		$page_header_data['description'] = $post_type->description ?: 'Browse all ' . strtolower($post_type->labels->name);
	}
}

// Handle search results
if (is_search()) {
	$search_query = get_search_query();
	$page_header_data['subtitle'] = 'Search Results';
	$page_header_data['title'] = $search_query ? "Results for \"{$search_query}\"" : 'Search Results';
	$page_header_data['description'] = $search_query ? "Found " . $GLOBALS['wp_query']->found_posts . " results for your search." : 'Enter a search term to find content.';
}

// Handle 404 pages
if (is_404()) {
	$page_header_data['subtitle'] = 'Page Not Found';
	$page_header_data['title'] = '404 Error';
	$page_header_data['description'] = 'Sorry, the page you are looking for could not be found.';
}

// Get additional context data
$context_data = [
	'is_front_page' => is_front_page(),
	'is_single' => is_single(),
	'is_page' => is_page(),
	'is_archive' => is_archive(),
	'is_search' => is_search(),
	'is_404' => is_404(),
	'post_type' => $current_post ? $current_post->post_type : '',
];

// Prepare all data for React
$component_data = [
	'header' => $page_header_data,
	'context' => $context_data,
	'nonce' => wp_create_nonce('page_header_actions'),
	'clients' => $clients->toArray(),
	'breadcrumbs' => function_exists('custom_breadcrumbs') ? custom_breadcrumbs() : '',
];

// Output the container with data
echo sprintf(
	'<div %s data-component-props="%s"></div>',
	get_block_wrapper_attributes([
		'id' => 'b2bcnc-page-header',
		'class' => $page_header_data['background_color']
	]),
	esc_attr(json_encode($component_data))
);


