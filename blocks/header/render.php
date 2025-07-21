<?php
// header/render.php - Updated with TypeRocket integration

// Get site data
$site_data = [
    'name' => get_bloginfo('name'),
    'url' => home_url(),
    'description' => get_bloginfo('description'),
];

$upload_dir = wp_upload_dir();


// Get logo from theme customizer or TypeRocket options
$logo_url = get_theme_mod('custom_logo')
    ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full')
    : $upload_dir['baseurl'] . '/b2bcnc-logo.png';

$site_data['logo_url'] = $logo_url;

// Prepare all data for React
$component_data = [
    'site' => $site_data,
    'nonce' => wp_create_nonce('header_actions'),
];

// Output the header container with data
echo sprintf(
    '<header %s data-component-props="%s"></header>',
    get_block_wrapper_attributes([
        'id' => 'b2bcnc-header',
        'class' => 'relative isolate z-10 bg-white'
    ]),
    esc_attr(json_encode($component_data))
);
?>
