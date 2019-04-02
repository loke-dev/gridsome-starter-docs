---
title: "Doctype"
description: "Define a HTML doctype for your email templates, for compatibility and accessibility purposes"
---

# Doctype

You can set a global `doctype` to be used by all your email templates:

```js
// config.js
module.exports = {
  doctype: 'html',
  // ...
}
```

You then reference this in your master [Layout](/docs/layouts/), from the `page` object:

```html
<!DOCTYPE {{ page.doctype or 'html' }}>
```

Just like above, you can fallback to a default value with [Nunjucks templating logic](https://mozilla.github.io/nunjucks/templating.html#logic).

## Front Matter

You can also use Front Matter, to set the `doctype` locally instead of globally. 

For example, let's create `src/templates/old.njk` and use a Transitional doctype for it:

```handlebars
---
doctype: html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
---

{% block template %}
  <!-- ... -->
{% endblock %}
```

## HTML5

The default Layout in the Starter will fallback to an HTML5 doctype. It's the shortest, and it's enough to trigger standards mode.
