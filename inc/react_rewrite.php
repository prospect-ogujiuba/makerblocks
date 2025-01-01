<?php

/**
 * React Rewrite.
 * 
 * @package makerblocks
 */

 function custom_redirect_404() {
    if (is_404()) {
        // Replace '/custom-404' with your custom error page's slug
        wp_redirect(home_url('/404'), 302); 
        exit;
    }
}
add_action('template_redirect', 'custom_redirect_404');