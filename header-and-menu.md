---
layout: default
title: Header and menu
permalink: /header-and-menu/
lead: Forma's header menu is nopCommerce's own main menu. Add a mega menu, and let long menus fold into More.
---

{% include figure.html src="mega-menu" alt="The Forma header with the Furniture mega menu open: Living room, Dining and Bedroom columns, each with a picture, and a Shop all Furniture link" caption="A mega menu built from the Furniture category and its subcategories." eager=true %}

## The main menu

The header menu is nopCommerce's own menu, under **Content management → Menus** (menu type *Main menu*).

Forma shows the **first published** main menu. A store installed with sample data has two main menus:

- *Categories*: published;
- *Menu*: unpublished.

To use your own menu, publish *Menu* and unpublish *Categories*.

{% include figure.html src="admin-main-menu" alt="Editing the main menu named Menu in the nopCommerce admin: menu type Main menu, Published ticked, and its menu items" caption="A published main menu and its items." %}

### Menu items

- Add categories, pages or links as menu items. *Display order* sets their position.
- A top item with child menu items opens a **dropdown**. When the top item has a link, the dropdown starts with a *View all …* link to it.
- A child item with its own child items opens a second-level list beside the dropdown.

## Mega menu

A mega menu shows a category's subcategories as columns, each with the subcategory's picture.

1. Open your main menu under **Content management → Menus**.
2. Add a menu item of type *Category* (or edit one) for the parent category, for example *Furniture*.
3. Set **Template** to **Grid**.
4. Don't add child menu items to it.
5. Save.

{% include figure.html src="admin-menu-item-grid" alt="Editing a category menu item in the nopCommerce admin, with Template set to Grid" caption="A category menu item with the Grid template." %}

In the mega menu:

- each subcategory becomes a column, with its picture;
- the subcategories' own subcategories are listed under each column;
- a *Shop all …* link at the bottom opens the parent category;
- **Number of elements per row** on the menu item sets how many columns a row holds (up to 6).

<div class="callout">
<p>When the item has child menu items, nopCommerce shows them as a dropdown instead of a mega menu. Remove the child items to get the mega menu.</p>
</div>

## The More menu

On screens 1024 px wide and up, the menu stays on one row. Top items that don't fit move into a **More** dropdown at the end of the menu. Nothing needs to be set: Forma checks again when the window is resized.

## On phones

On phones the same menu opens in a side drawer from the menu button.

{% include figure.html src="mobile-menu" alt="The Forma menu drawer open on a phone, listing the main menu items" caption="The menu drawer on a phone." mobile=true %}

## Search

When product search is on (**Configuration → Settings → Catalog settings → Search enabled**), the search icon in the header opens a search dialog. It uses nopCommerce's own search box, so search autocomplete works as set in **Catalog settings**.

{% include figure.html src="search" alt="The Forma search dialog open over the home page, with suggestions for the word chair" caption="The search dialog with autocomplete suggestions." %}
