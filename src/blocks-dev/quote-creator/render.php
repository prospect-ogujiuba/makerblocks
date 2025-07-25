<?php
// quote-creator/render.php

// Prepare all data for React
$component_data = [
    'nonce' => wp_create_nonce('quote_creator_actions'),
];

echo sprintf(
    '<section %s data-component-props="%s"></section>',
    get_block_wrapper_attributes([
        'id' => 'b2bcnc-quote-creator', // Updated ID to match the quote-creator block
    ]),
    esc_attr(json_encode($component_data))
);
?>
