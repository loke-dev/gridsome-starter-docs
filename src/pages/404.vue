<template>
  <Layout class="bg-gradient-maizzle font-sans antialiased">
    <main class="flex items-center h-screen">
      <div class="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 max-w-xs mx-auto px-6 md:px-0 relative">
        <span class="absolute -mt-10 text-5xl inset-x-0 text-center pointer-events-none">🧐</span>
        <section class="bg-gray-100 mx-auto px-8 py-6 rounded shadow-2xl relative">
          <h1 class="text-2xl font-bold mb-4">Page Not Found</h1>
          <p class="mb-4 leading-normal text-gray-700">Looks like you've followed a broken link or entered a URL that doesn't exist on our site.</p>
          <a :href="backHref" class="text-sm text-ocean hover:text-ocean-darker transition-color" v-html="backText">&larr; As you were</a>
        </section>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      from: null
    }
  },
  metaInfo () {
    return {
      title: `404 - Page Not Found`,
    }
  },
  beforeRouteEnter(to, from, next) {
    const vm = this
    next(vm => vm.from = from)
  },
  computed: {
    backHref () {
      return this.from ? this.from.fullPath : '/'
    },
    backText () {
      return `&larr; ${ this.from && this.from.name ? 'As you were' : 'Back to our site'}`
    }
  }
}
</script>

