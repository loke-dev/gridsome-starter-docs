---
title: "CSS Inlining"
description: "Configure automatic CSS inlining options for your HTML email templates"
---

# CSS Inlining

Maizzle uses the Juice library to automatically inline your CSS.

Let's first take a look at all the options available - we'll go through each one:

```js
// config.js
module.exports = {
  inlineCSS: {
    enabled: false,
    styleToAttribute: {
      'background-color': 'bgcolor',
      'background-image': 'background',
      'text-align': 'align',
      'vertical-align': 'valign',
    },
    applySizeAttribute: {
      width: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
      height: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
    },
    excludedProperties: null,
  },
  // ...
}
```

## Options

Changing these options in your environment config will apply to all Templates.

### enabled

Enable automatic CSS inlining. When `false`, inlining will not take place and all other settings inside `inlineCSS` will be ignored.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Tip: turn this off when developing ⚡4email templates.</div>
</div>

### styleToAttribute

Defines which CSS properties should Juice duplicate as what HTML attributes.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Some email clients only support certain styles through HTML attributes, completely ignoring CSS properties.</div>
</div>


### applySizeAttribute

Specify an array of tag names that should receive `width=""` and `height=""` attributes. 

These are passed to Juice, which will add any inline width and height CSS rules it finds as HTML attributes, but only for the tags specified here.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Some email clients only support attribute-based widths and heights on certain tags, so you can use this for better compatibility.</div>
</div>

### excludedProperties

Array of CSS property names that should be excluded from the CSS inlining process. Names are considered unique, so you need to specify each one you'd like to exclude. 

For example:

```js
'excludedProperties' => ['padding', 'padding-left'],
```

### codeBlocks

An object where each value has a start and end to specify fenced code blocks that should be ignored during parsing and inlining.

```js
// config.js
module.exports = {
  inlineCSS: {
    codeBlocks: {
      'ASP': {
        start: '<%',
        end: '%>'
      }
    }
    // ..
  },
  // ...
}
```

