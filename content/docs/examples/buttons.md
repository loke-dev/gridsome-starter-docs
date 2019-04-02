---
title: "Buttons"
description: "Learn how to create simple buttons for your HTML email templates in Maizzle"
---

# Buttons

Buttons in HTML email are usually simple table structures, with an anchor inside.

## Filled

The common type of button, built with a table. For an extra touch, let's add rounded corners and a hover effect:

```html
<table>
  <tr>
    <th class="bg-green-500 hover-bg-green-600 rounded" style="mso-padding-alt: 12px 48px;">
      <a href="https://maizzle.com" class="block text-white text-sm leading-full py-12 px-48 no-underline">Button</a>
    </th>
  </tr>
</table>
```

<div class="mt-8 mb-4 items-center flex flex-wrap">
  Here's how that would look like: <a href="#" class="mt-4 sm:mt-0 sm:ml-8 rounded bg-green-500 hover:bg-green-600 text-sm font-bold leading-full py-3 px-12"><span class="text-white">Button</span></a>
</div>

## Outlined

No background color, so it inherits its container's background. Instead, we add a colored border to the table cell. 

To make it more interesting, let's also change the background on hover:

```html
<table>
  <tr>
    <th class="border-2 border-indigo hover-bg-indigo block rounded" style="mso-padding-alt: 12px 48px;">
      <a href="https://maizzle.com" class="block text-sm text-indigo all-hover-text-white leading-full py-12 px-48 no-underline">Button</a>
    </th>
  </tr>
</table>
```

<div class="mt-8 mb-4 items-center flex">
  Example: <a href="#" class="ml-8 rounded border-2 border-green-500 hover:border-green-600 hover:bg-green-600 group text-sm font-bold leading-full py-3 px-12"><span class="text-green-500 group-hover:text-white">Button</span></a>
</div>

## Pill

Pill buttons use a larger border-radius value. Remember, Outlook doesn't support this:

```html
<table>
  <tr>
    <th class="bg-green-500 hover-bg-green-600 shadow-md rounded-full" style="mso-padding-alt: 12px 48px;">
      <a href="https://maizzle.com" class="block text-sm text-white leading-full py-12 px-48 no-underline">Button</a>
    </th>
  </tr>
</table>
```

<div class="mt-8 mb-4 items-center flex">
  Example: <a href="#" class="ml-8 rounded-full shadow-md bg-green-500 hover:bg-green-600 text-sm font-bold leading-full py-3 px-12"><span class="text-white">Button</span></a>
</div>

## Look & feel

For modern email clients, CSS padding can be used to make the entire button clickable. In Outlook for Windows, because CSS padding isn't supported on anchor tags, the MSO `mso-padding-alt` CSS property can be used on the table cell in order to _preserve the aspect_ - however, this means that only the text itself will be clickable.

## Not bulletproof

This technique makes customisation easy while still keeping your buttons looking the same across email clients. 

However, it is _not_ bulletproof.

Buttons in Outlook for Windows will only have the text clickable.

If you want fully-clickable buttons in Outlook for Windows too, take a look at Campaign Monitor's [bulletproof email buttons &nearr;](https://buttons.cm/)
