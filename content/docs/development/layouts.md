---
title: "Layouts"
description: "See how to use layouts with Nunjucks templating inheritance to build your HTML emails"
---

# Layouts

Layouts are the foundation of any email template in Maizzle.

Use them to define markup that doesn't need to change often, like `doctype`, and `<head>` or `<body>` tags, with all the necessary child tags, like `<meta>`.

## Creating Layouts

Layouts are typically stored in the `src/layouts` directory.

Simply create a `mylayout.njk` file in there, and add a minimal boilerplate with tags to yield the CSS and the Template body:

```html
<!DOCTYPE html>
<html>
<head>
  {% if css %}<style>{{ css }}</style>{% endif %}
</head>
<body>
  {% block template %}{% endblock %}
</body>
``` 

You can use it as a Layout that your Templates can [extend](/docs/templates/#extending-layouts).

## Default Layout

The `build.layout` file path will be used as the default Layout for any Template that does not explicitly [extend a Layout](/docs/templates/#extending-layouts):

```js
// config.js
module.exports = {
  build: {
    layout: 'src/layouts/default.njk', // or master.html, master.email, master.blaster...
    // ...
  }
  // ...
}
```

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">We use the <code class="shiki-inline">.njk</code> file extension for clarity, but you are free to use any extension.</div>
</div>

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">If that Layout file does not exist, rendering will fail and the script will exit.</div>
</div>


### AMP For Email

Maizzle includes an `amp4email.njk` Layout. It's basically the default Layout, with a few tags adapted to the AMP HTML for Email requirements.

Check out the [⚡4email example &rarr;](/docs/amp4email/)

## Template Blocks

A Layout simply pulls in a Nunjucks `{% block %}` named `template`:

```
{% block template %}{% endblock %}
```

It looks for a block with the same name in every template that [extends](/docs/templates/#extends) this layout, inside your [templates directory](/docs/build-paths/#templates).

Read more about blocks, in the [Nunjucks documentation &nearr;](https://mozilla.github.io/nunjucks/templating.html#template-inheritance)

## Variables

Variables from your environment config or from the Template's own Front Matter are available in a Layout under the `page` object:

```html
<meta charset="{{ page.charset or 'utf8' }}">
```

The compiled Tailwind CSS for the current Template is available under `css` :

```html
{% if css %}<style>{{ css }}</style>{% endif %}
```
