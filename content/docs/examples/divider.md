---
title: "Divider"
description: "Create dividers or horizontal rules for your HTML email template in Maizzle"
---

# Divider

Similar to Spacers, a Divider provides consistent vertical spacing while allowing visual separation of your content.

A Divider has a thin horizontal line in the middle, which you can style to suit your needs. It can be used anywhere a `<table>` is allowed: before/after other tables, or inside table cells or divs.

The spacing above and below the Divider line is defined through the vertical padding of the inner `<td>` element, with Tailwind CSS utilities:

```html
<table class="w-full">
  <tr>
    <td class="py-24 px-16">
      <div class="bg-gray-300 h-px leading-px">&zwnj&zwnj;;</div>
    </td>
  </tr>
</table>
```

## How it works

1. `py-24 px-16` utilities add `24px` top and bottom padding, as well as `16px` padding on the sides
2. The `<div>` is the horizontal line: we set its height and line-height to `1px`, and give it a background color
3. We use a `&zwnj;` to add something inside, so it can take up height

<div class="bg-gray-100 border-l-4 border-gradient-b-ocean-light p-4 mb-4 text-md" role="alert">
  <div class="text-gray-600">Feel free to use <code class="shiki-inline">&&zwnj;nbsp;</code> instead of <code class="shiki-inline">&zwnj&zwnj;;</code>, both work 👌</div>
</div>

## Customization

Use padding utilities on the `<td>` to push and pull the horizontal line as needed.

For example:

```html
<table class="w-full">
  <tr>
    <td class="pt-24 pr-64 pb-48 pl-0">
      <div class="bg-gray-300 h-px leading-px">&zwnj&zwnj;;</div>
    </td>
  </tr>
</table>
```

Need a thicker divider hairline? Bump up the height and line-height:

```html
<table class="w-full">
  <tr>
    <td class="pt-24 pr-64 pb-48 pl-0">
      <div class="bg-gray-300 h-4 leading-4">&zwnj&zwnj;;</div>
    </td>
  </tr>
</table>
```

Shorter Divider on mobile devices? Use the `sm` breakpoint:

```html
<table class="w-full">
  <tr>
    <td class="py-24 px-16 sm-py-12 sm-py-8">
      <div class="bg-gray-300 h-px leading-px">&zwnj&zwnj;;</div>
    </td>
  </tr>
</table>
```

