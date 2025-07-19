<?php
/**
 * Enqueue Assets.
 *
 * @package makerblocks
 */

// Helper to register scripts using asset files
function makerblocks_register_asset($handle, $rel_path) {
	$base_path = MAKERBLOCKS_PLUGIN_DIR;
	$base_url  = MAKERBLOCKS_PLUGIN_URL;

	$asset_path = $base_path . $rel_path . '.asset.php';
	$js_path    = $rel_path . '.js';

	$asset = file_exists($asset_path) ? include $asset_path : [
		'dependencies' => [],
		'version'      => filemtime($base_path . $js_path),
	];

	wp_register_script(
		$handle,
		$base_url . $js_path,
		$asset['dependencies'],
		$asset['version'],
		true
	);
}

// Front-end assets
function makerblocks_enqueue_assets() {
	global $style_version;

	makerblocks_register_asset('makerblocks-scripts', 'assets/js/index');
	wp_enqueue_script('makerblocks-scripts');

	wp_register_style('makerblocks-styles', MAKERBLOCKS_PLUGIN_URL . 'assets/css/styles.css', [], $style_version, 'all');
	wp_enqueue_style('makerblocks-styles');

	wp_register_style('bootstrap-icons', MAKERBLOCKS_PLUGIN_URL . 'assets/css/bootstrap-icons.css', [], '1.11.1', 'all');
	wp_enqueue_style('bootstrap-icons');
}
add_action('wp_enqueue_scripts', 'makerblocks_enqueue_assets');

// Editor assets
function makerblocks_enqueue_editor_assets() {
	global $style_version;

	makerblocks_register_asset('makerblocks-scripts', 'assets/js/index');
	wp_enqueue_script('makerblocks-scripts');

	wp_register_style('makerblocks-styles', MAKERBLOCKS_PLUGIN_URL . 'assets/css/styles.css', [], $style_version, 'all');
	wp_enqueue_style('makerblocks-styles');

	wp_register_style('bootstrap-icons', MAKERBLOCKS_PLUGIN_URL . 'assets/css/bootstrap-icons.css', [], '1.11.1', 'all');
	wp_enqueue_style('bootstrap-icons');
}
add_action('enqueue_block_assets', 'makerblocks_enqueue_editor_assets');

// Admin assets
function makerblocks_enqueue_admin_assets() {
	global $style_version;

	makerblocks_register_asset('makerblocks-admin-scripts', 'assets/admin/index-wp-admin');
	wp_enqueue_script('makerblocks-admin-scripts');

	wp_register_style('makerblocks-admin-styles', MAKERBLOCKS_PLUGIN_URL . 'assets/admin/styles-wp-admin.css', [], $style_version, 'all');
	wp_enqueue_style('makerblocks-admin-styles');
}
add_action('admin_enqueue_scripts', 'makerblocks_enqueue_admin_assets');
