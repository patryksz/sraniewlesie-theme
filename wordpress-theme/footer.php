<?php
/**
 * Footer Template
 */
?>
    </main><!-- .site-main -->
    <footer class="site-footer" role="contentinfo">
        <div class="footer-content">
            <div class="footer-widgets">
                <?php
                if ( is_active_sidebar( 'footer-widgets' ) ) {
                    dynamic_sidebar( 'footer-widgets' );
                }
                ?>
            </div>
            <div class="footer-info">
                <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php _e( 'All rights reserved.', 'stranie-w-lesie' ); ?></p>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
