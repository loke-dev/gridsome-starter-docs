---
title: "BrowserSync"
slug: browsersync
description: "Develop emails locally with BrowserSync and have the browser automatically refresh the page when you update an email template"
---

# BrowserSync

When running the `maizzle serve` command, Maizzle uses [BrowserSync](https://browsersync.io/) to start a local server and open a directory listing of your emails in your default browser.

You can then make changes to your emails, save them, and watch the browser automatically refresh the page for you.

```js
// config.js
module.exports = {
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
  // ...
}
```

## port

Set the server port number - by default, your local development server will be available at `http://localhost:3000`.

## tunnel

When set to `true`, Maizzle will enable localhost tunneling in Browsersync, so you can live-share a URL to an email that you're working on right now, with a colleague or a client. Under the hood, [localtunnel.me](https://localtunnel.me) will be used.

Both parties see the same thing, and scrolling is synced, too.

You can also use a string instead of a boolean - for example `tunnel: 'mybrand'`. In this case, BrowserSync will attempt to use a custom subdomain for the URL, i.e. `https://mybrand.localtunnel.me`.
If that subdomain is unavailable, you will be allocated a random name as usual.

## directory

When running `maizzle serve` with this setting enabled, BrowserSync will open a file explorer in your browser, starting at the root of the build directory.

If you set this to `false`, the page opened by BrowserSync will be blank, and you'll need to manually navigate to your emails directory.

<div class="bg-gray-100 border-l-4 border-gradient-b-orange-dark p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">If using the <code class="shiki-inline">tunnel</code> option for a client demo, use <code class="shiki-inline">listing: false</code>, so they can't freely browse all your emails by going to the root URL.</div>
</div>

## notify

Toggle BrowserSync's annoying pop-over notifications. Off by default ✌

## watch

Array of extra paths for BrowserSync to watch.

By default, the following paths are watched: 

- All your Template files, as defined in `build.templates.source`
- All your Asset files, as defined in `build.assets.source`
- `tailwind.config.js`

You can use this option to configure additional watch paths when developing locally:

```js
// config.js
module.exports = {
  browsersync: {
    watch: [
      // ... layouts/partials/components
      './src/some-dir',
      'some-file.js'
    ],
  },
  // ...
}
```

When a file in these custom watch paths is updated, BrowserSync will trigger a rebuild and will also refresh the browser page.


