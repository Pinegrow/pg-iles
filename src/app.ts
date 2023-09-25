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

export default defineApp({
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
  },
})
