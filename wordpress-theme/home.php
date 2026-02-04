<?php
/**
 * Home/Front Page Template
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
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
            </article>
            <?php
        }
    } else {
        ?>
        <article>
            <header class="entry-header">
                <h1 class="entry-title"><?php _e( 'Nothing Found', 'stranie-w-lesie' ); ?></h1>
            </header>
            <div class="entry-content">
                <p><?php _e( 'Sorry, no content found.', 'stranie-w-lesie' ); ?></p>
            </div>
        </article>
        <?php
    }
    ?>
</div>

<?php get_footer(); ?>
