<?php
// hero/render.php

// Prepare all data for React
$component_data = [
    'nonce' => wp_create_nonce('hero_actions'),
];

echo sprintf(
    '<section %s data-component-props="%s"></section>',
    get_block_wrapper_attributes([
        'id' => 'b2bcnc-hero',
    ]),
    esc_attr(json_encode($component_data))
);
?>
