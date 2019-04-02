---
title: "Charset"
description: "Define a charset for your HTML email templates, so that they use the correct character encoding"
---

# Charset

Use this to set a global character encoding for your HTML emails:

```js
// config.js
module.exports = {
  charset: 'utf8',
  // ...
}
```

You can then use it in a Layout:

```html
<meta charset="{{ page.charset or 'utf8' }}">
```

## Front Matter

Use Front Matter if you need some special encoding for a particular template:

```handlebars
---
charset: ISO-8859-5
---

{% block template %}
  <!-- ... -->
{% endblock %}
```

## Accessibility

Always specify the correct character encoding for your emails. This prevents breaking reading patterns, both on-screen and with screen readers.
