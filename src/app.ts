// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import 'uno.css'

import { defineApp } from 'iles'
import { createPinia } from 'pinia'
import { computed } from 'vue'

const link: any = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.svg',
  },
]
const noscript: any = []

export default defineApp({
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
  },
  head({ frontmatter, site }) {
    return {
      htmlAttrs: { lang: 'en-US' },

      // Other meta tags are added in MetaTags.vue using the Head componentsummary_large_image
      meta: [
        { property: 'charset', content: 'utf-8' },
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { property: 'author', content: site.author },
        { property: 'keywords', content: computed(() => frontmatter.tags) },
      ],
      // link,
      // noscript,
    }
  },
})
