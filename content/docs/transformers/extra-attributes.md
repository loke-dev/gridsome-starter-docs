---
title: "Extra Attributes"
description: "Automatically add attributes to your HTML emails. Write less code and easily improve accessibility."
---

# Extra Attributes

Maizzle can automatically add attributes to HTML elements in your email templates.

This can be useful for:

- adding default attributes based on environment or Template
- not having to write required attributes all the time
- automating email accessiblity

The `applyExtraAttributes` key in your config defines which elements in your emails should receive which attributes with what values:

```js
// config.js
module.exports = {
  applyExtraAttributes: {
    table: {
      cellpadding: 0,
      cellspacing: 0,
      role: 'presentation',
    },
    img: {
      alt: ''
    }
  },
  // ...
}
```

By default, Maizzle makes your `<table>` accessible, resets its spacing, and ensures that an empty `alt=""` attribute is added to images that don't have it.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Attributes will be added only if they're not already present on the element.</div>
</div>

## Cheerio selectors

Elements that you define here can also be [cheerio](https://github.com/cheeriojs/cheerio) selectors.

For example, let's add a default width to all our wrapper tables:

```js
applyExtraAttributes: {
  'table.wrapper': {
    width: 600
  }
  // ...
},
```

## CSS classes

You can use this to automatically add CSS classes to elements:

```js
applyExtraAttributes: {
  'div.hero': {
    class: 'custom-class'
  }
  // ...
},
```

### Tailwind CSS note

Because Transformers process your HTML _after_ CSS is compiled, **you cannot use any Tailwind CSS classes here**. That means any class from the compiled `main.css`.

You _will_ see them added to the element's `class=""`, but they won't exist anywhere else in the Template. Therefore, adding classes like this can only be useful if you need them at a later stage in your workflow, like in your <abbr title="Email Service Provider">ESP</abbr>.

