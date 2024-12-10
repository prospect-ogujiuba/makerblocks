<?php

/**
 * React Rewrite.
 * 
 * @package makerblocks
 */

function react_app_rewrite_rules()
{
    // Add rewrite rule for your React app base path
    add_rewrite_rule(
        '^applicant-tracking-system(/[^/]*)?/?',
        'index.php?pagename=applicant-tracking-system',
        'top'
    );
}
add_action('init', 'react_app_rewrite_rules');

// Ensure WordPress doesn't return 404 for your React routes
function custom_override_404($query)
{
    if ($query->is_404() && strpos($_SERVER['REQUEST_URI'], '/applicant-tracking-system/') !== false) {
        $query->is_404 = false;
        $query->set('pagename', 'applicant-tracking-system');
    }
}
add_action('pre_get_posts', 'custom_override_404');