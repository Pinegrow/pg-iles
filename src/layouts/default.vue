<script setup lang="ts">
  useHeadAndMeta()
</script>

<template>
  <div class="layout">
    <header></header>
    <main>
      <slot />
    </main>
  </div>
</template>
<style>
  @import '~/assets/css/base.css';
</style>
