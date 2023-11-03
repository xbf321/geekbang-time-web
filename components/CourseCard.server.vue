<template>
  <div class="course-card bg-white rounded flex p-2">
    <div class="cover-wrapper flex-none overflow-hidden rounded-md">
      <img class="cover" :src="rectangle" />
    </div>
    <div class="flex flex-col pl-2  w-full">
      <h1 class="font-medium mb-1 line-clamp-1 leading-5"><a class="hover:underline hover:text-orange-400" :href="'/catalog.html?courseId=' + id">{{ title }}</a></h1>
      <div class="text-xs rounded bg-gray-100 p-1 mb-1 text-gray-400 line-clamp-2 subtitle">{{ subtitle }}</div>
      <div class="text-xs rounded bg-gray-100 p-1 mb-1 text-gray-400 name">{{ name }}</div>
      <div class="text-xs rounded bg-gray-100 p-1 mb-1 text-gray-400 line-clamp-1 intro">{{ intro }}</div>
      <div class="text-xs text-gray-500">{{ unit }}</div>
    </div>
  </div>
</template>
<script setup>
  const nuxtApp = useNuxtApp();
  const { props } = nuxtApp.ssrContext.islandContext;
  const { title, subtitle, author, cover, article, id, unit } = props.data;
  const { name, intro } = author;
  const { rectangle } = cover;
</script>
<style scoped lang="scss">
.course-card {
  box-shadow: 0 4px 30px 0 rgba(238,242,245,.8);

  @media (min-width: 640px) {
    width: 327px;
  }
}

.cover-wrapper,
.cover {
  width: 102px;
  height: 136px;
}
.cover-wrapper {
  background: #eee;
}
.cover {
  transition: all .2s;
}
.subtitle {
  min-height: 38px;
}
.name,
.intro {
  height: 22px;
}
</style>>
