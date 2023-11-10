<template>
  <div class="course-card bg-white rounded flex p-2">
    <div class="cover-wrapper bg-gray-100 flex-none overflow-hidden rounded-md">
      <img class="cover" :src="attachmentProxy(rectangle)" />
    </div>
    <div class="flex flex-col pl-2  w-full">
      <h1 class="font-medium mb-1 line-clamp-2 leading-5"><a class="hover:underline hover:text-orange-400" :href="'/catalog.html?courseId=' + id">{{ name }}：{{ title }}</a></h1>
      <div class="text-xs rounded bg-gray-100 p-1 mb-1 text-gray-400 line-clamp-2 subtitle">{{ subtitle }}</div>
      <div class="text-xs rounded bg-gray-100 p-1 mb-2 text-gray-400 line-clamp-1 intro">{{ intro }}</div>
      <div class="text-xs text-gray-500">{{ renderUnit(count_pub || 0, count || 0) }}</div>
    </div>
  </div>
</template>
<script setup>
  const nuxtApp = useNuxtApp();
  const { props } = nuxtApp.ssrContext.islandContext;
  const { id, title, raw_data: rawData } = props.data;
  const { subtitle, author, cover, unit, article, is_opencourse, type } = rawData;
  const { name, intro } = author;
  const { rectangle } = cover;
  const { count_pub, count } = article || {};
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
  .subtitle {
    min-height: 38px;
  }
  .name,
  .intro {
    height: 22px;
  }
</style>