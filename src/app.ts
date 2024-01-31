// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

import 'uno.css'

import { defineApp } from 'iles'
import pinia from '@/plugins/pinia'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
})
