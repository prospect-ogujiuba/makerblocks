<?php

/**
 * Block Categories.
 *
 * @package makerblocks
 */

function my_custom_block_category($categories, $post)
{
    return array_merge(
        [
            [
                'slug'  => 'makerblocks-templates',
                'title' => __('Maker Blocks Templates', 'makerblocks'),
            ],
            [
                'slug'  => 'makerblocks-layout',
                'title' => __('Maker Blocks Layout', 'makerblocks'),
            ],
            [
                'slug'  => 'makerblocks',
                'title' => __('Maker Blocks', 'makerblocks'),
            ],
            [
                'slug'  => 'makerblocks-html',
                'title' => __('Maker Blocks HTML', 'makerblocks'),
            ],
        ],
        $categories
    );
}
add_filter('block_categories_all', 'my_custom_block_category', 10, 2);
