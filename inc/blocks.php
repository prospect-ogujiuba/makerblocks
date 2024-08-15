<?php

/**
 * Blocks.
 *
 * @package makerblocks
 */

function makerblocks_blocks_init()
{
    $blocks = [
        '_maker',
        '_dynamica',
        '_statica',
        '_interactivity',
        '_wordpress-components',
    ];

    foreach ($blocks as $block) {
        register_block_type(MAKERBLOCKS_PLUGIN_DIR . '/blocks/' . $block);
    }
}

add_action('init', 'makerblocks_blocks_init');
