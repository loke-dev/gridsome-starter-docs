---
title: "Gradients"
description: "Add CSS background image gradients with Outlook VML fallback to your HTML email templates in Maizzle"
---

# Background Gradients

[Many](https://www.campaignmonitor.com/css/color-background/css-gradients/) email clients support CSS background gradients. 

Maizzle includes a Tailwind CSS [plugin](https://www.npmjs.com/package/tailwindcss-gradients) that generates classes based on utilities that you define in `tailwind.config.js`, so you can easily use them in your emails.

## CSS-only

Simply add the utility class on an element. Specify a background color first, so that email clients that don't support CSS background gradients can display a fallback:

```html
<table class="w-full">
  <tr>
    <td class="bg-blue-500 bg-gradient-b-blue-dark">
      <!-- ... -->
    </td>
  </tr>
</table>
```

You can configure the directions in the plugin's options, in your `tailwind.config.js`:

```js
directions: {
  't': 'to top',
  'tr': 'to top right',
  'r': 'to right',
  'br': 'to bottom right',
  'b': 'to bottom',
  'bl': 'to bottom left',
  'l': 'to left',
  'tl': 'to top left',
},
```

## Outlook Fallback

Outlook for Windows doesn't support CSS gradients, but we can use VML.

You need to add it right after the element with the CSS gradient, wrapping your content like this:

```html
<table class="w-full">
  <tr>
    <td class="bg-blue-500 bg-gradient-b-blue-dark">
      <!--[if gte mso 9]>
      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">
      <v:fill type="gradient" color="#0072FF" color2="#00C6FF" angle="90" />
      <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">            
      <div><![endif]-->
      [your overlayed HTML here]
      <!--[if gte mso 9]></div></v:textbox></v:rect><![endif]-->
    </td>
  </tr>
</table>
```

As you can see, you need to set a fixed width on the `<v:rect>` element - we recommend this instead of using `mso-width-percent:1000;`, as that is pretty buggy (especially in Outlook 2013).

Unfortunately, you will also need to manually set the HEX colors in the `color=""` and `color2=""` attributes, and you can only define an angle. But only if you care about email background gradients for Outlook 😉

## Avoid inlining

Most email clients that support CSS gradients also support `@media` queries. 

Use the `all` screen breakpoint utility to prevent Juice from inlining your gradient:

```html
<table class="w-full">
  <tr>
    <td class="bg-blue-500 all-bg-gradient-b-blue-dark">
      <!-- ... -->
    </td>
  </tr>
</table>
```
