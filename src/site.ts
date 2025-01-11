// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Vue Designer',
  description: 'Vue Designer îles with CSS - Quick start template',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pg-iles-css.netlify.app',
  github: 'https://github.com/pinegrow/natures-delight-with-iles-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  navs: {
    primary: [{ title: 'Home', icon: 'i-mdi-home', to: '/' }],
    secondary: [{ title: 'About', icon: 'i-mdi-home', to: '/about' }],
  },
}
