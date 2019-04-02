import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-serif' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i'
  })
}
