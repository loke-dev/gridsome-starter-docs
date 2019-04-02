---
title: "Markdown"
description: "Use Markdown in your HTML email templates. GitHub Flavored Markdown included, too."
---

# Markdown

Maizzle supports Markdown for your email templates.

[Marked.js](https://github.com/markedjs/marked) is used together with Nunjucks, and you can even fully configure it, either from your environment config, or through Front Matter, for each Template.

## Nunjucks Tags

Markdown content needs to be added inside special Nunjucks tags, in order to be rendered by Marked. Under the hood, [nunjucks-markdown](https://www.npmjs.com/package/nunjucks-markdown) is used. 

### Block

Use the `{% markdown %}` Nunjucks block tag to add Markdown to your emails:

```markdown
{% markdown %}

### A level 3 heading

Lorem ipsum dolor sit amet...

And a [link](https://maizzle.com)

{% endmarkdown %}
```

### Import

Already have Markdown somewhere in a file? You can reference the file and its contents will be parsed by Marked:

```sh
{% markdown 'src/partials/markdown.md' %}
```

## GFM

Marked supports [GitHub Flavored Markdown](https://github.github.com/gfm/), and it's enabled by default in Maizzle.

## Config

Here's how Marked.js is configured in Maizzle:

```js
// config.js
module.exports = {
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
  // ...
}
```

For an explanation of what each option does, please see the [Marked docs &nearr;](https://marked.js.org)

## Front Matter

You can override the base Markdown config from your Template's Front Matter.
Need a `baseUrl` for Markdown links, or to enable `headerIds` for a particular Template? 

No problem:

```handlebars
---
title: Overriding the default Markdown config
markdown:
  headerIds: true
  baseUrl: https://github.com
---

{% block template %}
  ...
{% endblock %}
```
