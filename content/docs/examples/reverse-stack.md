---
title: "Reverse Stack"
description: "See how you can reorder stacked columns in a mobile responsive HTML email template with table layout CSS properties"
---

# Reverse Stack

With responsive HTML emails, you sometimes need to reverse the order in which stacked columns appear on mobile. You might even want to set a custom stacking order for layouts with 3+ columns.

## Reverse 2 col

Imagine a two column layout, with text on the left and an image on the right:

```html
<table class="w-full">
  <tr>
    <td class="sm-inline-block w-1-2 sm-w-full px-8">
      <p class="text-2xl font-hairline font-sans text-black">Left text</p>
      <p class="text-grey-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur.</p>
    </td>
    <td class="sm-inline-block w-1-2 sm-w-full px-8">
      <img src="https://picsum.photos/600/600">
    </td>
  </tr>
</table>
```

Naturally, the image will show under the text, when viewed on a mobile device.

However, using Maizzle's custom table display utilities, we can reverse the columns on the mobile breakpoint:

```html
<table class="w-full">
  <tr>
    <td class="w-1-2 sm-table-footer-group px-8">
      <div class="sm-px-8">
        <h2 class="text-2xl font-hairline font-sans text-black">Left text</h2>
        <p class="text-grey-dark mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur.</p>
      </div>
    </td>
    <td class="w-1-2 sm-table-header-group px-8">
      <div class="sm-px-8">
        <img src="https://picsum.photos/600/600">
      </div>
    </td>
  </tr>
</table>
```

It's done in 2 simple steps:

1. Use the responsive `table-{...}-group` utilities on each column, to reverse column order on small screens
2. Wrap the contents of each column in a `<div>` and use it to set padding for mobile. This is required because the CSS properties used to reverse the column order do not support padding

<a href="https://codepen.io/maizzle/pen/dgpxbB?editors=1000" class="rounded bg-gradient-l-ocean-light hover:bg-gradient-l-ocean-dark text-sm font-bold leading-full py-3 px-12 mt-4 inline-flex" target="_blank" rel="nofollow noopener"><span class="text-white">2 col reorder demo on CodePen</span></a>

## Reorder 3+ cols

In a similar fashion, we can reorder a 3+ column layout:

```html
<table class="w-full">
  <tr class="sm-w-full sm-table">
    <td class="w-1-3 sm-table-footer-group px-8">
      <div class="sm-px-8">
        <h2 class="text-xl font-hairline font-sans text-black">Last on mobile</h2>
      </div>
    </td>
    <td class="w-1-3 sm-table-footer-group px-8">
      <div class="sm-px-8">
        <h2 class="text-xl font-hairline font-sans text-black">Second on mobile</h2>
      </div>
    </td>
    <td class="w-1-3 sm-table-caption sm-w-full px-8">
      <h2 class="text-xl font-hairline font-sans text-black">First on mobile</h2>
    </td>
  </tr>
</table>
```

Only a couple of extra steps:

- Make the `<tr>` act as a full width table on mobile, by adding the `sm-w-full` and sm-table utilities
- Use `sm-table-caption` and `sm-w-full` on the column that you want to display first on mobile

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600"><code class="shiki-inline">.table-caption</code> supports padding, no need to use a div inside the column.</div>
</div>

<a href="https://codepen.io/maizzle/pen/dgpxLp?editors=1000" class="rounded bg-gradient-l-ocean-light hover:bg-gradient-l-ocean-dark text-sm font-bold leading-full py-3 px-12 mt-4 inline-flex" target="_blank" rel="nofollow noopener"><span class="text-white">3+ col reorder demo on CodePen</span></a>


