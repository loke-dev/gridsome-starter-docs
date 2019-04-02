---
title: "Components"
description: "Import components into your HTML emails and render them with custom slot content and data"
---

# Components

Components are supercharged [Partials](/docs/partials/): they allow you to pass content and data to the file that you are importing into your Template.

## Creating

Let's create a VML background image component, to which we can pass data about the image, and the HTML to be overlayed on top of it.

We might imagine something like this:

```html
<!--[if mso]>
<v:image src="{{ data.src or 'https://via.placeholder.com/600x400' }}" xmlns:v="urn:schemas-microsoft-com:vml" style="width:{{ data.width or 600 }}px;height:{{ data.height or 400 }}px;" />
<v:rect fill="false" stroke="false" style="position:absolute;width:{{ data.width or 600 }}px;height:{{ data.height or 400 }}px;">
<div><![endif]-->
{{ content }}
<!--[if mso]></div></v:rect><![endif]-->
```

We would like to access data being sent to the Component under the `data` variable. The 'body' of the Component or, in our case, the HTML to be overlayed, we will access under the `content` variable.


## Importing

Save the Component to `src/components/vmlbg.njk` and import it into a Template:

```js
{% component "src/components/vmlbg.njk" %}
  <div>
    Overlayed HTML!
  </div>
{% endcomponent %}
```

## Arguments

The first argument, `"src/components/vmlbg.njk"`, is the path to our component file.

We can also pass a second argument, which will be available under the `data` variable inside the component. The argument can be:

- a string
- an array
- an object

For example:

```js
{% component "src/components/vmlbg.njk", {width: 600, height: 500, src: 'some/image/path.jpg'} %}
  <div>
    Overlayed HTML!
  </div>
{% endcomponent %}
```

Finally, anything that you add between the `{% component %} {% endcomponent %}` tags will be available to the component under a `content` variable.

Congratulations! 

You've just recreated the `vmlbg.njk` Component that Maizzle ships with 😎

## Paths

Just like with Partials, you can keep your Components wherever you'd like. Just make sure to [update the paths](/docs/partials/#paths) for PurgeCSS and BrowserSync.
