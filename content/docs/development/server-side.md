---
title: "Server Side"
description: "Use Maizzle in Node.js on the server to compile a string to an HTML email, styled with Tailwind CSS"
---

# Server Side

You can use Maizzle in your Node.js app, to compile a string to an HTML email.

## Usage

First, `require()` the framework in your application:

```js
const Maizzle = require('@maizzle/framework')
```

Then, call the `render()` method, passing it a string and an options object:

```js
const html = Maizzle.render(`html`, options)
```

Of course, `html` can use Nunjucks.

`options` is an object with the following structure:

```js
{
  tailwind: {
    config: {},
    css: '',
  },
  maizzle: {
    config: {},
  }
}
```

| tailwind | Type | Default | Description |
| --- | --- | --- | --- |
| `config` | Object | null | A Tailwind CSS config object. |
| `css` | String | '' | A CSS string. To use Tailwind CSS, you should at least use _@tailwind utilities_ |

| maizzle | Type | Default | Description |
| --- | --- | --- | --- |
| `config` | Object | null | A Maizzle config object. |

## Example

```js
const Maizzle = require('@maizzle/framework')

let str = `---
title: Using Maizzle on the server
layout: src/layouts/master.njk
---

{% block template %}
<table>
  <tr>
    <td class="bg-blue hover-bg-blue-dark text-white text-center rounded">
      <a href="https://maizzle.com" class="text-white inline-block text-sm font-semibold py-16 px-24 no-underline">Confirm email address</a>
    </td>
  </tr>
</table>
{% endblock %}`

Maizzle.render(
  str,
  {
    tailwind: {
      config: require('./tailwind.config'),
      css: '@tailwind utilities; .myborder { @apply border border-solid border-gray-300; }',
    },
    maizzle: {
      config: require('./config'),
    }
  }
).then(html => console.log(html))
```


