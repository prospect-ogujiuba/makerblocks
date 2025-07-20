<?php
// footer/render.php - Updated with TypeRocket integration

// Get site data
$site_data = [
    'name' => get_bloginfo('name'),
    'url' => home_url(),
    'description' => get_bloginfo('description'),
    'current_year' => date('Y'),
];

// Get logo from theme customizer or TypeRocket options
$logo_url = get_theme_mod('custom_logo')
    ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full')
    : MAKERBLOCKS_PLUGIN_URL . 'assets/images/logos/logo-ph-black.png';

$site_data['logo_url'] = $logo_url;

// Get footer navigation sections from TypeRocket
$footer_sections = [];

// Get CTA section data from TypeRocket options or customizer
$cta_data = [
    'enabled' => get_theme_mod('footer_cta_enabled', true),
    'subtitle' => get_theme_mod('footer_cta_subtitle', 'Get started'),
    'title' => get_theme_mod('footer_cta_title', 'Boost your productivity. Start using our app today.'),
    'description' => get_theme_mod('footer_cta_description', 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.'),
    'button_text' => get_theme_mod('footer_cta_button_text', 'Get started'),
    'button_url' => get_theme_mod('footer_cta_button_url', '#'),
];

// Prepare all data for React
$component_data = [
    'site' => $site_data,
    'cta' => $cta_data,
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
