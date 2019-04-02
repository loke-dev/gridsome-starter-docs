---
title: "Web Fonts"
description: "Using Google Fonts or custom web fonts in HTML email with font face and media queries in Maizzle"
---

# Web Fonts

Web fonts have [decent support](https://www.campaignmonitor.com/css/text-fonts/font-face/) in modern email clients. 

This means that you can progressively enhance your emails with custom fonts, while showing a fallback system font in clients that don't support them.

## Google Fonts

Maizzle supports Google Fonts out-of-the-box. 

Check out [how to use Google Fonts in Maizzle &rarr;](/docs/google-fonts/)

## Custom Web Fonts

If you want to use a custom web font, or your ESP doesn't support `<link>` tags in emails (looking at you, Shopify!), you need to use `@font-face` to register the font family instead.

Here are a couple of ways you could go about it:

### Typography component

You can create a CSS component that registers the `@font-face` rules. For example, let's create a `typography.css` file in `src/assets/css/custom`. 

We need a URL to a font file, so let's use [Lato](https://fonts.google.com/specimen/Lato) from Google Fonts:

```css
@screen  all {
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
}
```

Next, we must import it in `main.css`:

```css
@import "custom/reset";
@tailwind components;

/* Import our typography component */
@import "custom/typography"

@tailwind utilities;
@import "custom/utilities";
```

Then, just as before, we register the utility with Tailwind CSS:

```js
// tailwind.config.js

fontFamily: {
  lato: [
    'Lato',
    '-apple-system',
    '"Segoe UI"',
    'sans-serif',
  ],
  // ...
},
```

Now we can use it:

```html
<h1 class="all-font-lato">Headline using custom webfont</h1>
```

### Push to head block

You can also use the `{% block head %}` Nunjucks tag, to push a `<style>` tag right before the closing `</head>` tag:

```handlebars
---
title: "This month's news from Maizzle"
---

{% block head %}
<style>
  @media screen {
    @font-face {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  }
</style>
{% endblock %}

{% block template %}
  ...
{% endblock %}
```

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Since we're using a <code class="shiki-inline">@media</code> query, we don't need to add the <code class="shiki-inline">data-embed</code> attribute on the <code class="shiki-inline">&lt;style&gt;</code> tag, in order to <a href="/docs/tailwindcss/#prevent-inlining">prevent Juice from inlining CSS</a>.</div>
</div>

