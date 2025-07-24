<?php
// footer/render.php - Updated with TypeRocket integration

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
    : $upload_dir['baseurl'] . '/b2bcnc-logo.png';

$site_data['logo_url'] = $logo_url;

// Get footer navigation sections from TypeRocket
$footer_sections = [];

// Prepare all data for React
$component_data = [
    'site' => $site_data,
    'nonce' => wp_create_nonce('footer_actions'),
];

// Output the footer container with data
echo sprintf(
    '<footer %s data-component-props="%s"></footer>',
    get_block_wrapper_attributes([
        'id' => 'b2bcnc-footer',
        'class' => 'bg-blue-50'
    ]),
    esc_attr(json_encode($component_data))
);
?>
