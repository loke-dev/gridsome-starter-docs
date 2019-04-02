---
title: "Base Image URL"
description: "Set a base image URL and easily use absolute URLs or a CDN for your HTML email template images"
---

# Base Image URL

Define a base URL that will be prepended to all image sources in your email. It applies to both inline and background images.

Useful if you already host your images somewhere like a CDN, so you don't have to write the full URL every time when developing.

Make it globally available by setting it in your environment config:

```js
// config.js
module.exports = {
  baseImageURL: 'https://cdn.example.com',
  // ...
}
```

Override it for a single template, through Front Matter:

```handlebars
---
baseImageURL: 'https://res.cloudinary.com/user/image/upload/v1234567890/'
---

{% block template %}
  <!-- ... -->
{% endblock %}
```

## Trailing slash

Mind the trailing slash on your URL: this influences how you reference images.

```html
<!-- If baseImageURL has no trailing slash -->
<img src="/folder/product-1.png">

<!-- If baseImageURL contains trailing slash -->
<img src="folder/product-1.png">
```
