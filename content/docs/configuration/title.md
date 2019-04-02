---
title: "Title"
description: "Set a title tag value for your HTML email templates, giving screen reader users some context"
---

# Title

Use this to set a value for the `<title>` tag in your email templates. Titles are usually unique to each template, simply them with Front Matter:

```handlebars
---
title: "This month's news from Maizzle"
---

{% block template %}
  <!-- ... -->
{% endblock %}
```

You then use it in a Layout, like this:

```handlebars
{% if page.title %}<title>{{ page.title }}</title>{% endif %}
```

This way, if no `title` is set, we avoid inserting an empty `<title>` tag.

## Global dynamic titles

You can, of course, set a global title in your evironment config.

A _static_ global title would be pretty useless, but Maizzle's config is just a JavaScript file, which means you can assign any key to another variable, or even a function 🔥

Let's set a global dynamic title to include the name of the day:

```js
// config.js
module.exports = {
  title: function() {
    const date = new Date();
    return `This template was built on a ${date.toLocaleDateString('en-US', { weekday: 'long' })}`
  }(),
  // ...
}
```

## Accessibility

The `<title>` tag is needed in order to give screen reader users context. 

It also helps when viewing the email in a browser (like your email's online version), by setting the title on the browser's tab.

