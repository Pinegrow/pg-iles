import { usePage } from 'iles'
import siteMeta from '@/site'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useSchemaOrg, defineWebSite, defineWebPage } from '@unhead/schema-org'

import imgUrl from '@/screenshots/image.jpg'

import { fontUrls } from '@/utils/font'

import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

export const useHeadAndMeta = () => {
  const link: any = [
    // ...[
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_Ass52Hs.woff2',
    //   '/fonts/firacode-uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7Ng.woff2',
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_DMs5.woff2',
    // ].map(
    //   (href) =>
    //     ({
    //       rel: 'preload',
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: '',
    //       href,
    //     } as const),
    // ),
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  if (fontUrls.length) {
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fontUrls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${fontUrls.toString()}" />`,
    )
  }

  const {
    title: siteTitle,
    description: siteDescription,
    url,
    author,
    twitter,
    titleSeparator,
  } = siteMeta

  const { frontmatter } = usePage()

  const ogImageUrl = computed(() => `${url}${imgUrl}`)

  const pageMeta = computed(() => {
    return {
      title: frontmatter.title as string,
      description: frontmatter.description as string,
    }
  })

  const title = computed(() =>
    pageMeta.value.title
      ? `${pageMeta.value.title} ${titleSeparator} ${siteTitle}`
      : siteTitle,
  )

  useHead({
    title, // title is either defined statically within the <page> custom block in pages or dynamically by adding it to the page's frontmatter, and resolved here.

    // Other unused params - titleTemplate, templateParams
    titleTemplate: null,

    // Instead of setting meta via useHead, useSeoMeta is used.
    // meta: [],

    // useScript can also be used to load scripts
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
    htmlAttrs: { lang: 'en-US' },
    bodyAttrs: {},
    style: [],
  })

  const description = computed(
    () => pageMeta.value.description || siteDescription,
  )

  useSeoMeta({
    title,
    description,
    author,
    // charset: 'utf-8',
    // viewport: 'width=device-width, initial-scale=1',
    // keywords: route.meta.tags?.toString(),

    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: ogImageUrl,
    ogImageAlt: title,
    // // Other values - og:image:width, og:image:height, og:image:alt, og:image:type, og:image:secure_url
    ogUrl: url,
    ogSiteName: title,
    // // Other values - og: locale, og: type

    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImageUrl,
    twitterImageAlt: title,
    twitterSite: twitter,
    twitterCreator: '@techakayy',
    twitterCard: 'summary_large_image',
  })

  // https://unhead.unjs.io/schema-org/getting-started/setup#_3-add-site-schemaorg
  // https://nuxtseo.com/learn/mastering-meta/schema-org#reactivity-with-useschemaorg
  useSchemaOrg([
    defineWebSite({
      name: title.value,
    }),
    defineWebPage(),
  ])
}
