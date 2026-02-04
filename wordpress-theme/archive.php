<?php
/**
 * Archive Template
 */
get_header();
?>

<div class="content-area archive-area">
    <header class="archive-header">
        <h1 class="archive-title">
            <?php
            if ( is_category() ) {
                _e( 'Category: ', 'stranie-w-lesie' );
                single_cat_title();
            } elseif ( is_tag() ) {
                _e( 'Tag: ', 'stranie-w-lesie' );
                single_tag_title();
            } elseif ( is_author() ) {
                _e( 'Author: ', 'stranie-w-lesie' );
                the_author();
            } elseif ( is_date() ) {
                _e( 'Archives', 'stranie-w-lesie' );
            } else {
                _e( 'Archives', 'stranie-w-lesie' );
            }
            ?>
        </h1>
        <?php
        if ( is_category() || is_tag() ) {
            echo '<div class="archive-description">' . term_description() . '</div>';
        }
        ?>
    </header>

    <?php
    if ( have_posts() ) {
        echo '<div class="posts-grid">';
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
                    <div class="entry-meta">
                        <span class="posted-on">
                            <?php echo esc_html( get_the_date() ); ?>
                        </span>
                    </div>
                </header>
                <?php
                if ( has_post_thumbnail() ) {
                    echo '<div class="entry-thumbnail">';
                    the_post_thumbnail( 'medium' );
                    echo '</div>';
                }
                ?>
                <div class="entry-content">
                    <?php the_excerpt(); ?>
                </div>
            </article>
            <?php
        }
        echo '</div>';
        
        // Pagination
        the_posts_pagination( array(
            'mid_size' => 2,
            'prev_text' => __( '&larr; Previous', 'stranie-w-lesie' ),
            'next_text' => __( 'Next &rarr;', 'stranie-w-lesie' ),
        ) );
    } else {
        ?>
        <p><?php _e( 'No posts found.', 'stranie-w-lesie' ); ?></p>
        <?php
    }
    ?>
</div>

<?php get_footer(); ?>
