const image = new URL('./screenshots/image.png', import.meta.url).href

export default {
  title: `Vue Designer`,
  description: 'Vue Designer îles with CSS - Quick start template',
  image,
  author: 'Pinegrow',
  url: 'https://pg-iles.netlify.app',
  nav: [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
  ],
}
