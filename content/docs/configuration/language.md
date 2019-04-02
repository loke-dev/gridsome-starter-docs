---
title: "Language"
description: "Define a global language attribute for your HTML emails, to improve accessibility"
---

# Language

The `language` config key defines a global language attribute value for your emails:

```js
// config.js
module.exports = {
  language: 'en',
  // ...
}
```

You can use this in the `lang=""` attribute on your `<html>` tag:

```html
<html lang="{{ page.language or 'en' }}">
```

## Front Matter

Use Front Matter to specify the `language` for each template:

```handlebars
---
title: "Verificare adresă de email"
preheader: "Te rugăm să ne confirmi adresa de email"
language: ro
---

{% block template %}
  <!-- ... -->
{% endblock %}
```

See a [list of HTML ISO Language codes &nearr;](https://www.w3schools.com/tags/ref_language_codes.asp)

## Accessibility

You should make sure to always specify a `language` attribute value. This helps screen reader software use the correct pronunciation.
