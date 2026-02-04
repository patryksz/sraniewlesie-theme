<?php
/**
 * Header Template
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header class="site-header" role="banner">
        <div class="header-content">
            <div class="site-branding">
                <?php 
                if ( has_custom_logo() ) {
                    the_custom_logo();
                }
                ?>
                <h1 class="site-title">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
                        <?php bloginfo( 'name' ); ?>
                    </a>
                </h1>
                <?php 
                $description = get_bloginfo( 'description' );
                if ( $description ) {
                    echo '<p class="site-description">' . esc_html( $description ) . '</p>';
                }
                ?>
            </div>
            <nav class="site-navigation" role="navigation">
                <?php 
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'fallback_cb'    => 'wp_page_menu',
                    'container'      => false,
                    'depth'          => 2
                ) );
                ?>
            </nav>
        </div>
    </header>
    <main class="site-main" id="main" role="main">
