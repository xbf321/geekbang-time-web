<template>
  <div class="h-full flex">
    <div class="hidden sm:flex flex-none w-80 p-3 pt-0 border-r overflow-hidden flex-col">
      <Logo />
      <div class="flex-1 h-full overflow-y-auto">
        <ChapterListOnlyServer :articleId="id"/>
      </div>
    </div>
    <ArticleDetail :id="id" />
  </div>
</template>
<script setup>
  definePageMeta({
    layout: 'full-screen',
  });

  const route = useRoute();
  const { id } = route.query;
</script>