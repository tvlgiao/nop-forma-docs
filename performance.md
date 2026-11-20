---
layout: default
title: Performance tips
permalink: /performance/
lead: A few settings that keep a Forma store fast.
---

## Turn on bundling on a live store

In `App_Data/appsettings.json`, under `WebOptimizer`, set `EnableJavaScriptBundling` and `EnableCssBundling` to `true`, then restart the application.

## Upload large hero pictures

Upload hero slide pictures at least 2000 pixels wide. Forma serves smaller sizes to phones.

## Turn off the Share button if you don't need it

The product page *Share* button (ShareThis) sets third-party cookies. If you don't need it, untick **Show a share button** under **Configuration → Settings → Catalog settings**.

## Fonts

Forma loads its fonts from Google Fonts. If the store must not contact Google, untick **Load fonts from Google Fonts** on the Forma settings page; pages then use the fonts' system fallbacks. See [Typography]({{ '/look-and-feel/#typography' | relative_url }}).
