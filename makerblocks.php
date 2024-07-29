<?php

/**
 * Plugin Name:       Maker Blocks
 * Description:       Custom Gutenberg Blocks For "Maker" Themes
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Prospect Ogujiuba
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       makerblocks
 *
 * @package Makerblocks
 */

if (!defined('ABSPATH')) {
  exit; // Exit if accessed directly.
}

// Global variables
$plugin_directory = plugin_dir_url(__FILE__);
$plugin_path = plugin_dir_path(__FILE__);
$script_version = filemtime($plugin_path . 'assets/js/index.js');
$style_version = filemtime($plugin_path . 'assets/css/styles.css');

// Registers the block using the metadata loaded from the `block.json` file.
function makerblocks_blocks_init()
{
  $blocks = [
    'maker',
    'wordpress-components',
  ];

  foreach ($blocks as $block) {
    register_block_type(__DIR__ . '/blocks/' . $block);
  }
}

add_action('init', 'makerblocks_blocks_init');

// Enqueue styles and scripts for front end
function makerblocks_enqueue_assets()
{
  global $plugin_directory, $script_version, $style_version;

  // wp_register_script('makerblocks-admin-scripts', $plugin_directory . 'assets/js/index-wp-admin.js', [], $script_version, true);
  // wp_enqueue_script('makerblocks-admin-scripts');

  wp_register_script('makerblocks-scripts', $plugin_directory . 'assets/js/index.js', ['wp-element'], $script_version, true);
  wp_enqueue_script('makerblocks-scripts');

  wp_register_style('makerblocks-styles', $plugin_directory . 'assets/css/styles.css', [], $style_version, 'all');
  wp_enqueue_style('makerblocks-styles');

  wp_register_style('makerblocks-wp-components', $plugin_directory . 'assets/css/wp-components.css', [], $style_version, 'all');
  wp_enqueue_style('makerblocks-wp-components');

  wp_register_style('bootstrap-icons', $plugin_directory . 'assets/css/bootstrap-icons.css', [], '1.11.1', 'all');
  wp_enqueue_style('bootstrap-icons');

  wp_register_style('font-awesome', $plugin_directory . 'assets/css/font-awesome.css', [], '6.4.2', 'all');
  wp_enqueue_style('font-awesome');
}
add_action('wp_enqueue_scripts', 'makerblocks_enqueue_assets');

function makerblocks_enqueue_editor_assets()
{
  global $plugin_directory, $script_version, $style_version;

  // wp_register_script('makerblocks-admin-scripts', $plugin_directory . 'assets/js/index-wp-admin.js', [], $script_version, true);
  // wp_enqueue_script('makerblocks-admin-scripts');

  wp_register_script('makerblocks-scripts', $plugin_directory . 'assets/js/index.js', ['wp-element'], $script_version, true);
  wp_enqueue_script('makerblocks-scripts');

  wp_register_style('makerblocks-styles', $plugin_directory . 'assets/css/styles.css', [], $style_version, 'all');
  wp_enqueue_style('makerblocks-styles');

  wp_register_style('bootstrap-icons', $plugin_directory . 'assets/css/bootstrap-icons.css', [], '1.11.1', 'all');
  wp_enqueue_style('bootstrap-icons');

  wp_register_style('font-awesome', $plugin_directory . 'assets/css/font-awesome.css', [], '6.4.2', 'all');
  wp_enqueue_style('font-awesome');
}

add_action('enqueue_block_editor_assets', 'makerblocks_enqueue_editor_assets');

// Maker Blocks Category
function my_custom_block_category($categories, $post)
{
  return array_merge(
    array(
      array(
        'slug'  => 'makerblocks',
        'title' => __('Maker Blocks', 'makerblocks'),
      ),
    ),
    $categories
  );
}
add_filter('block_categories_all', 'my_custom_block_category', 10, 2);
