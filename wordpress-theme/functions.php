<?php
/**
 * Stranie w Lesie Theme Functions
 */

// Define theme constants
define( 'THEME_VERSION', '1.0.0' );
define( 'THEME_DIR', get_template_directory() );
define( 'THEME_URI', get_template_directory_uri() );
define( 'ASSETS_URI', THEME_URI . '/assets' );

/**
 * Theme Setup
 */
function stranie_w_lesie_setup() {
    // Add theme support
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'script',
        'style'
    ) );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'automatic-feed-links' );
    
    // Register menus
    register_nav_menu( 'primary', __( 'Primary Menu', 'stranie-w-lesie' ) );
    register_nav_menu( 'footer', __( 'Footer Menu', 'stranie-w-lesie' ) );
}
add_action( 'after_setup_theme', 'stranie_w_lesie_setup' );

/**
 * Enqueue Styles and Scripts
 */
function stranie_w_lesie_enqueue() {
    // Enqueue built CSS
    wp_enqueue_style( 
        'stranie-styles',
        ASSETS_URI . '/dist/assets/index-D2D1bmC8.css',
        array(),
        THEME_VERSION
    );
    
    // Enqueue built JS
    wp_enqueue_script(
        'stranie-scripts',
        ASSETS_URI . '/dist/assets/index-B8bt8kWX.js',
        array(),
        THEME_VERSION,
        true
    );
    
    // Skip React app mount - we're using server-side rendering
    wp_localize_script( 'stranie-scripts', 'strsnieData', array(
        'homeUrl' => home_url(),
        'siteTitle' => get_bloginfo( 'name' )
    ) );
}
add_action( 'wp_enqueue_scripts', 'stranie_w_lesie_enqueue' );

/**
 * Register Widgets
 */
function stranie_w_lesie_widgets() {
    register_sidebar( array(
        'name'          => __( 'Primary Sidebar', 'stranie-w-lesie' ),
        'id'            => 'primary-sidebar',
        'description'   => __( 'Primary Sidebar', 'stranie-w-lesie' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>'
    ) );
    
    register_sidebar( array(
        'name'          => __( 'Footer Widgets', 'stranie-w-lesie' ),
        'id'            => 'footer-widgets',
        'description'   => __( 'Footer Widget Area', 'stranie-w-lesie' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>'
    ) );
}
add_action( 'widgets_init', 'stranie_w_lesie_widgets' );

/**
 * Custom excerpt length
 */
function stranie_w_lesie_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'stranie_w_lesie_excerpt_length' );

/**
 * Custom excerpt more
 */
function stranie_w_lesie_excerpt_more( $more ) {
    return ' ...';
}
add_filter( 'excerpt_more', 'stranie_w_lesie_excerpt_more' );

/**
 * Disable Gutenberg
 */
add_filter( 'use_block_editor_for_post', '__return_false' );
add_filter( 'use_block_editor_for_post_type', '__return_false' );
