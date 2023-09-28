<script setup lang="ts">
const data = [
  {name: 'Home', path: '/'},
  {name: 'Blogs', path: '/blogs'},
  {name: 'About', path: '/About'},
]
</script>

<template>
  <header class="flex flex-col justify-center items-center mx-auto container">
    <div class="w-full py-2 flex items-center justify-center">
      <div>
        <Logo />
      </div>
    </div>
    <nav class="flex gap-x-4">
      <ul class="flex gap-4">
        <li v-for="(link, index) in data" :key="index">
          <NuxtLink :to="link.path">{{link.name}}</NuxtLink>
        </li>
      </ul>
      <DarkThemeToggle />
    </nav>
  </header>
</template>

<style scoped>

</style>