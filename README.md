# Forma for nopCommerce: documentation

Public documentation for Forma, the nopCommerce 5.00 theme by PapaThemes, served by GitHub Pages at
<https://nop-forma.papathemes.com>.

It is a plain Jekyll site. GitHub Pages builds it from the `main` branch root; no Actions workflow is needed.

## Edit content

- Pages are Markdown files in the repository root (`getting-started.md`, `home-page.md`, …).
- The sidebar menu is `_data/nav.yml`.
- Layout and styles: `_layouts/default.html`, `assets/css/site.css`.
- Admin labels must match the Forma theme core plugin's resource strings and nopCommerce's own admin labels exactly.
  Write in American English.

## Screenshots

Screenshots are JPEG files in `assets/images/`. After adding or replacing one, regenerate the size table that
`_includes/figure.html` reads, so the browser reserves the space before the image loads:

```sh
node scripts/image-sizes.mjs
```

## Site settings (in `_config.yml`)

| Key | What it does |
| --- | --- |
| `demo_url` | The live demo store, linked in the header, footer and pages. |
| `contact_url` | The PapaThemes contact page, linked from the header, footer, /support/ and the 404 page. |
| `theme_version` | The version shown in the footer. |

## Custom domain (DNS)

GitHub Pages serves this repository at `nop-forma.papathemes.com` (see `CNAME`). In the DNS for `papathemes.com`, add:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `nop-forma` | `tvlgiao.github.io` |

When the record resolves and GitHub has issued the certificate, turn on **Settings > Pages > Enforce HTTPS**.

## Build locally (optional)

```sh
gem install jekyll -v 3.10.0
gem install kramdown-parser-gfm webrick
jekyll serve
```

Then open http://localhost:4000.
