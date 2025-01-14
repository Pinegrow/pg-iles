import 'uno.css'

import { defineApp } from 'iles'
import pinia from '@/plugins/pinia'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
})
