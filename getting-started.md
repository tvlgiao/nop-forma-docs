---
layout: default
title: Getting started
permalink: /getting-started/
lead: Install Forma from the ZIP package and make it your store's theme.
---

## Requirements

- nopCommerce **5.00.x**.
- One package works for every store of a multi-store installation.

## Install the package

1. In the admin area, go to **Configuration → Local plugins** and click **Upload plugin or theme**. Choose the package `Forma-nopCommerce-5.00-v….zip`. Don't unzip it first.
2. Click **Restart application** at the top of the page, or restart the site. The plugin appears in the list as **Forma theme core**.
3. Click **Install** next to *Forma theme core*, then restart the application again.

<div class="callout">
<p>Installing the plugin adds the Forma widget to the <em>Widgets</em> list. Leave it active: it renders Forma's design settings and the home page sections.</p>
</div>

## Choose the theme

1. Go to **Configuration → Settings → General settings**.
2. Under *Store theme*, select **Forma**.
3. Click **Save**.

Open your store: it now uses Forma, with a starting home page (hero, featured products, categories).

## Update to a new version

nopCommerce does not upload a theme over one that is already there ("A theme with 'Forma' system name is already defined"), so an update replaces the files instead. Your settings, presets and home page sections are kept: they live in the database.

1. Back up the site folder and the database.
2. Stop the site (in IIS, stop the site or its application pool; elsewhere, stop the service or container).
3. Delete the folders `Themes/Forma` and `Plugins/Misc.FormaCore`, then copy the same two folders from the new package in their place.
4. Start the site. On its first start the plugin updates its texts; the first page loads take a few seconds longer while nopCommerce makes the new picture sizes.

<div class="callout">
<p>Do not uninstall <em>Forma theme core</em> to update it: uninstalling deletes its settings and home sections.</p>
</div>

## Next steps

- Pick a preset and set your fonts and colors: [Look and feel]({{ '/look-and-feel/' | relative_url }}).
- Set up the main menu and the mega menu: [Header and menu]({{ '/header-and-menu/' | relative_url }}).
- Build your home page: [Home page sections]({{ '/home-page/' | relative_url }}).

The plugin stores its settings per store. If you run more than one store, see [Multi-store]({{ '/multi-store/' | relative_url }}).
