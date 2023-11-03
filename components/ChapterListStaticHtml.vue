<template>
  <div class="flex flex-col flex-wrap">
    <template v-for="chapter in data" :key="chapter.id">
      <h1 class="mb-1 font-medium">
        {{ chapter.title }}({{ chapter.article_count }}讲)
      </h1>
      <ul class="mb-3 ml-3 list-inside">
        <li class="mb-2" v-for="item in chapter.children" :key="item.id">
          <a class="block hover:underline hover:text-orange-400" :href="'/detail.html?id=' + item.id">{{ item.article_title }}</a>
          <span class="text-sm text-gray-400">时长：{{ item.audio_time }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>
<script setup>
  const props = defineProps({
    data: {
      type: Array,
      default: () => {},
    },
  });
</script>