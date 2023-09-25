<script setup lang="ts">
  import site from '@/site'
  import image from '@/screenshots/image.jpg'
  const { title, description, url } = site
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
  </Head>
</template>
