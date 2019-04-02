---
title: "Tailwind CSS Config"
slug: tailwindcss-config
description: "Tailwind CSS email-tailored configuration in Maizzle"
---

# Tailwind CSS Config

Maizzle comes with an email-tailored Tailwind CSS config.

## Spacing units

Because they are poorly supported in email, `rem` units have been replaced with `px` ones, with values better suited for email client viewports.

## !important

The `important` option needs to be `true`, in order for the responsive utilities to actually override inlined CSS.

```js
// tailwind.config.js
module.exports = {
  important: true,
  // ...
}
```

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">When Juice inlines it, CSS will not contain <code class="shiki-inline">!important</code></div>
</div>

### amp4email

⚡4email doesn't support inline CSS, so there's no reason to enable `!important`.

Use the [`tailwind.config`](/docs/build-paths/#tailwind) option to define a path to a _custom_ Tailwind CSS config file, where you disable the option:

```js
// config.amp.js
build : {
  tailwind: {
    css: 'src/assets/css/main.css',
    config: 'tailwind.amp.js',
  },
},

// tailwind.amp.js
module.exports = {
  important: false,
  // ...
}
```

## Separator

Separators like `:` in `hover:bg-black` or `/` in `w-1/2` need to be escaped in CSS. Unfortunately, some email clients - Gmail, most notably - fail to parse selectors with escaped characters.

Therefore, both `:` and `/` have been replaced with `-` in Maizzle.

```js
// tailwind.config.js
module.exports = {
  separator: '-',
  // ...
}
```

## Screens

A custom set of `@media` query breakpoints is defined.

Maizzle uses a desktop-first approach with `max-width`, instead of Tailwind's default mobile-first with `min-width`. Of course, you're free to adjust these as you like:

```js
screens: {
  all: {'raw': 'screen'},
  xs: {'max': '480px'},
  sm: {'max': '600px'},
},
```

- **all** 
  
  This creates an `@media screen {}` query. All its utility classes are prefixed with `all-` - you can use it for things like: 
    
    - defining (web) font stacks for modern email clients 
    - preventing Juice from inlining a utility class

- **xs** 
  
  Most smartphone viewports currently fit within this breakpoint.

- **sm** 

  Breakpoint to mark the most common email width boundary.

More on screens, in the [Tailwind CSS docs &nearr;](https://tailwindcss.com/docs/responsive-design)

## Plugins

Currently, Maizzle ships with just one plugin - [tailwindcss-gradients](https://www.npmjs.com/package/tailwindcss-gradients).
You can configure it in the `plugins` key in your Tailwind config:

```js
plugins: [
  require('tailwindcss-gradients')({
    variants: ['responsive'],
    directions: {
      't': 'to top',
      'tr': 'to top right',
      'r': 'to right',
      'br': 'to bottom right',
      'b': 'to bottom',
      'bl': 'to bottom left',
      'l': 'to left',
      'tl': 'to top left',
    },
    gradients: { /* [...] */ }
  }),
],
```

Of course, you can add any plugin you want, like [CSS grid](https://www.npmjs.com/package/tailwindcss-grid) or [border image gradients](https://www.npmjs.com/package/tailwindcss-border-gradients).
