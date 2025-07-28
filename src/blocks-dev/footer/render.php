<?php

// Get site data
$site_data = [
	'name' => get_bloginfo('name'),
	'url' => home_url(),
	'description' => get_bloginfo('description'),
	'current_year' => date('Y'),
];

$upload_dir = wp_upload_dir();

// Get logo from theme customizer or TypeRocket options
$logo_url = get_theme_mod('custom_logo')
	? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full')
	: $upload_dir['baseurl'] . '/b2bcnc-logo-white.png';

$site_data['logo_url'] = $logo_url;

// Get footer navigation sections from TypeRocket
$footer_sections = [];


$component_data = [
	'site' => $site_data,
];

?>

<footer <?php echo get_block_wrapper_attributes([
			'id' => 'b2bcnc-footer',
			'class' => 'bg-blue-50'
		]) . '" component-data="' . esc_attr(json_encode($component_data)); ?>"></footer>