---
title: "Tailwind CSS"
slug: tailwindcss
description: "Learn how to use Tailwind CSS to create HTML email templates with CSS utility classes"
---

# Tailwind CSS

Maizzle uses the [Tailwind CSS](https://tailwindcss.com) framework, so you can rapidly prototype email templates with utility classes instead of having to write inline styles.

For most of the time, you won't be writing CSS anymore 😎

## Structure

CSS files are stored in `src/assets/css`, and are imported into `main.css`.

### main.css

The `src/assets/css/main.css` file imports Tailwind's utilities and components, and our custom, email-specific resets, components, and utilities.

This is the file Maizzle looks for when compiling Tailwind CSS, and you can configure where it lives and how it's named:

```js
// config.js
module.exports = {
  build: {
    tailwind: {
      css: 'src/assets/css/main.css',
      // ...
    }
    // ...
  }
  // ...
}
```

### Custom CSS Files

Add custom CSS files anywhere under `src/assets/css`.

Maizzle adds the following ones in `src/assets/css/custom` :

- `reset.css`

  This contains browser and email client CSS resets.

- `utilities.css`

  Add here any custom utility classes that Tailwind CSS doesn't provide.

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Files that you <code class="shiki-inline">@import</code> in <code class="shiki-inline">main.css</code> must be relative to <code class="shiki-inline">src/assets/css</code>. This is required for <code class="shiki-inline">postcss-import</code> to work.</div>
</div>

### Plugins

To use a Tailwind CSS plugin, simply `npm install` it and follow its instructions to add it to your `tailwind.config.js`.
Maizzle currently includes the [tailwindcss-gradients](https://www.npmjs.com/package/tailwindcss-gradients) plugin, for CSS `background-image` gradients.


## CSS purging

When running `maizzle build [env]`, if `[env]` is specified and is not set to `local`, Maizzle will use [postcss-purgecss](https://github.com/FullHuman/postcss-purgecss) to remove any unused classes from the CSS that is being injected into the template currently being rendered.

This is needed so that the CSS inliner and `email-comb` (which run _after_ the purging step) receive as little CSS as possible to parse. 

_It greatly improves build speed._

To make sure the Tailwind CSS classes that you use in your emails are not purged, pass layouts and any partials or components directory paths to the `purgeCSS.content` config key, as an array of file globs:

```js
// config.js
module.exports = {
  cleanup: {
    purgeCSS: {
      content: [
        'src/layouts/**/*.*',
        'src/partials/**/*.*',
        'src/components/**/*.*',
      ],
      // ...
    },
    // ...
  }
  // ...
}
```

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Don't pass directory paths here, because PostCSS will fail.</div>
</div>

## Shorthand CSS

Maizzle uses [postcss-merge-longhand](https://github.com/cssnano/cssnano/tree/master/packages/postcss-merge-longhand) to rewrite your CSS `padding`, `margin`, and `border` properties in shorthand-form, when possible.

Because utility classes map one-to-one with CSS properties, this normally doesn't have any effect with Tailwind CSS. However, it's useful when you extract utilities to components, with Tailwind's `@apply`.

Consider this template:

```handlebars
---
title: Confirm your email
preheader: Please verify your email address with us
---

<div class="col">test</div>
```

Let's use `@apply` to compose a `col` class by  extracting two padding utilities: 

```css
/* src/assets/css/custom/components.css */

.col {
  @apply py-8 px-4;
}
```

When building for production, normally that would yield:

```html
<div style="padding-top: 8px; padding-bottom: 8px; padding-left: 4px; padding-right: 4px;">test</div>
```

However, Maizzle will merge those with `postcss-merge-longhand`, so we get this:

```html
<div style="padding: 8px 4px;">test</div>
```

This results in smaller HTML size, reducing the risk of Gmail clipping your email.

As mentioned, this works for `padding`, `margin`, and `border`. Using shorthand CSS for these is well supported in email clients and will make your HTML lighter, but the shorthand border is particularly useful because it's the only way Outlook will render it properly.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">For shorthand CSS to work with <code class="shiki-inline">padding</code> or <code class="shiki-inline">margin</code>, you need to specify property values for all four sides. For borders, keep reading.</div>
</div>

### Shorthand borders

To get shorthand-form CSS borders, you need to specify all these:

- border-width
- border-style
- border-color

With Tailwind's `@apply`, that means you can do something like this:

```css
.my-border {
  @apply border border-solid border-blue-500;
}
```

... which will turn this:

```html
<div class="my-border">Border example</div>
```

... into this:

```html
<div style="border: 1px solid #3490dc;">Border example</div>
```

## Use in Template

You can use Tailwind CSS, including directives like `@apply`, right inside a template.

Use `{% block head %}` to push a `<style tailwind>` tag to the template's `<head>`:

```handlebars
---
title: Using Tailwind CSS directives inside a template
---

{% block head %}
<style tailwind>
  a {
    @apply text-red;
  }
  @screen sm {
    table { 
      @apply w-full;
    }
  }
</style>
{% endblock %}
```

[posthtml-content](https://github.com/posthtml/posthtml-content) is used to parse the contents of any `<style>` tag that has a `tailwind` attribute - the contents are compiled with Tailwind CSS.

### Prevent inlining

Add a `data-embed` attribute to that `<style>` tag, to prevent it from being inlined:

```handlebars
---
title: Preventing in-template embedded CSS from being inlined
---

{% block head %}
<style tailwind data-embed>
  /* This CSS will not be inlined */
  img {
    border: 0;
    @apply leading-full align-middle;
  }
</style>
{% endblock %}
```

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Although it won't be inlined, the CSS will still be subject to <a href="/docs/code-cleanup/#removeunusedcss">cleansing</a>.</div>
</div>
