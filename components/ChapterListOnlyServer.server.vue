<template>
  <ChapterListStaticHtml :data="chapters" :articleId="articleId" />
</template>
<script setup>
  const nuxtApp = useNuxtApp();
  const { props } = nuxtApp.ssrContext.islandContext;
  const { articleId } = props;
  const { data: chapters } = await useFetch('/api/chapter-list-by-article', {
    query: {
      articleId,
    },
  });
</script>