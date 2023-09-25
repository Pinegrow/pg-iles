<script setup lang="ts">
  // import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  // import type { Script } from '@unhead/schema'
  // type TurboScript = Script & { once: true }

  import site from '@/site'
  import image from '@/screenshots/image.jpg'
  // import { pg_font_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const link: any = [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  // if (pg_font_urls.length) {
  //   const googleapis = 'https://fonts.googleapis.com'
  //   const gstatic = 'https://fonts.gstatic.com'
  //   link.push(
  //     { rel: 'dns-prefetch', href: googleapis },
  //     { rel: 'dns-prefetch', href: gstatic },
  //     { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
  //     { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
  //     {
  //       rel: 'preload',
  //       as: 'style',
  //       onload: "this.onload=null;this.rel='stylesheet'",
  //       href: pg_font_urls.toString(),
  //     },
  //   )
  //   noscript.push(
  //     `<link rel="stylesheet" crossorigin="anonymous" href="${pg_font_urls.toString()}" />`,
  //   )
  // }

  const { title, description, url } = site
  const { meta, frontmatter } = usePage()

  useHead({
    // title,
    // titleTemplate: (titleChunk) => {
    //   return titleChunk ? `${titleChunk} - ${title}` : title
    // },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'charset', content: 'utf-8' },
      {
        property: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'author', content: site.author },
      { property: 'keywords', content: computed(() => frontmatter.tags) },
    ],
    // script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <Head>
    <meta property="twitter:title" :content="title" />
    <meta property="twitter:description" :content="description" />
    <meta property="twitter:image" :content="image" />
    <meta property="twitter:image:alt" :content="title" />
    <meta property="twitter:site" :content="url" />
    <meta property="twitter:card" content="summary_large_image" />
    <!-- <meta property="twitter:card" content="summary" /> -->
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />
    <meta property="og:image:alt" :content="title" />
    <meta property="og:url" :content="url" />
  </Head>
</template>
