<script setup lang="ts">
const {data: posts} = await useAsyncData('posts', ()=> queryContent('/blogs').find())
</script>

<template>
  <div class="container mx-auto">
    <ul>
      <li v-for="post of posts" :key="post._id">
        <div class="p-2">
          <div class="flex gap-4 border rounded-lg">
            <img :src="post.bannerImageExtension ? `/blogs/${post.image}` : '/firdausng_logo.png'" :alt="post.title" class="object-cover h-48 w-64 border rounded-l-lg max-w-64"/>
            <div class="flex flex-col p-2">
              <NuxtLink :to="post._path">
                <p class="font-bold">{{ post.title }}</p>
              </NuxtLink>
              <p class="grow">{{post.description}}</p>
              <NuxtLink :to="post._path" class="flex my-3 gap-3">
                <p class="p-3 text-white-600 bg-slate-200 dark:bg-slate-700 rounded-lg border-2 border-slate-400 shadow-md shadow-slate-600/50 dark:shadow-slate-50/50">More..</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>