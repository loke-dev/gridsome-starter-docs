---
title: "Prettify Code"
slug: prettify
description: "Pretty print your HTML email template code before sending it to a colleague or a client"
---

# Prettify Code

Maizzle can pretty print your HTML code.

Need to send HTML to a human? Enable `prettify` in your config:

```js
// config.js
module.exports = {
  prettify: {
    enabled: false,
    indent_inner_html: false,
    ocd: true,
  },
  // ...
}
```

By default, code will be indented with 2 spaces.

## JS Beautify

[pretty](https://www.npmjs.com/package/pretty) is used to format your code.

Under the hood, [js-beautify](https://www.npmjs.com/package/js-beautify) is used, which means that you can use any of its CSS & HTML Beautifier options in your Maizzle `pretty {}` config object.

Maybe you prefer tabs for your indentation?

```js
// config.js
module.exports = {
  prettify: {
    enabled: true,
    indent_with_tabs: true,
    // ...
  },
  // ...
}
```

Checkout the full [list of HTML & CSS beautifier options &nearr;](https://www.npmjs.com/package/js-beautify#css--html)

## OCD

This option applies several formatting actions and is enabled by default in the Starter. 

Specifically, it:

- condenses multiple newlines to a single newline
- trims leading and trailing whitespace
- ensures that a trailing newline is inserted
- normalizes whitespace before code comments
