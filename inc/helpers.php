<?php

/**
 * Helpers.
 *
 * @package makerblocks
 */

function custom_breadcrumbs()
{
	// Get the current post
	$post = get_post();

	// Initialize an empty breadcrumbs array
	$breadcrumbs = array();

	// Add Home breadcrumb
	$breadcrumbs[] = ['url' => esc_url(home_url('/')), 'title' => __('Home', 'text-domain')];

	// Check if the post has a parent
	if ($post->post_parent) {
		// Get the parent post ancestors
		$parent_ids = array_reverse(get_post_ancestors($post->ID));

		// Loop through each ancestor to build breadcrumbs
		foreach ($parent_ids as $parent_id) {
			$breadcrumbs[] = ['url' => esc_url(get_permalink($parent_id)), 'title' => __(get_the_title($parent_id), 'text-domain')];
		}
	}

	// Add the current post breadcrumb
	$breadcrumbs[] = ['url' => "#", 'title' => __(get_the_title(), 'text-domain')];

	// Output the breadcrumbs
	return $breadcrumbs;
}
