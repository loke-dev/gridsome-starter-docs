---
title: "Partials"
description: "Learn how to use Nunjucks includes to import partials in your HTML email templates"
---

# Partials

Partials are files that you can include in a Template with the `{% include %}` tag.

## Including

To include a Partial in a Template, use the Nunjucks `{% include %}` tag:

```js
{% block template %}
  
  {% include "src/partials/example.njk" %}

{% endblock %}
```

The path to the Partial file must be:

- surrounded with quotes
- relative to the project root

The build will normally fail if the Partial file doesn't exist - if you're unsure whether the Partial will exist at that path at build time, use `ignore missing`:

```js
{% include "src/partials/schrodinger-cat.njk" ignore missing %}
```

Read more about includes, in the [Nunjucks docs &nearr;](https://mozilla.github.io/nunjucks/templating.html#include)

## Paths

Partials live in the `src/partials` directory in Maizzle, but you can keep them wherever you'd like - just be sure to update their `purgeCSS` and `browsersync` paths:

```js
// config.js
module.exports = {
  cleanup: {
    purgeCSS: {
      content: [
        'src/partials/**/*.*', // update if needed
        'src/components/**/*.*',
        // ...
      ],
      // ...
    },
    // ...
  },
  browsersync: {
    watch: [
      'src/partials/**/*.*', // same ...
      'src/components/**/*.*',
      // ...
    ],
    // ...
  },
  // ...
}
```

[PurgeCSS](/docs/code-cleanup/#purgecss) needs that path, so that any Tailwind CSS classes in your Partials will not be removed when doing code cleanup. Likewise, [BrowserSync](/docs/browsersync) needs to know about it so it can automatically reload your page if a Partial changes.

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">You need to use file globs in these paths, just as shown above. Using directory paths will make PostCSS fail with a <code class="shiki-inline">EISDIR</code> read error.</div>
</div>

Otherwise, you can of course include a partial from any location.


