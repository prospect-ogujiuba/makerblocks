<?php

/**
 * Localize.
 *
 * @package makerblocks
 */

function makerblocks_localize_script()
{
	global $plugin_directory, $script_version;

	// Get theme data
	$theme = wp_get_theme();

	// Localize script to pass data to JavaScript

	$site_info = [
		// Site info
		'siteName'         => get_bloginfo('name'),
		'siteDescription'  => get_bloginfo('description'),
		'siteUrl'          => get_bloginfo('url'),
		'charset'          => get_bloginfo('charset'),
		'language'         => get_bloginfo('language'),
		'homeUrl'          => home_url(),
		'siteUrl'          => site_url(),

	];

	if (is_user_logged_in()) {
		$site_info = [
			// Site info
			'adminEmail'       => get_bloginfo('admin_email'),
			'stylesheetUrl'    => get_bloginfo('stylesheet_url'),
			'rss2Url'          => get_bloginfo('rss2_url'),
			'atomUrl'          => get_bloginfo('atom_url'),
			'pingbackUrl'      => get_bloginfo('pingback_url'),
			'adminUrl'         => admin_url(),
			'ajaxUrl'          => admin_url('admin-ajax.php'),
			'restUrl'          => rest_url(),

			// Theme info
			'themeName'        => $theme->get('Name'),
			'themeVersion'     => $theme->get('Version'),
			'themeUrl'         => $theme->get('ThemeURI'),
			'themeAuthor'      => $theme->get('Author'),
			'themeAuthorUrl'   => $theme->get('AuthorURI'),
			'parentThemeName'  => $theme->parent() ? $theme->parent()->get('Name') : '',
			'parentThemeUrl'   => $theme->parent() ? $theme->parent()->get('ThemeURI') : '',

			// Plugin info
			'pluginDirectory'  => $plugin_directory,
			'pluginVersion'    => $script_version,

			// User info
			'currentUserId'    => get_current_user_id(),
			'currentUserName'  => wp_get_current_user()->user_login,
			'currentUserEmail' => wp_get_current_user()->user_email,
			'currentUserRoles' => wp_get_current_user()->roles,
			'userDisplayName'  => wp_get_current_user()->display_name,
			'userAvatarUrl'    => get_avatar_url(get_current_user_id()),
			'userRegistered'   => wp_get_current_user()->user_registered,

			// Environment info
			'isUserLoggedIn'   => is_user_logged_in(),
			'isMultisite'      => is_multisite(),
			'isHttps'          => is_ssl(),
			'wpVersion'        => get_bloginfo('version'),
			'phpVersion'       => phpversion(),
			'mysqlVersion'     => $GLOBALS['wpdb']->db_version(),

			// Page/Post info (if available)
			'isSingular'       => is_singular(),
			'isHome'           => is_home(),
			'isFrontPage'      => is_front_page(),
			'isAdmin'          => is_admin(),
			'nonce'            => tr_nonce()
		];
	}
	// If it's a singular post or page, add more post-specific data
	if (is_singular()) {
		global $post;
		$site_info['postId']       = $post->ID;
		$site_info['postTitle']    = get_the_title($post->ID);
		$site_info['postUrl']      = get_permalink($post->ID);
		$site_info['postType']     = get_post_type($post->ID);
		$site_info['postAuthorId'] = $post->post_author;
		$site_info['postDate']     = get_the_date('', $post->ID);
		$site_info['postModified'] = get_the_modified_date('', $post->ID);
		$site_info['postStatus']   = get_post_status($post->ID);
		$site_info['postCategories'] = wp_get_post_categories($post->ID, array('fields' => 'all'));
		$site_info['postTags']       = wp_get_post_tags($post->ID, array('fields' => 'names'));
		$site_info['postCommentsCount'] = get_comments_number($post->ID);
	}


	// Pass data to the JavaScript side
	wp_localize_script('makerblocks-scripts', 'siteData', $site_info);
}

add_action('wp_enqueue_scripts', 'makerblocks_localize_script');
