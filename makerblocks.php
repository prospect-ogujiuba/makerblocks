<?php

/**
 * Plugin Name:       Maker Blocks
 * Description:       Custom Gutenberg Blocks for MakerStarter
 * Requires at least: 6.5
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

// Variables
define('MAKERBLOCKS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('MAKERBLOCKS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MAKERSTARTER_THEME_DIR', get_template_directory());
define('MAKERSTARTER_THEME_URL', get_template_directory_uri());

$includes = [
  // 'carbon_fields',
  'post_types',
  'variables',
  'blocks',
  'helpers',
  'enqueue_assets',
  'wp_localize',
  // 'react_rewrite'
];

foreach ($includes as $include) {
  require_once MAKERBLOCKS_PLUGIN_DIR . 'inc/' . $include . '.php';
}
