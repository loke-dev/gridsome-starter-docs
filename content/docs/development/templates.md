---
title: "Templates"
description: "Learn how to create HTML emails with Nunjucks template inheritance in Maizzle"
---

# Templates

Templates in Maizzle contain the body of your email templates.

They're made up of two distinct sections:

1. Front Matter
2. Nunjucks blocks

## Front Matter

Templates can override environment config variables and even define new ones, through YAML-style Front Matter.

It looks like this:

```yaml
---
title: "Please confirm your email address"
isClimateChangeReal: true
---
```

Each of those variables will be available under the `page` object, which means you can use Nunjucks to render them in your Templates, like this:

```html
<p>{{ page.title }}</p>
```

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Front Matter must be defined at the very top of your Template, starting on line 1.</div>
</div>

## Nunjucks Blocks

For a Layout to render a Template's body, that body must be wrapped in a Nunjucks block that has the same name in both the Template and the Layout.
 
In Maizzle, we named it `template`:

```html
{% block template %}
<table>
  <tr>
    <td>...</td>
  </tr>
</table>
{% endblock %}
```

Everything that is inside that block will be output into the Template's Layout, wherever a `{% block template %}{% endblock %}` is found.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">You don't <em>have</em> to name your block <code class="shiki-inline">template</code>. Feel free to use your own identifier, but make sure its name matches the one in your Layout.</div>
</div>

### Multiple Blocks

Your Templates can use as many blocks as you need. 

For example, Maizzle uses a `head` block in its master Layout, allowing you to insert additional tags into the `<head>`, right from the Template.

## Extending Layouts

A Template can specify a Layout to extend, in Front Matter:

```yaml
---
layout: "src/layouts/custom.njk"
---
```

The value must be a path relative to the root of the project. 

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">If that file doesn't exist, the build will fail with a <code class="shiki-inline">Template render error</code>.</div>
</div>

### Default Layout

You don't _have_ to explicitly extend a Layout. 

If no `layout` key is found in Front Matter, Maizzle will try to use the Layout defined in your environment config:

```js
// config.js
module.exports = {
  build: {
    layout: 'src/layouts/master.njk',
    // ...
  }
  // ...
}
```

Likewise, if `build.layout` points to a file that doesn't exist, the build will fail.

### How Extending Works

When a Template _extends_ a Layout, the `{% block template %}{% endblock %}` section in the Layout being extended is replaced with the contents of the Template's _own_ `{% block template %}`.

Read more about template inheritance, in the [Nunjucks docs &nearr;](https://mozilla.github.io/nunjucks/templating.html#template-inheritance)

## Basic Example

Here's a very basic Template example:

```handlebars
---
layout: src/layouts/master.njk
title: "This month's news from Maizzle"
---

{% block template %}
<table class="w-full">
  <tr>
    <td>
      <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </td>
  </tr>
</table>
{% endblock %}
```

## Archiving

Maizzle will only compile templates found in your `build.templates.source` path.

However, if you create a lot of emails, your builds can start to slow down, since all templates are rebuilt every time you run the `build` command.

Archive Templates (and their assets) that you no longer need built, by simply moving them to a directory outside that path.

## Plaintext

Maizzle can create plaintext versions of your HTML emails.

Simply enable it in your Template's Front Matter:

```handlebars
---
title: This template will also have a plaintext version
plaintext: true
---

{% block template %}
  ...
{% endblock %}
```

A `.txt` file will be output at the same location with the compiled Template.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Using the <a href="/docs/build-paths/#permalink"><code class="shiki-inline">permalink</code></a> Front Matter key in your Template? No worries, your plaintext version will be output at the correct location.</div>
</div>
