# Icons

## Icon Fieldtype for Craft CMS

Simple fieldtype which allows you to select font icons ready to use within your templates.

Currently supports:

* Font Awesome (4.4.0)
* Material Icons

## Installation

To install Icons, follow these steps:

1.  Upload the fruiticons/ folder to your craft/plugins/ folder.
2.  Go to Settings > Plugins from your Craft control panel and install the Icons plugin.
3.  Create a new icons fields and get it added to one of your field layouts!

## Usage

Get the icon object, check it and use:

	{% set icon = entry.yourIconFieldHandle %}
	{% if icon %}
	  {{ icon.icon }}
	{% endif %}

Output the full icon tag:

	{{ icon.icon }} = <i class="fa fa-home"></i>

Just output the icon class:

	{{ icon.class }} = fa-home


## Requirements

Craft CMS Version 2.1+
