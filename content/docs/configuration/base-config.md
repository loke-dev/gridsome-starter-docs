---
title: "Base Config"
slug: configuration
description: "All Maizzle configuration options, from the default config.js file"
---

# Base Config

The base `config.js` in Maizzle is a JavaScript object, with settings tailored to local email development.
It's used by the `maizzle build` and `maizzle serve` commands.

For reference, here are all the options defined in `config.js`:

```js
module.exports = {
  doctype: 'html',
  language: 'en',
  charset: 'utf8',
  googleFonts: '',
  baseImageURL: '',
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
  cleanup: {
    purgeCSS: {
      content: [
        'src/layouts/**/*.*',
        'src/partials/**/*.*',
        'src/components/**/*.*',
      ],
      whitelist: [],
      whitelistPatterns: [],
    },
    removeUnusedCSS: {
      enabled: false,
    },
    keepOnlyAttributeSizes: {
      width: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
      height: ['TABLE', 'TD', 'TH', 'IMG', 'VIDEO'],
    },
    preferBgColorAttribute: false,
  },
  applyExtraAttributes: {
    table: {
      cellpadding: 0,
      cellspacing: 0,
      role: 'presentation',
    },
    img: {
      alt: ''
    }
  },
  urlParameters: {},
  prettify: {
    enabled: false,
    indent_inner_html: false,
    ocd: true,
  },
  minify: {
    removeEmptyAttributes: true,
  },
  browsersync: {
    port: 3000,
    tunnel: false,
    directory: true,
    notify: false,
    watch: [
      'src/layouts/**/*.*',
      'src/partials/**/*.*',
      'src/components/**/*.*',
    ],
  },
  markdown: {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: false,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pendantic: false,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tables: true,
    xhtml: false
  },
  build: {
    destination: {
      path: 'build_local',
      extension: 'html',
    },
    layout: 'src/layouts/master.njk',
    templates: {
      source: 'src/templates',
      filetypes: 'html|njk|nunjucks',
    },
    tailwind: {
      css: 'src/assets/css/main.css',
      config: 'tailwind.config.js',
    },
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
  },
}
```
