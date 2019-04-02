---
title: ⚡4email
slug: amp4email
description: "Use AMP for Email in Maizzle to easily create interactive HTML emails with realtime information and in-line actions"
---

# ⚡4email

Maizzle includes a Layout and a Template so you can get started with AMP for Email.

For a syntax refresher, checkout [AMP by Example &nearr;](https://ampbyexample.com/amphtml-email/introduction/hello_world/)

## Layout

`amp4email.njk` is just the default Layout, adjusted for AMP for Email's requirements:

```html
<!DOCTYPE {{ page.doctype or 'html' }}>
<html ⚡4email {% if page.htmlClass %}class="{{ page.htmlClass }}"{% endif %} lang="{{ page.language or 'en' }}">
<head>
  <meta charset="{{ page.charset or 'utf8' }}">
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <style amp4email-boilerplate>body{visibility:hidden}</style>
  {% if page.title %}<title>{{ page.title }}</title>{% endif %}
  {% if page.googleFonts %}<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family={{ page.googleFonts }}" rel="stylesheet"><!--<![endif]-->{%- endif %}
  {% if css %}<style amp-custom>{{ css }}</style>{% endif %}
  {% block head %}{% endblock %}
</head>
<body {% if page.bodyClass %}class="{{ page.bodyClass }}"{% endif %}>
{% if page.preheader %}
  <div class="hidden text-0 leading-0">{{ page.preheader }}</div>
{% endif %}

{% block template %}{% endblock %}
</body>
</html>
```

## Template

An ⚡4email Template is also provided.

`amp-carousel.njk` includes a basic AMP carousel example:

```handlebars
---
layout: src/layouts/amp4email.njk
title:  ⚡4email example - Carousel
---

{% block head %}
<script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
{% endblock %}

{% block template %}
<div class="p-16">
  <div class="max-w-full">
    <amp-carousel width="800" height="600" layout="responsive" type="slides">
      <amp-img src="https://ampbyexample.com/img/image1.jpg" width="800" height="600" alt="a sample image"></amp-img>
      <amp-img src="https://ampbyexample.com/img/image2.jpg" width="800" height="600" alt="another sample image"></amp-img>
      <amp-img src="https://ampbyexample.com/img/image3.jpg" width="800" height="600" alt="and another sample image"></amp-img>
    </amp-carousel>
  </div>
</div>
{% endblock %}
```

### AMP Components

Add any [AMP components](https://ampbyexample.com/amphtml-email/introduction/hello_world/#amp-components) inside the `{% block head %}` tag, as seen above.

## Disable inlining

Inline style attributes are not allowed in AMP, so make sure CSS inlining is disabled. 

Do it either globally, in your environment config:

```js
// config.js
module.exports = {
  inlineCSS: {
    enabled: false,
  },
  // ...
}
```

... or locally, in the Template's Front Matter:

```yaml
---
layout: src/layouts/amp4email.njk
title:  ⚡4email example - Carousel
inlineCSS:
  enabled: false
---
```

## !important

Since inline styles aren't supported in AMP for Email, we don't need `!important` added to our CSS. This can be easily turned off in the `tailwind.config.js`:

```js
module.exports = {
  important: false,
  // ...
}
```

However, you might need to turn it off _only_ for AMP templates.

You can do this with a build environment:

1. Create `config.amp.js`:

  ```js
  module.exports = {
    build: {
      destination: {
        path: 'build_amp',
      },
      tailwind: {
        config: 'tailwind.amp.js',
      },
    },
  }
  ```
2. Duplicate `tailwind.config.js` to `tailwind.amp.js`, and disable important:

  ```js
  module.exports = {
    important: false,
    // ...
  }
  ```
3. Run `maizzle build amp` to build your ⚡4email templates.
