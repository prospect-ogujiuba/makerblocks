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

if (!function_exists('makerblocks_model_to_array')) {
	/**
	 * Helper function to safely convert model to array
	 * Handles TypeRocket models and their relationships
	 *
	 * @param mixed $model Model instance, array, or primitive
	 * @return mixed Converted value
	 */
	function makerblocks_model_to_array($model)
	{
		if (is_null($model)) {
			return null;
		}

		if (is_array($model)) {
			return array_map('makerblocks_model_to_array', $model);
		}

		if (is_object($model)) {
			// If it has a getProperties method (TypeRocket model), use it
			if (method_exists($model, 'getProperties')) {
				$props = $model->getProperties();
				// Recursively convert nested objects
				foreach ($props as $key => $value) {
					if (is_object($value) || is_array($value)) {
						$props[$key] = makerblocks_model_to_array($value);
					}
				}
				return $props;
			}

			// Otherwise cast to array
			return (array)$model;
		}

		return $model;
	}
}

if (!function_exists('makerblocks_get_media_url')) {
	/**
	 * Get media URL by ID with fallback to plugin assets
	 *
	 * @param int $media_id WordPress attachment ID
	 * @param string $fallback_path Fallback path relative to plugin assets/images
	 * @return string Media URL
	 */
	function makerblocks_get_media_url($media_id, $fallback_path = '') {
		if ($media_id) {
			$url = wp_get_attachment_url($media_id);
			if ($url) {
				return $url;
			}
		}

		if ($fallback_path) {
			return MAKERBLOCKS_PLUGIN_URL . 'assets/images/' . $fallback_path;
		}

		return '';
	}
}

if (!function_exists('makerblocks_validate_array_structure')) {
	/**
	 * Validate block attribute array structure
	 *
	 * @param array $items Array to validate
	 * @param array $required_keys Required keys per item
	 * @return array Filtered valid items
	 */
	function makerblocks_validate_array_structure($items, $required_keys) {
		if (!is_array($items)) {
			return [];
		}

		return array_filter($items, function($item) use ($required_keys) {
			if (!is_array($item)) {
				return false;
			}
			foreach ($required_keys as $key) {
				if (!isset($item[$key])) {
					return false;
				}
			}
			return true;
		});
	}
}


/**
 * Redirect 404 errors to home page
 */
function redirect_404_to_home() {
    if (is_404()) {
        wp_redirect(home_url('/'), 301);
        exit;
    }
}
add_action('template_redirect', 'redirect_404_to_home');
