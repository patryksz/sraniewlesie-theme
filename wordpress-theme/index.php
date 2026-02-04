<?php
/**
 * Index Template - Fallback
 */
get_header();
?>

<div class="content-area">
    <?php
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="<?php echo esc_url( get_the_permalink() ); ?>">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                </header>
                <div class="entry-content">
                    <?php the_excerpt(); ?>
                </div>
            </article>
            <?php
        }
    } else {
        ?>
        <p><?php _e( 'No content found.', 'stranie-w-lesie' ); ?></p>
        <?php
    }
    ?>
</div>

<?php get_footer(); ?>
