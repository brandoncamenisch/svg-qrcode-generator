<?php
/*
Plugin Name: SVG QRCODE Generator
Plugin URI: http://brandoncamenisch.com
Description: Creates an SVG QRCODE
Version: 1.0
Author: Brandon Camenisch
Author URI: http://brandoncamenisch.com/
License: GPLv2 or later
*/
namespace WPSE\svgqrcode;

new SVGQRcode;

class SVGQRcode {

  #Construct
  function __construct() {
    add_action( 'init', array($this, 'loader') );
    add_action( 'wp_enqueue_scripts', array($this,'load_scripts') );
    add_shortcode( 'qrcode_generator', array($this, 'shortcode') );
  }

  public function loader() {
    #define constants
    define('QRLICIOUS_SVGQRCODE_PATH', plugin_dir_path(__FILE__));
    define('QRLICIOUS_SVGQRCODE_URL', plugin_dir_url(__FILE__));
  }

  public function load_scripts() {
  	wp_enqueue_script( 'jquery' );
    global $pagenow, $typenow;

		if ( is_page('free-qrcode-generator' ) ){
    	wp_register_script( 'qrlicious_raphael', plugins_url('/lib/raphael/raphael-min.js', __FILE__) );
    	wp_enqueue_script( 'qrlicious_raphael' );

    	#qrcode script
    	wp_register_script( 'qrlicious_qrcode_svg', plugins_url('/scripts/qrcodesvg.js', __FILE__) );
    	wp_enqueue_script( 'qrlicious_qrcode_svg' );

    	#custom script
    	wp_register_script( 'qrlicious_qrcode_custom', plugins_url('/scripts/custom.js', __FILE__) );
    	wp_enqueue_script( 'qrlicious_qrcode_custom' );

    	#setup vars
		}
  }

  public function load_styles() {
    #load styles
  }

	public function shortcode() {
  	include QRLICIOUS_SVGQRCODE_PATH.'test.html';
  }


} #END SVGQRcode CLASS