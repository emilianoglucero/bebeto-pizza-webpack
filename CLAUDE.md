# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Multi-page net-art website (lohaemosporbebeto.pizza) built with webpack 5. Started from the `webpack-multipage-example` template (the package.json name/repo fields still reflect that). No tests and no linter are configured.

## Commands

- `npm run dev` — dev server with HMR (`webpack serve --open --config webpack.dev.js`)
- `npm run build` — production build to `dist/` (`webpack --config webpack.prod.js`)
- `npm run clean` — remove `dist/`

## Architecture

All build wiring lives in `webpack.common.js`; `webpack.dev.js` / `webpack.prod.js` are thin `webpack-merge` overlays (dev adds devServer + inline source maps, prod just sets mode/source-map).

Each page is a directory under `src/pages/<name>/` and is defined by up to four coordinated pieces in `webpack.common.js`:

1. An `entry` chunk (e.g. `dibuja: "./src/pages/dibuja/dibuja.js"`). These entry files are mostly thin — many only import CSS. They exist so webpack emits a bundle and MiniCssExtractPlugin emits the page's CSS.
2. An `HtmlWebpackPlugin` instance mapping `src/pages/<name>/<name>.html` → `dist/<name>.html` with `chunks: [<name>]`. (`screenshots` uses an `.ejs` template with `inject: false`.)
3. An `HtmlWebpackDeployPlugin` instance that copies the page's *legacy* scripts verbatim and injects `<script>` tags for them. This is where the real page logic usually lives — p5.js sketches (maradona, dibuja), a Phaser game (zarandraca), or prebuilt React bundles with hashed filenames (compraventa, nuncasepuedehacermasrapido). These scripts bypass Babel and bundling entirely; they are copied as-is.
4. A `CopyWebpackPlugin` pattern for the page's static assets (only some pages have one; note compraventa's assets copy to `dist/assets`, not `dist/compraventa/assets`).

When adding or modifying a page, keep those pieces in sync — a script that exists on disk but isn't listed in the deploy plugin will not reach `dist/` or the HTML.

Other things to know:

- **Prebuilt React apps**: `compraventa` and `nuncasepuedehacermasrapido` embed React builds committed under `static/js/` with content-hashed filenames (e.g. `main.988f776f.js`). Those exact filenames are hardcoded in `webpack.common.js`; rebuilding those apps means updating the hashes there too.
- **Unwired pages**: `src/pages/poesia/`, `ar/`, `sshml/`, and `test/` have no entry/plugin wiring and are not part of the build output.
- **Vendored libraries**: jQuery, jquery-ui, and p5.js live in `src/lib/` and are injected as plain script tags (via HtmlWebpackDeployPlugin or hardcoded in HTML), not imported as modules.
- **Shared CSS**: global stylesheets live in `src/css/` (`main.css`, `main2.css`… plus `cssshake/`); page entries import them alongside their page-local CSS.
- **PHP remnants**: `upload.php`, `Conexion.php`, etc. under `src/pages/dibuja/` and `src/pages/zarandraca/` are leftovers from a previous PHP hosting setup and are not part of the webpack build.
- **Deployment**: hosted on Vercel (`.vercel` is gitignored). `.env.local` holds `MONGODB_URI`. Some remote assets (OG images) are served from Google Cloud Storage.
