<?php
// services/render.php - Updated with TypeRocket integration

// Prepare all data for React
$component_data = [
    'nonce' => wp_create_nonce('services_actions'),
];

// Output the services container with data
echo sprintf(
    '<section %s data-component-props="%s"></section>',
    get_block_wrapper_attributes([
        'id' => 'b2bcnc-services',
    ]),
    esc_attr(json_encode($component_data))
);
?>
