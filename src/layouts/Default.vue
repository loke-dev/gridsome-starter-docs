<template>
  <div>
    <transition name="page" appear>
      <slot/>
    </transition>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  metaInfo () {
    return {
      meta: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#000000',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
    }
  },
  computed: {
    config () {
      return config
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
