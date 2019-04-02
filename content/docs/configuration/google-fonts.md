---
title: "Google Fonts"
description: "Easily import and use Google Fonts in your HTML email templates"
---

# Google Fonts

Maizzle supports Google Fonts out-of-the-box, and it's very easy to use. 

When checking Google's embed instructions for your font selection, simply copy and use the bold part after `?family=`. Then, register the Tailwind CSS utility.

For example, let's pull in Merriweather, and Open Sans with some custom weights:

```js
// config.js
module.exports = {
  googleFonts: 'Merriweather|Open+Sans:300,400,700',
  // ...
}
```

Adding them to the config will make them available globally, to all Templates.

## Front Matter

Use `googleFonts` in Front Matter, to pull in Google Fonts _only for this template_:

```handlebars
---
googleFonts: "Roboto|Hind+Madurai&amp;subset=latin-ext"
---

{% block template %}
  ...
{% endblock %}
```

## Tailwind CSS utility

The `googleFonts` option only inserts the `<link>` tag, as you can see in the Starter:

```handlebars
{% if page.googleFonts %}<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family={{ page.googleFonts }}" rel="stylesheet"><!--<![endif]-->{%- endif %}
```

You still need to register the utilities in your `tailwind.config.js`.

For example, let's register an utility for Open Sans:

```js
// tailwind.config.js

fonts: {
  'open-sans': [
    '"Open Sans"',
    '-apple-system',
    '"Segoe UI"',
    'sans-serif',
  ],
  // ...
},
// ...
```

_Now_ we can use the `font-open-sans` utility class.

## Use in your template

Email clients that support web fonts don't require the `font-family` CSS to be inlined in your HTML. Therefore, we can make use of the `all` breakpoint and tuck the class inside a `@media screen {}` query. 

This way, Juice doesn't inline it, and we also shave off some bytes 😎

For example:

```html
<h1 class="all-font-open-sans">Headline text</h1>
```

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">For this to work, Maizzle sets <code class="shiki-inline">fontFamily: ['responsive']</code>, in your <code class="shiki-inline">tailwind.config.js</code>.</div>
</div>

