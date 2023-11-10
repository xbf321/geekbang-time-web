<template>
  <div class="my-2">
    <h1 class="text-3xl font-medium my-1">{{ author.name }}：{{ title }}</h1>
    <h2 class="text-sm mb-1 text-gray-600">{{ subtitle }}</h2>
    <div class="text-sm mb-1 text-gray-500">
      <div class="mb-1">
        <span>{{ author.intro }}</span>
      </div>
      <div>{{ author.brief }}</div>
    </div>
    <div class="text-sm mb-2 text-gray-400">{{ renderUnit(count_pub || 0, count || 0) }}</div>
    <div class="tab mb-2">
      <div class="flex">
        <div
          class="tab-item mr-2 py-1 cursor-pointer text-lg"
          :class="
            selectedTabIndex === 0
              ? 'border-b-2 border-orange-600 text-orange-600'
              : ''
          "
          @click="onChangeTab(0)"
        >
          课程介绍
        </div>
        <div
          class="tab-item py-1 cursor-pointer text-lg"
          :class="
            selectedTabIndex === 1
              ? 'border-b-2 border-orange-600 text-orange-600'
              : ''
          "
          @click="onChangeTab(1)"
        >
          课程目录
        </div>
      </div>
      <div class="border-b" />
    </div>
    <template v-if="selectedTabIndex === 0">
      <div
        class="leading-6 content"
        v-html="replaceImageTag(introContent || '') || ''"
      />
    </template>
    <template v-else>
      <span v-if="chapters.length === 0">loading...</span>
      <ChapterListStaticHtml :data="chapters" />
    </template>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: 'only-with-header',
  });
  const selectedTabIndex = ref(0);
  const chapters = reactive({
    chapters: [],
    articles: [],
  });
  const route = useRoute();
  const { courseId } = route.query;
  const { data: courseInfo } = await useFetch('/api/course-detail', {
    query: {
      courseId,
    },
    transform: (item) => {
      const { id, title, raw_data: originRawData } = item;
      const { subtitle, author, seo, extra, article } = originRawData;
      const result = {
        id,
        title,
        raw_data: {
          subtitle,
          author: {
            name: author.name,
            info: author.info,
            brief: author.brief,
          },
          seo,
          extra: {
            modules: extra.modules,
          },
          article: {
            count_pub: article.count_pub,
            count: article.count,
          },
        }
      };
      return result;
    },
  });
  const { title, raw_data: rawData } = courseInfo.value;
  const { subtitle, author, seo, extra, article } = rawData;
  const { count_pub, count } = article || {};
  const pageDescription = seo?.keywords?.join(',') || '';

  useSeoMeta({
    title,
    ogTitle: title,
    description: pageDescription,
    ogDescription: pageDescription,
  });

  watch(selectedTabIndex, (value) => {
    if (value === 1) {
      fetchChapters();
    }
  });

  const introContent = computed(() => {
    const { modules } = extra || {};
    const result = (modules || []).filter((module) => module.name === 'class_intro' || module.name === 'class_menu');
    const html = [];
    (result || []).map((item) => {
      html.push(`<h1 class="mb-2 text-xl font-bold">${item.title}</h1>`);
      html.push(`<div>${item.content}</div>`);
    });
    return html.join('');
  });

  function onChangeTab(index) {
    selectedTabIndex.value = index;
  }

  async function fetchChapters() {
    const { data } = await useFetch('/api/chapter-list-by-course', {
      query: {
        courseId,
      },
      server: false,
    });
    Object.assign(chapters, data.value);
  }
</script>

<style scoped lang="scss">
  .content {
    :deep(p) {
      margin-bottom: 16px;
    }
    :deep(h2) {
      font-weight: 600;
      font-size: 14px;
    }
  }
</style>
