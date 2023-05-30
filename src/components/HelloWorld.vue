<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is a simple template
      <a
        href="https://github.com/pinegrow/pg-iles"
        target="_blank"
        rel="noopener"
        ><BaseIcon
          style="
            display: inline-block;
            margin-left: 4px;
            margin-bottom: -4px;
            margin-right: 4px;
          "
          name="i-line-md-github-twotone"
      /></a>
      that pre-includes the
      <a
        href="https://www.npmjs.com/package/@pinegrow/iles-module"
        target="_blank"
        rel="noopener"
        >Pinegrow îles Module</a
      >
      and other goodies for your drag & drop experience.
    </h3>
    <br />
    <h3>
      Visually design your components with Vue Designer -
      <a href="https://pinegrow.com/vue-designer" target="_blank" rel="noopener"
        >Try Now</a
      >
    </h3>
  </div>
</template>
<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
