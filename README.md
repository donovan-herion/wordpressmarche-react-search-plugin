# React Search Plugin

This plugin provides an autocompletion that displays keywords in the searchbar.

## Installation

Clone this repo into the mu-plugins folder of your wordpress configuration.

```bash
git clone git@github.com:donovan-herion/wordpressmarche-search-map-plugin.git
```

Install all required packages by running the following command

```bash
npm install
```

call the plugin in the load.php file so that it runs on the wordpress site by default.

```bash
require_once WPMU_PLUGIN_DIR . '/react-search-plugin/react-search-plugin.php';
```
