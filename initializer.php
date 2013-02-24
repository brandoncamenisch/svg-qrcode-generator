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
  }

  public function loader() {
    #define constants
    define('QRLICIOUS_SVGQRCODE_PATH', plugin_dir_path(__FILE__));
    define('QRLICIOUS_SVGQRCODE_URL', plugin_dir_url(__FILE__));
  }

  public function load_scripts() {
    #load scripts
  }

  public function load_styles() {
    #load styles
  }

} #END SVGQRcode CLASS