<?php

// Plugin Name: React Category Plugin

defined('ABSPATH') || die();


// Registers a shortcode that simply displays a placeholder for our React App.

function react_map_plugin()
{
    wp_enqueue_script('react_map_plugin', plugins_url('build/index.js', __FILE__), array('wp-element'), time(), true);
    return '<section id="app" class="pt-42px pb-36px pl-ls-42px overflow-ls-hidden overflow-md-hidden pl-ls-lg-0 pt-xl-66px pb-lg-66px mw-1440px mx-xl-auto w-100">
    ';
}

add_shortcode('react_map_plugin', 'react_map_plugin');
