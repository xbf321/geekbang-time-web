<template>
  <div class="my-2">
    <h1 class="text-3xl font-medium my-1">{{ courseInfo.title }}</h1>
    <h2 class="text-sm mb-1 text-gray-600">{{ courseInfo.subtitle }}</h2>
    <div class="text-xs mb-1 text-gray-400">
      <div class="mb-1">
        <span class="mr-2">{{ courseInfo.author.name }}</span>
        <span>{{ courseInfo.author.intro }}</span>
      </div>
      <div>{{ courseInfo.author.brief}} </div>
    </div>
    <div class="text-xs mb-2 text-gray-500">共{{ courseInfo.unit }}</div>
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
        v-html="introContent && introContent.content || ''"
      />
      <h3 class="font-medium my-2">课程目录</h3>
      <div><img :src="courseInfo.column.catalog_pic_url" /></div>
    </template>
    <template v-else>
      <ChapterListStaticHtml :data="chapters" />
    </template>
    
  </div>
</template>
<script setup>
definePageMeta({
  layout: "only-with-header",
});
const route = useRoute();

const selectedTabIndex = ref(0);
const chapters = ref([]);

const { courseId } = route.query;
const { data: courseInfo } = await useFetch("/api/course-detail", {
  query: {
    courseId,
  }
});

const { title: pageTitle, seo } = courseInfo.value;
const pageDescription = seo.keywords.join(',');

watch(selectedTabIndex, (value) => {
  if (value === 1) {
    fetchChapters();
  }
});

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
})

const introContent = computed(() =>
  courseInfo.value.extra.modules.find(
    (module) => module.name === "class_intro"
  )
);

function onChangeTab(index) {
  selectedTabIndex.value = index;
}

async function fetchChapters() {
  const { data } = await useFetch("/api/chapters", {
    query: {
      courseId,
    },
    server: false,
  });
  chapters.value = data.value;
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
