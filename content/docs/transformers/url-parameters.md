---
title: "URL Parameters"
description: "Easily append custom URL parameters to links in your HTML email template"
---

# URL Parameters

Maizzle can automatically append custom URL parameters to your links.

Useful if you need analytics beside the ones from your <abbr title="Email Service Provider">ESP</abbr>.

## Global

To add the same URL parameters to all links in all templates, update the empty object in your environment config:

```js
// config.js
module.exports = {
  urlParameters: {
    utm_source: 'maizzle',
    utm_campaign: 'Campaign Name',
    utm_medium: 'email',
    custom_parameter: 'foo',
    '1stOfAugust': 'bar',
  }
  // ...
}
```

## Local

Of course, you can define URL parameters at a Template level, through Front Matter:

```handlebars
---
title: "These URL params are unique to this template"
urlParameters:
  utm_source: custom
  utm_campaign: "Pre-launch August"
  # ...
---

{% block template %}
  ...
{% endblock %}
```
