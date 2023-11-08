<template>
  <div class="flex flex-col flex-wrap">
    <template v-if="showChapter" v-for="chapter in mergeArticlesInChapters" :key="chapter.id">
      <h1 class="mb-1 font-medium">
        {{ chapter.title }}({{ chapter.article_count }}讲)
      </h1>
      <ul class="mb-3 ml-3 list-inside">
        <li class="mb-2" v-for="item in chapter.children" :key="item.id">
          <a class="block hover:underline hover:text-orange-400" :href="'/detail.html?id=' + item.id">{{ item.title }}</a>
          <span v-if="item.time" class="text-sm text-gray-400">时长：{{ item.time  }}</span>
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="mb-3 ml-3 list-inside">
        <li class="mb-2" v-for="item in innerArticles" :key="item.id">
          <a class="block hover:underline hover:text-orange-400" :class="Number(articleId) === Number(item.id) ? 'text-orange-500 underline' : ''" :href="'/detail.html?id=' + item.id">{{ item.title }}</a>
          <span v-if="item.time" class="text-sm text-gray-400">时长：{{ item.time  }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>
<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => {},
    },
    articleId: {
      type: Number,
      default: 0,
    },
  });
  const showChapter = computed(() => {
    const { chapters } = props.data;
    return chapters.length > 0;
  });

  const formatArticleItem = (articleInfo) => {
    const { id, title, raw_data: rawData } = articleInfo;
    return {
      id,
      title,
      time: rawData.product_type === 'c1' ? rawData.audio_time : rawData.video_time,
    };
  };

  const innerArticles = computed(() => {
    const { articles } = props.data;
    return articles.map((item) => formatArticleItem(item));
  });

  const mergeArticlesInChapters = computed(() => {
    const { chapters, articles } = props.data;
    return chapters.map((chapter) => {
      const { id, title, article_count } = chapter;
      const children = (articles.filter((item) => Number(item.chapter_id) === Number(id)) || []).map((item) => formatArticleItem(item));
      return {
        id,
        title,
        article_count,
        children,
      };
    });
  });
</script>