<?php

/**
 * Blocks.
 *
 * @package makerblocks
 */

function makerblocks_get_custom_blocks()
{
    return [
        // TEMPLATES
        '_maker',
        '_dynamica',
        '_statica',
        '_interactivity',
        '_wordpress-components',
        // HTML ELEMENTS
        'html-tag',
        'html-tag-a',
        'html-tag-abbr',
        'html-tag-address',
        'html-tag-area',
        'html-tag-article',
        'html-tag-aside',
        'html-tag-audio',
        'html-tag-b',
        'html-tag-base',
        // 'html-tag-bdi',
        // 'html-tag-bdo',
        // 'html-tag-blockquote',
        // 'html-tag-body',
        // 'html-tag-br',
        // 'html-tag-button',
        // 'html-tag-canvas',
        // 'html-tag-caption',
        // 'html-tag-cite',
        // 'html-tag-code',
        // 'html-tag-col',
        // 'html-tag-colgroup',
        // 'html-tag-comment',
        // 'html-tag-data',
        // 'html-tag-datalist',
        // 'html-tag-dd',
        // 'html-tag-del',
        // 'html-tag-details',
        // 'html-tag-dfn',
        // 'html-tag-dialog',
        'html-tag-div',
        // 'html-tag-dl',
        // 'html-tag-doctype',
        // 'html-tag-dt',
        // 'html-tag-em',
        // 'html-tag-embed',
        // 'html-tag-fieldset',
        // 'html-tag-figcaption',
        // 'html-tag-figure',
        // 'html-tag-footer',
        // 'html-tag-form',
        // 'html-tag-h1',
        // 'html-tag-h2',
        // 'html-tag-h3',
        // 'html-tag-h4',
        // 'html-tag-h5',
        // 'html-tag-h6',
        // 'html-tag-head',
        // 'html-tag-header',
        // 'html-tag-hr',
        // 'html-tag-html',
        // 'html-tag-i',
        // 'html-tag-iframe',
        // 'html-tag-img',
        // 'html-tag-input',
        // 'html-tag-ins',
        // 'html-tag-kbd',
        // 'html-tag-label',
        // 'html-tag-legend',
        // 'html-tag-li',
        // 'html-tag-link',
        // 'html-tag-main',
        // 'html-tag-map',
        // 'html-tag-mark',
        // 'html-tag-menu',
        // 'html-tag-meta',
        // 'html-tag-meter',
        // 'html-tag-nav',
        // 'html-tag-noscript',
        // 'html-tag-object',
        // 'html-tag-ol',
        // 'html-tag-optgroup',
        // 'html-tag-option',
        // 'html-tag-output',
        // 'html-tag-p',
        // 'html-tag-picture',
        // 'html-tag-pre',
        // 'html-tag-progress',
        // 'html-tag-q',
        // 'html-tag-rp',
        // 'html-tag-rt',
        // 'html-tag-ruby',
        // 'html-tag-s',
        // 'html-tag-samp',
        // 'html-tag-script',
        'html-tag-section',
        // 'html-tag-select',
        // 'html-tag-slot',
        // 'html-tag-small',
        // 'html-tag-source',
        // 'html-tag-span',
        // 'html-tag-strong',
        // 'html-tag-style',
        // 'html-tag-sub',
        // 'html-tag-summary',
        // 'html-tag-sup',
        // 'html-tag-table',
        // 'html-tag-tbody',
        // 'html-tag-td',
        // 'html-tag-template',
        // 'html-tag-textarea',
        // 'html-tag-tfoot',
        // 'html-tag-th',
        // 'html-tag-thead',
        // 'html-tag-time',
        // 'html-tag-title',
        // 'html-tag-tr',
        // 'html-tag-track',
        // 'html-tag-u',
        // 'html-tag-ul',
        // 'html-tag-var',
        // 'html-tag-video',
        // 'html-tag-wbr',
    ];

}

function makerblocks_get_wp_core_blocks()
{
    return [
        // 'core/paragraph',
        // 'core/heading',
        // 'core/list',
        // 'core/list-item',
        // 'core/quote',
        // 'core/preformatted',
        // 'core/pullquote',
        // 'core/table',
        // 'core/gallery',
        // 'core/image',
        // 'core/video',
        // 'core/spacer',
        // 'core/separator',
        // 'core/shortcode',
        // 'core/archives',
        // 'core/audio',
        // 'core/avatar',
        // 'core/pattern',
        // 'core/button',
        // 'core/buttons',
        // 'core/calendar',
        // 'core/categories-list',
        // 'core/code',
        // 'core/column',
        // 'core/columns',
        // 'core/comment-author-avatar', // deprecated
        // 'core/comment-author-name',
        // 'core/comment-content',
        // 'core/comment-date',
        // 'core/comment-edit-link',
        // 'core/comment-reply-link',
        // 'core/comment-template',
        // 'core/comments',
        // 'core/comments-pagination',
        // 'core/comments-next-page',
        // 'core/comments-page-numbers',
        // 'core/comments-previous-page',
        // 'core/comments-title',
        // 'core/cover',
        // 'core/details',
        // 'core/embed',
        // 'core/file',
        // 'core/footnotes',
        // 'core/form',
        // 'core/input-field',
        // 'core/form-submission-notification',
        // 'core/form-submit-button',
        // 'core/classic',
        // 'core/group',
        // 'core/home-link',
        // 'core/custom-html',
        // 'core/latest-comments',
        // 'core/latest-posts',
        // 'core/login-out',
        // 'core/media-text',
        // 'core/unsupported',
        // 'core/more',
        // 'core/navigation',
        // 'core/custom-link',
        // 'core/submenu',
        // 'core/page-break',
        // 'core/page-list',
        // 'core/page-list-item',
        // 'core/pattern-placeholder',
        // 'core/author',
        // 'core/author-biography',
        // 'core/author-name',
        // 'core/comment', // deprecated
        // 'core/comments-count',
        // 'core/comments-form',
        // 'core/comments-link',
        // 'core/content',
        // 'core/date',
        // 'core/excerpt',
        // 'core/featured-image',
        // 'core/post-navigation-link',
        // 'core/post-template',
        // 'core/post-terms',
        // 'core/time-to-read',
        // 'core/title',
        // 'core/query-loop',
        // 'core/no-results',
        // 'core/pagination',
        // 'core/next-page',
        // 'core/page-numbers',
        // 'core/previous-page',
        // 'core/query-title',
        // 'core/rss',
        // 'core/search',
        // 'core/site-logo',
        // 'core/site-tagline',
        // 'core/site-title',
        // 'core/social-icon',
        // 'core/social-icons',
        // 'core/tag-cloud',
        // 'core/template-part',
        // 'core/term-description',
        // 'core/text-columns', // deprecated
        // 'core/table-of-contents',
        // 'core/verse',
    ];
}


function makerblocks_blocks_init()
{

    $blocks = makerblocks_get_custom_blocks();
    foreach ($blocks as $block) {
        register_block_type(MAKERBLOCKS_PLUGIN_DIR . '/blocks/' . $block);
    }
}

add_action('init', 'makerblocks_blocks_init');

// Custom Block Categories
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
                'slug'  => 'makerblocks-html-tags',
                'title' => __('Maker Blocks HTML Tags', 'makerblocks'),
            ],
        ],
        $categories
    );
}
add_filter('block_categories_all', 'my_custom_block_category', 10, 2);


function makerblocks_allowed_block_types($allowed_block_types, $block_editor_context)
{

    $core_blocks = makerblocks_get_wp_core_blocks();

    $custom_blocks = array_map(function ($block) {
        return 'makerblocks/' . $block;
    }, makerblocks_get_custom_blocks());

    return array_merge($core_blocks, $custom_blocks);
}

add_filter('allowed_block_types_all', 'makerblocks_allowed_block_types', 10, 2);
