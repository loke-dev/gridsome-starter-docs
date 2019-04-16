# Quickstart

Get started right away!

## Stuff

Working with GraphQL in Gridsome is easy and you don't need to know much about GraphQL. Here is an example of how to use GraphQL in `page-query` for a page:

```html
<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
    </div>    
  </div>
</template>

<page-query>
query Posts {
  posts: allWordPressPost {
    edges {
      node { 
        id
        title
      }
    }
  }
}
</page-query>
```
