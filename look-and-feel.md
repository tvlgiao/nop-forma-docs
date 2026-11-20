---
layout: default
title: Look and feel
permalink: /look-and-feel/
lead: Set Forma's presets, fonts, page width, buttons and color schemes, without code.
---

All of these settings are on one page: **Configuration → Local plugins → Forma theme core → Configure**.

{% include figure.html src="admin-configure" alt="The Forma theme core configuration page in the nopCommerce admin, with the Presets panel at the top" caption="The Forma theme core settings page." eager=true %}

Changes show on the storefront as soon as you click **Save**.

## Presets

A preset is a complete look in one click: fonts, buttons, layout and every color scheme. Forma has four presets: **Atelier**, **Living**, **Luma** and **Noble**.

1. Under **Presets**, choose a preset.
2. Click **Apply preset**.

<div class="callout callout--warn">
<p>Applying a preset replaces your fonts, buttons, layout and every color scheme with the preset's values. Note any values you want to keep before you apply one.</p>
</div>

## Typography

| Setting | What it does |
| --- | --- |
| Heading font | Font family for headings, from the Google Fonts list. |
| Body font | Font family for body text. |
| Load fonts from Google Fonts | Untick it when the store must not contact Google (GDPR) or you self-host the fonts. Pages then use the fonts' system fallbacks. |
| Heading size scale (%) | Makes every heading larger or smaller, from 80 to 150. |
| Heading letter spacing | In hundredths of an em, from -5 to 10. |
| Body line height | From 1.0 to 2.4. |

## Layout

| Setting | What it does |
| --- | --- |
| Page width | The maximum content width, in rem or px, for example `90rem` or `1320px`. |
| Page margin (px) | The minimum space at the page edges, from 0 to 80. |

## Buttons

| Setting | What it does |
| --- | --- |
| Button corner radius (px) | 0 gives square buttons; 40 or more gives pill buttons. |
| Button vertical padding (px) | From 0 to 40. |
| Button horizontal padding (px) | From 0 to 80. |
| Button font size | `sm`, `base` or `md`. |
| Uppercase buttons | Shows button labels in capitals. |
| Button letter spacing | In hundredths of an em, from 0 to 30. |

## Color schemes

Forma has six color schemes. Each scheme has these colors:

- Background
- Surface
- Text
- Secondary text
- Border
- Accent and Accent hover
- Button, Button text and Outline button

Colors are hex values, such as `#1a1a1a`.

**Default color scheme** is the scheme that colors the header, the footer and every page outside the home page sections. Each [home page section]({{ '/home-page/' | relative_url }}) picks its own scheme.
