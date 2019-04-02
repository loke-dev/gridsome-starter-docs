---
title: "Introduction"
description: "Get started with the Maizzle Email Framework"
---

# What is Maizzle?

Maizzle is a framework for HTML email development.

It's powered by [Tailwind CSS](https://tailwindcss.com/) and an email-tailored, custom Node.js build system that enables various transformations necessary for HTML emails.

Unlike MJML or HEML, Maizzle doesn't use any custom tags that expand into email client-friendly, table-based HTML markup.
Instead, you write your own, _real_ HTML that you style with Tailwind's utility classes.

If you're looking for a framework that offers abstractions like `<row>` and `<column>`, Maizzle might not be the right choice for you.

But if you have your own opinions on how an email should be coded and need full control over your markup, then you might want to [give it a try](/docs/installation/) 😉

---

## Build System

The build system in Maizzle is based on what we call _environment configurations_. 

These allow you to define distinct build scenarios for your email workflow.

Each environment is customized through a JavaScript config file, so you can even `require()` packages or programatically set options.

[Nunjucks](https://mozilla.github.io/nunjucks/) is used for the templating language, so you can use data, filters, or partials for your emails. There's even a custom Nunjucks tag for pulling in components and passing them text and custom data. Markdown with <abbr title="GitHub Flavored Markdown">GFM</abbr> is supported, too.

## Tailwind CSS

Maizzle uses the [Tailwind CSS](https://tailwindcss.com/) framework, enabling you to rapidly prototype HTML email templates. There's never been a faster way to style your emails. 

For most of the time, you won't need to write CSS anymore: just add utility classes to your markup. 
When building for a _production_ environment, Maizzle automatically transforms them into inline CSS, depending on your configuration.

A custom, email-tailored `tailwind.config.js` is provided - this adapts or disables some of the default Tailwind CSS settings, for optimal email client support.

Maizzle also uses some PostCSS plugins, enabling various optimizations (like duplicate `@media` query merging), or conveniences such as writing nested CSS, like in Sass 🤙

## BYOHTML

Maizzle doesn't come with abstractions such as `<row>` or `<column>` - you need to write your own HTML tables, rows, and cells.

It might sound terrifying to some, but this way you don't need to worry about component markup being locked into the framework core. 

So you're free to code your emails however you like 💪

_Bring Your Own HTML_ <sup>&trade;</sup>

## Responsiveness

_Responsive_ is a broad term in HTML email development. Because of the lack of standards and the wildly varying CSS support in email clients, there are many techniques that email designers use to code responsive emails.

Since you need to <abbr title="Bring Your Own HTML">BYOHTML</abbr>, Maizzle doesn't have an opinion on how you should code your emails: from _spongy_ to _fluid_ to _responsive_ to _hybrid_, everything is supported, so you're free to use whatever technique you like or need.

Maizzle comes with Tailwind CSS configured for a _desktop-first_ responsive approach, where you define widths and other properties for desktop clients, and then use the breakpoints to override them for mobile clients:

```js
screens: {
  all: {'raw': 'screen'},
  xs: {'max': '480px'},
  sm: {'max': '600px'},
},
```

## Configure It Out!

Maizzle is configured through JavaScript config files.

Besides basic things like "_should inlining be enabled?_" or "_do we minify the HTML?_", you can even pass options to the Markdown renderer, or choose where on your machine the compiled HTML should be output.

Being JavaScript, you can even do advanced things in your config, like pulling data from an API and passing it to a template, or `require()` some NPM package to further transform your markup or data.

Each config file represents a distinct [build environment](/docs/environments/) that can be triggered with its own `maizzle build [env]` command, so you can define settings for as many build scenarios as you need!
