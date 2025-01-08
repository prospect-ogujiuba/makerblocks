<?php

/**
 * Post Types
 * 
 * @package maakerblocks
 */

$postypes = [];

foreach ($postypes as $postype) {

    include MAKERBLOCKS_PLUGIN_DIR . 'post-types/' . $postype . '.php';
}
