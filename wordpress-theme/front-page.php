<?php
/**
 * Front Page Template
 */
get_header();
?>

<div class="content-area">
    <div class="hero-section">
        <?php
        if ( has_post_thumbnail() ) {
            echo '<div class="hero-image">';
            the_post_thumbnail( 'full' );
            echo '</div>';
        }
        ?>
    </div>

    <?php
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
            <?php
        }
    }
    ?>
</div>

<?php get_footer(); ?>
