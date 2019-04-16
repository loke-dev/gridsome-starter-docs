<template>
  <Layout>
    <index />
  </Layout>
</template>

<script>

import Index from '@/components/Index.vue'

export default {
  components: {
    Index,
  },
  
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Gridsome is an open-source, Vue-powered modern site generator that builds performance into every website automatically. Gridsome makes it easy and fun for developers to create fast, beautiful websites without needing to become a performance expert.'
      }
    ],
  }
}
</script>


