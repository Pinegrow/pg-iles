<script setup lang="ts">
  const { frontmatter, site, route } = usePage()
  const { title, description, ogImage, generator, tags } = frontmatter
  const canonicalUrl = new URL(route.path, site.url)

  useHeadAndMeta({ title, description, ogImage, canonicalUrl, generator, tags })

  const currentPath = computed(() => {
    return route.path
  })
</script>

<template>
  <div class="layout">
    <main>
      <slot />
    </main>
  </div>
</template>
<style>
  @import '~/assets/css/base.css';
</style>
