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
    $breadcrumbs[] = '<a href="' . esc_url(home_url('/')) . '">' . __('Home', 'text-domain') . '</a>';

    // Check if the post has a parent
    if ($post->post_parent) {
        // Get the parent post ancestors
        $parent_ids = array_reverse(get_post_ancestors($post->ID));

        // Loop through each ancestor to build breadcrumbs
        foreach ($parent_ids as $parent_id) {
            $breadcrumbs[] = '<a href="' . get_permalink($parent_id) . '">' . get_the_title($parent_id) . '</a>';
        }
    }

    // Add the current post breadcrumb
    $breadcrumbs[] = '<span class="current">' . get_the_title() . '</span>';

    // Output the breadcrumbs
    echo '<div class="breadcrumbs font-bold">' . implode(' <i class="bi bi-chevron-double-right"></i> ', $breadcrumbs) . '</div>';
}
