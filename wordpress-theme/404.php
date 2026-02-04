<?php
/**
 * 404 Page Not Found Template
 */
get_header();
?>

<div class="content-area error-404">
    <header class="entry-header">
        <h1 class="entry-title"><?php _e( '404 - Page Not Found', 'stranie-w-lesie' ); ?></h1>
    </header>
    <div class="entry-content">
        <p><?php _e( 'The page you are looking for could not be found.', 'stranie-w-lesie' ); ?></p>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="button">
            <?php _e( 'Go to homepage', 'stranie-w-lesie' ); ?>
        </a>
    </div>
</div>

<?php get_footer(); ?>
