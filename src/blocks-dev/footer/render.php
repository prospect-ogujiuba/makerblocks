<?php

// Get site data
$site_data = [
	'name' => get_bloginfo('name'),
	'url' => home_url(),
	'description' => get_bloginfo('description'),
	'current_year' => date('Y'),
];

$upload_dir = wp_upload_dir();

$logo_url = $upload_dir['baseurl'] . '/b2bcnc_logo_bg_white.png';


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
