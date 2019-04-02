---
title: "Build Paths"
description: "Configure build source and destination paths for Maizzle to process and output your email templates"
---

# Build Paths

This is where you define source and destination paths and files for Maizzle to use.

Let's first take a look at all the options:

```js
// config.js
module.exports = {
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
  // ...
}
```

## destination

This allows you to customize the output path and file extension.

### path

Directory path where Maizzle should output the compiled emails. A Jigsaw-inspired `build_${env}` naming pattern is used by default.

```js
destination: {
  path: 'build_local',
},
```

#### Permalink

You can override `destination.path` for each Template, with the `permalink` <abbr title="Front Matter">FM</abbr> key:

```handlebars
---
permalink: absolute/path/to/file.html
---

{% block template %}
  <!-- ... -->
{% endblock %}
```

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">
    <code class="shiki-inline">permalink</code> must be an absolute <em>file</em> path, and it is designed to be used only in the Template's Front Matter.
  </div>
</div>

### extension

Define the file extension (without the dot) to be used for all templates that are output. Useful if you need to pass the file to other frameworks or templating languages.

For example, let's output [Laravel Blade](https://laravel.com/docs/5.8/blade) files:

```js
destination: {
  extension: 'blade.php',
},
```

## layout

Name of the file that you want to use as the [default Layout](/docs/templates/#default-layout). This will be used for all templates that do not specify a Layout to extend.

```js
build: {
  layout: 'src/layouts/master.njk',
},
```

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">If the file does not exist, rendering will fail and the script will exit.</div>
</div>

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">You can <a href="/docs/templates/#extending-layouts">override this from a Template</a>, with the <code class="shiki-inline">layout</code> Front Matter key.</div>
</div>

## templates

Paths related to your Templates.

```js
templates: {
  source: 'src/templates',
  filetypes: 'html|njk|nunjucks',
},
```

### source

Define the path to your [Templates](/docs/templates/). This is where Maizzle looks for templates to build, and it's also used by postcss-purgecss when scanning for selectors to preserve.

```js
templates: {
  source: 'src/templates',
  // ...
},
```

### filetypes

File extensions that you use for your Templates. 

Maizzle will only look for files ending in _these_ extensions, when searching your `templates.source` directory for Templates to build.

```js
templates: {
  filetypes: 'html|njk|nunjucks',
},
```

This means you can keep other files alongside your Templates, and Maizzle will simply copy them over to the build destination directory.

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">While you can use any file extension for your Templates, <code class="shiki-inline">njk</code> is recommended, as it clearly shows that Nunjucks code is being used.</div>
</div>


## tailwind

Paths for Tailwind CSS.

```js
build : {
  tailwind: {
    css: 'src/assets/css/main.css',
    config: 'tailwind.config.js',
  },
},
```

### css

Paths to your [main CSS file](/docs/tailwindcss/#maincss), that will be compiled with Tailwind CSS.

### config

Path to the Tailwind CSS config file to use.

You can use this to customize Tailwind for any build scenario.

For example, you might want to:

- define fewer theming options for an environment (faster CSS compilation)
- disable `!important` in ⚡4email templates
- use different Tailwind plugins

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Since Tailwind CSS is compiled <em>only once</em>, before Templates are built, using <code class="shiki-inline">tailwind.config</code> in Front Matter will have no effect.</div>
</div>

## assets

Source and destination directories of your asset files.

At build time, `assets.destination` will be created relative to `build.destination`, and everything inside `assets.source` will be copied into it:

```js
assets: {
  source: 'src/assets/images',
  destination: 'images',
},
```

You can use it to store _any_ global email assets, not just images.

