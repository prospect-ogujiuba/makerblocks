<?php

// Get site data
$site_data = [
	'name' => get_bloginfo('name'),
	'url' => home_url(),
	'description' => get_bloginfo('description'),
];

$upload_dir = wp_upload_dir();

// Get logo from theme customizer or TypeRocket options
$logo_url = $upload_dir['baseurl'] . '/b2bcnc_logo_bg_white.png';

$site_data['logo_url'] = $logo_url;

$nonce = tr_nonce();


$component_data = [
	'site' => $site_data,
	'nonce' => $nonce
];

?>

<header <?php echo get_block_wrapper_attributes([
			'id' => 'b2bcnc-header',
			'class' => 'relative isolate z-10 bg-white'
		]) . '" component-data="' . esc_attr(json_encode($component_data)); ?>"></header>
