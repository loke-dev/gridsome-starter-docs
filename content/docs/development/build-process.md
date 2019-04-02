---
title: "Build process"
description: "See how the build process works and how Maizzle builds your emails"
---

# Build process

When you run `maizzle build`, your Nunjucks templates go through a series of events that compile them down to plain HTML, and apply various, email-specific transformations.

To get a better understanding of how Maizzle builds your emails, here's a step-by-step guide of what's going on under the hood:

## 1. Nunjucks init

The templating engine is initialized. This is also where we configure [Nunjucks](https://mozilla.github.io/nunjucks/) to support Markdown and custom tags, like `{% component %}`.

## 2. Get the configuration

If you specified an [environment](/docs/environments/) name, i.e. `maizzle build staging`, your `config.staging.js` is merged on top of the base `config.js`. 

Otherwise, running `maizzle build` simply uses the base `config.js` file.

## 3. Compile Tailwind CSS

Tailwind CSS is compiled, based on the (merged) config above. Various [PostCSS](https://postcss.org/) plugins are enabled depending on the build environment and your config.

When _not_ developing locally, PurgeCSS is used to remove any unused classes from the compiled CSS. It scans all your layouts/templates/partials/components, and any other, custom sources you specify, and removes any unused classes from the compiled CSS that will be passed to the final template.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">
    Yes, <code class="shiki-inline">email-comb</code> can also remove unused CSS. But in order to speed things up it's best to feed it as little CSS as possible.
  </div>
</div>

## 4. Copy sources to output dir

Your source templates and assets are copied to the destination directory defined in your config. This is so that we can then process them in place. 

At this point, if you're developing locally with `maizzle build` or `maizzle serve` (both of which use the base `config.js`), the compiled Tailwind CSS is output to a file in your destination directory - it helps with class autocompletion in some editors.

## 5. Compile and output templates

Each template is parsed and compiled in place, in your destination directory:

1. Maizzle reads the Template file

2. It then extracts its Front Matter (FM)

3. A unique Template config is computed by merging the Template's Front Matter keys with the environment config

4. The Markdown renderer is configured for the Template being parsed, based on the Template config that was just computed

5. Nunjucks renders the Template
    - a default Layout is used, if you haven't specified any
    - the compiled Tailwind CSS and all config options are sent to the Template as variables that you can use

6. [posthtml-content](https://github.com/posthtml/posthtml-content) looks for any `<style tailwind>` tag in the Template. If it finds any, it tries to compile the contents with Tailwind CSS. Useful if you need to use Tailwind CSS inside a style block right in your Template.

7. The compiled HTML is now passed on to a series of Transformers. 

  The order of events is exactly as follows, and they all happen (or not) depending on how you've configured them in your env config or in the Template's FM:

    - [Juice](https://github.com/Automattic/juice) is used to inline CSS
    - [email-comb](https://www.npmjs.com/package/email-comb) is used to remove any unused CSS
    - inline CSS sizes are removed (`width=""` and `height=""` are preserved)
    - inline background colors are removed (`bgcolor=""` is preserved)
    - configured extra attributes are added to tags
    - `baseImageURL` is prepended to both inline and background image paths
    - [pretty](https://www.npmjs.com/package/pretty) is used to prettify your code
    - [html-minifier](https://www.npmjs.com/package/html-minifier) minifies HTML/CSS, and removes empty attributes
    - ensure six digit HEX color codes (see [package](https://www.npmjs.com/package/color-shorthand-hex-to-six-digit))
    - append any `urlParameters` to links

8. Finally, the file is saved at the [configured location](/docs/build-paths/#destination), with the configured extension.
