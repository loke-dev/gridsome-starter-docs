---
title: "Assets"
description: "Learn about asset files - like images - in Maizzle, and organize your email templates into folders"
---

# Asset Files

Any files that you add to the `src/templates` directory will be copied over to the root of the build destination directory.

This way, you can organize your email templates into folders.

## Global assets

You can define a global email assets folder that will be copied to the build directory.

The Starter sets it to the `src/assets/images` folder by default:

```js
// config.js
module.exports = {
  build: {
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
    // ...
  }
  // ...
}
```

All files at the `source` path will be copied to the `destination` directory, which is relative to the `build.destination` directory.
