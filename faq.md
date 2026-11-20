---
layout: default
title: Frequently asked questions
permalink: /faq/
lead: Quick answers to common questions about Forma.
---

## Setup

### Which nopCommerce versions does Forma support?

nopCommerce 5.00.x. See [Getting started]({{ '/getting-started/' | relative_url }}).

### I uploaded the package but Forma isn't in the theme list.

Click **Restart application** after uploading, install **Forma theme core** under **Configuration → Local plugins**, restart again, then select **Forma** under **Configuration → Settings → General settings → Store theme**.

### Why doesn't my store look like the demo?

The [live demo]({{ site.demo_url }}) uses its own products, pictures, menu and home page sections. Set up your [main menu]({{ '/header-and-menu/' | relative_url }}) and [home page sections]({{ '/home-page/' | relative_url }}) with your own content.

## Header and menu

### My menu changes don't show on the storefront.

Forma shows the **first published** main menu. A store installed with sample data has two: *Categories* (published) and *Menu* (unpublished). Publish the menu you edit and unpublish the other one. See [The main menu]({{ '/header-and-menu/#the-main-menu' | relative_url }}).

### My category item opens a dropdown, not a mega menu.

Set its **Template** to **Grid** and remove its child menu items. When an item has child menu items, nopCommerce shows them as a dropdown. See [Mega menu]({{ '/header-and-menu/#mega-menu' | relative_url }}).

### Where did some of my menu items go?

On wide screens, items that don't fit on one row move into the **More** dropdown at the end of the menu.

## Home page

### I see the nopCommerce home page blocks under Forma's sections.

Tick **Replace the nopCommerce home page blocks** on the home sections page and click **Save**.

### A slider still shows under Forma's sections.

That's the **Swiper** widget from the nopCommerce sample data. Turn it off in **Configuration → Widgets**.

### The newsletter section shows text but no form.

Your store asks for a captcha to subscribe. The section then shows its text only, and the footer newsletter box takes subscriptions.

## Product cards

### Cards don't change picture on hover.

The hover picture is the product's second picture. Add a second picture to the product.

### The quick view button doesn't show on my phone.

Card buttons show on devices with a mouse. On touch screens the card opens the product page.

## Design

### Can I stop the store from loading Google Fonts?

Yes. Untick **Load fonts from Google Fonts** in the [Typography]({{ '/look-and-feel/#typography' | relative_url }}) settings.

### I applied a preset and lost my colors.

Applying a preset replaces fonts, buttons, layout and every color scheme. Set your colors again under **Color schemes**, or apply the preset you used before and adjust it.
