---
layout: default
title: Product cards and product page
permalink: /product-page/
lead: What Forma adds to product cards, the product page and the cart. None of it needs a setting.
---

## Category pages

Category pages show products as a grid or a list. Shoppers switch with the buttons above the products.

<div class="shots">
{% include figure.html src="category-grid" alt="The Living Room category page in grid view: a category sidebar and four product cards" caption="Grid view." eager=true %}
{% include figure.html src="category-list" alt="The Living Room category page in list view: one product per row with its price and buttons" caption="List view." %}
</div>

## Product cards

### Second picture on hover

Cards show a product's second picture when the pointer is over the card, for every product that has at least two pictures. No setting is needed: add a second picture to the product.

### Quick view and quick add

On devices with a mouse, buttons appear on the card's picture on hover:

- **Add to cart**, unless the product's buy button is disabled;
- **Quick view**: opens the product in a window, with its pictures, price and *Add to cart*;
- **Add to wishlist** and **Add to compare list**, when those features are on in your store.

On touch screens these buttons are hidden and the card links to the product page. In list view the buttons are always shown.

{% include figure.html src="card-hover" alt="Product cards on a category page; the first card shows its second picture and the Add to cart, Quick view, wishlist and compare buttons" caption="The first card on hover: its second picture and the card buttons." %}

{% include figure.html src="quick-view" alt="The quick view window for the Arlo Three-Seat Sofa, with pictures, price, quantity and an Add to cart button" caption="Quick view." %}

## Product page

{% include figure.html src="product" alt="The Wren Dining Chair product page: picture gallery on the left, name, price and Add to cart on the right" caption="A product page." %}

### Sticky add to cart

On phones, a bar with the product name, the price and an **Add to cart** button stays at the bottom of the product page while the page's own *Add to cart* button is scrolled out of view.

{% include figure.html src="sticky-add-to-cart" alt="A product page on a phone, scrolled down, with a bar at the bottom showing Wren Dining Chair, $310.00 and Add to cart" caption="The sticky add to cart bar on a phone." mobile=true %}

## Cart drawer

After *Add to cart*, the **cart drawer** opens with the cart contents. Shoppers can change quantities, remove items, go to checkout or open the cart page. The cart icon in the header opens the drawer too.

{% include figure.html src="cart-drawer" alt="The cart drawer open on the right of a product page: one item with quantity buttons, the subtotal, a Checkout button and a Go to cart link" caption="The cart drawer." %}
