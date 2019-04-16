<template>
  <Layout>
    <Section container="md" class="blog-posts" dots="top">
      <div class="mb container-sm text-center">
        <h1>Blog</h1>
      </div>
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </Section>
  </Layout>
</template> 

<page-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        author {
          title
          path
          avatar (width: 60)
        }
        excerpt
        content
      }
    }
  }
}
</page-query>

<script>
import PostCard from "@/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>
