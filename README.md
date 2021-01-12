!!!! this stylesheet has to be enqueued somewhere I put it in the header at the moment which isn't the best option

```bash
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
```

# React Map Plugin

This plugin provides a map with its filters that runs on a single page.

## Installation

Clone this repo into the mu-plugins folder of your wordpress configuration.

```bash
git clone git@github.com:donovan-herion/wordpressmarche-react-map-plugin.git
```

Install all required packages by running the following command

```bash
npm install
```

call the plugin in the load.php file so that it runs on the wordpress site by default.

```bash
require_once WPMU_PLUGIN_DIR . '/react-map-plugin/react-map-plugin.php';
```

## Usage

```php
get_header();

echo do_shortcode('[react_map_plugin]');

get_footer();
```
