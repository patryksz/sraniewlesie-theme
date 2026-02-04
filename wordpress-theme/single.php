<?php
/**
 * Single Post Template
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
                    <div class="entry-meta">
                        <span class="posted-on">
                            <?php _e( 'Posted on', 'stranie-w-lesie' ); ?>
                            <a href="<?php echo esc_url( get_the_permalink() ); ?>">
                                <time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
                                    <?php echo esc_html( get_the_date() ); ?>
                                </time>
                            </a>
                        </span>
                        <span class="byline">
                            <?php _e( 'by', 'stranie-w-lesie' ); ?>
                            <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
                                <?php echo esc_html( get_the_author() ); ?>
                            </a>
                        </span>
                    </div>
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
                    <?php
                    wp_link_pages( array(
                        'before' => '<div class="page-links">' . __( 'Pages:', 'stranie-w-lesie' ),
                        'after'  => '</div>'
                    ) );
                    ?>
                </div>
                <footer class="entry-footer">
                    <?php edit_post_link( __( 'Edit this post', 'stranie-w-lesie' ), '<span class="edit-link">', '</span>' ); ?>
                </footer>
            </article>
            <?php
            // Comments template
            if ( comments_open() || get_comments_number() ) {
                comments_template();
            }
        }
    }
    ?>
</div>

<?php get_footer(); ?>
