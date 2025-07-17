<?php

/**
 * Enqueue Assets.
 *
 * @package makerblocks
 */


// Enqueue styles and scripts for front end
function makerblocks_enqueue_assets()
{
    global $plugin_directory, $script_version, $style_version;

    wp_register_script('makerblocks-scripts', $plugin_directory . 'assets/js/index.js', ['wp-element'], $script_version, true);
    wp_enqueue_script('makerblocks-scripts');

    wp_register_style('makerblocks-styles', $plugin_directory . 'assets/css/styles.css', [], $style_version, 'all');
    wp_enqueue_style('makerblocks-styles');

    wp_register_style('bootstrap-icons', $plugin_directory . 'assets/css/bootstrap-icons.css', [], '1.11.1', 'all');
    wp_enqueue_style('bootstrap-icons');
}

add_action('wp_enqueue_scripts', 'makerblocks_enqueue_assets');

// Enqueue editor assets
function makerblocks_enqueue_editor_assets()
{
    global $plugin_directory, $script_version, $style_version;

    wp_register_script('makerblocks-scripts', $plugin_directory . 'assets/js/index.js', ['wp-element'], $script_version, true);
    wp_enqueue_script('makerblocks-scripts');

    wp_register_style('makerblocks-styles', $plugin_directory . 'assets/css/styles.css', [], $style_version, 'all');
    wp_enqueue_style('makerblocks-styles');

    wp_register_style('bootstrap-icons', $plugin_directory . 'assets/css/bootstrap-icons.css', [], '1.11.1', 'all');
    wp_enqueue_style('bootstrap-icons');
}

add_action('enqueue_block_assets', 'makerblocks_enqueue_editor_assets');

// Enqueue admin assets
function makerblocks_enqueue_admin_assets()
{
    global $plugin_directory, $script_version, $style_version;

    wp_register_script('makerblocks-admin-scripts', $plugin_directory . 'assets/admin/index-wp-admin.js', [], $script_version, true);
    wp_enqueue_script('makerblocks-admin-scripts');

    wp_register_style('makerblocks-admin-styles', $plugin_directory . 'assets/admin/styles-wp-admin.css', [], $style_version, 'all');
    wp_enqueue_style('makerblocks-admin-styles');
}

add_action('admin_enqueue_scripts', 'makerblocks_enqueue_admin_assets');
