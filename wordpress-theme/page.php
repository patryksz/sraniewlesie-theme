<?php
/**
 * Page Template
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
                <?php
                if ( has_post_thumbnail() ) {
                    echo '<div class="entry-thumbnail">';
                    the_post_thumbnail( 'full' );
                    echo '</div>';
                }
                ?>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
                <footer class="entry-footer">
                    <?php edit_post_link( __( 'Edit this page', 'stranie-w-lesie' ), '<span class="edit-link">', '</span>' ); ?>
                </footer>
            </article>
            <?php
            // Comments template (if enabled)
            if ( comments_open() || get_comments_number() ) {
                comments_template();
            }
        }
    }
    ?>
</div>

<?php get_footer(); ?>
