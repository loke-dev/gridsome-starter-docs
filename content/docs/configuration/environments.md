---
title: "Environments"
description: "Define distinct build scenarios for your HTML email workflow, each with their own settings"
---

# Environments

When developing HTML emails, you might want to use different data and automations in your local and production environments. 

For example, you don't need inlining or CSS purging when developing an email on your machine, but you'll want _both_ enabled for the final, production-ready emails.

Inspired by [Jigsaw](https://jigsaw.tighten.co/)'s approach, Maizzle makes this easy by allowing you to create custom build environments through additional `config.[env].js` files.

## Creating environments

Think of environments as 'build scenarios':

> When I run `maizzle build [environment]`, should X happen? Should CSS be inlined? Should my HTML be minified? Do I need some data to be available for the templates?

For example, let's define a _production_ environment, by creating a new file named `config.production.js`:

```js
// config.production.js
module.exports = {
  doctype: `html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"`,
  language: 'ro',
  // ...
}
```

`config.production.js` will be merged _on top_ of `config.js`, so you only need to specify the config values that you are changing for the _production_ build.

## Environment builds

To build your emails for a specific environment, pass the environment name as an argument to the `maizzle build` command:

```sh
maizzle build production
```

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">If a <code class="shiki-inline">config.[env].js</code> is not found, Maizzle will fallback to <code class="shiki-inline">config.js</code></div>
</div>

By default, running `maizzle build production` will output production-ready emails in a `build_production` folder at the root of the project.

This output path is, of course, [configurable](/docs/build-paths/#path).

## Starter environments

Maizzle comes with three environment configs:

1. local
2. staging
3. production

### Local

The base `config.js` is tailored to local development.

CSS purging and inlining are disabled, so you can quickly prototype your emails with all of Tailwind's classes at your disposal.

Build command: 

```sh
maizzle build
```

This has the fastest build time, since there is almost no post-processing.

### Staging

`config.staging.js` is setup to output human-friendly email code. 

CSS purging and inlining are enabled, but code it prettified so that other people get nicely-formatted, more readable code.

Build command: 

```sh
maizzle build staging
```

### Production

`config.production.js` enables most post-processing options, such as CSS inlining and purging, and even email-safe HTML minification.

Build command: 

```sh
maizzle build production
```

## Custom environments

You can create as many build environments as you need, and name them as you like.

For example, you could create a config file named `config.myclient.js`. 

The build command for it would be:

```sh
maizzle build myclient
```
