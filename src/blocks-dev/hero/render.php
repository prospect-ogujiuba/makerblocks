<?php

// Get site data
$site_data = [
	'name' => get_bloginfo('name'),
	'url' => home_url(),
	'description' => get_bloginfo('description'),
];

$upload_dir = wp_upload_dir();

// Get hero from theme customizer or TypeRocket options
$hero_url = $upload_dir['baseurl'] . '/modern_enterprise_2.jpg';

$site_data['hero_url'] = $hero_url;


$component_data = [
	'site' => $site_data,
];

?>

<section <?php echo get_block_wrapper_attributes([
				'id' => 'b2bcnc-hero',
			]) . '" component-data="' . esc_attr(json_encode($component_data)); ?>"></section>
