<?php

/**
 * Maker Blocks Carbon Fields.
 * 
 * @package makerblocks
 */

use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action('carbon_fields_register_fields', 'makerblocks_carbon_fields');
function makerblocks_carbon_fields()
{
    // Theme Options
    Container::make('theme_options', __('Maker Blocks Settings'))
        ->set_page_menu_title('Maker Blocks')
        ->set_page_menu_position(40)
        ->set_icon('dashicons-slides')
        ->add_fields(array(
            Field::make('image', 'brand_logo', __('Brand Logo'))
                ->set_value_type('url'),
        ));
}

add_action('plugins_loaded', 'makerblocks_load');

function makerblocks_load()
{
    // Check if Carbon Fields has already been loaded
    if (!class_exists('Carbon_Fields\Carbon_Fields')) {
        require_once(MAKERBLOCKS_PLUGIN_DIR . 'vendor/autoload.php');
        \Carbon_Fields\Carbon_Fields::boot();
    }
}
