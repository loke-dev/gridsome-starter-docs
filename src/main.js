// Import global styles
import 'prismjs/themes/prism.css'
import '~/assets/style/index.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import Docs from '~/layouts/Docs.vue'
import Section from '~/components/Section.vue'

import VueScrollTo from 'vue-scrollto'

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyFontFamily: ['Helvetica', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

export default function (Vue, {
  head,
}) {
  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', Docs)
  Vue.component('Section', Section)

  Vue.use(VueScrollTo)

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })
}