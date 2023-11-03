<template>
  <ChapterListStaticHtml :data="chapters" />
</template>
<script setup>
  const { data: chapters } = await useFetch('/api/product-chapters');
</script>