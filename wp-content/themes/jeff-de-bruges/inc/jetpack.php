<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package jeff-de-bruges
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function jeff_de_bruges_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'jeff_de_bruges_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function jeff_de_bruges_jetpack_setup
add_action( 'after_setup_theme', 'jeff_de_bruges_jetpack_setup' );

function jeff_de_bruges_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function jeff_de_bruges_infinite_scroll_render