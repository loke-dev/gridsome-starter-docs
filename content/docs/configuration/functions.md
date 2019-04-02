---
title: "Functions"
description: "Programatically configure Maizzle by using other Node.js packages or writing your own custom functions"
---

# Config Functions

Since Maizzle is configured in JavaScript, you can programatically set options or make data available to your Templates.

## Variables

Here's a very basic example of using variables for config options:

```js
// config.js

// Define additional paths for PurgeCSS to scan
let extraPurgePaths = [
  './src/2019/clients/**/*.*',
  '../up/a/level/**/*.*'
]

module.exports = {
  purgeCSS: {
    content: [
      'src/layouts/**/*.*',
      'src/partials/**/*.*',
      'src/components/**/*.*',
      ...extraPurgePaths,
    ],
    // ...
  },
  // ...
}
```

## Functions

When using functions, you need to make sure to invoke them.

```js
// config.js
const foo = function() {
  return 'manchu'
}

module.exports = {
  foo: foo(),
  bar: function() {
    // do stuff and return
  }(), // invoke function
}
```

The [dynamic titles](/docs/title/#global-dynamic-titles) example uses a self-invoking function.
