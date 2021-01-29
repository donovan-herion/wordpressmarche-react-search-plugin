<?php

defined('ABSPATH') || die();

function registering_react_search_plugin()
{

    wp_enqueue_script('react_search_plugin', plugins_url('build/index.js', __FILE__), ['wp-element'], time(), true);
}


add_action('wp_enqueue_scripts', 'registering_react_search_plugin');
