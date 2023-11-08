<template>
  <h1 class="text-lg font-bold my-2 pb-1 border-b">课程</h1>
  <template v-if="list && list.length > 0">
    <div class="flex flex-col gap-3 sm:gap-3 sm:grid sm:grid-cols-4 mb-3">
      <CourseCard v-for="item in list" :key="item.id" :data="item" />
    </div>
    <div
      class="flex items-center justify-between"
    >
      <a :href="'?did=' + (did || 0) + '&cid=' + (cid || 0) + '&pageIndex=' + previousPage" class="text-white bg-orange-400 hover:bg-orange-600 rounded text-sm px-3 py-1 focus:outline-none">上一页 </a>
      <span>{{currentPage}} / {{ totalPages}}</span>
      <a :href="'?did=' + (did || 0) + '&cid=' + (cid || 0) + '&pageIndex=' + nextPage" class="text-white bg-orange-400 hover:bg-orange-600 rounded text-sm px-3 py-1 focus:outline-none">下一页 </a>
    </div>
  </template>
  <div v-else class="mb-3 text-center text-gray-400">
    暂无数据
  </div>
</template>
<script setup>
const nuxtApp = useNuxtApp();
const { props } = nuxtApp.ssrContext.islandContext;
const { did, cid, pageIndex } = props;
const pageSize = 32;
const { data: response } = await useFetch("/api/course-list", {
  query: {
    did,
    cid,
    pageIndex,
    pageSize,
  }
});
const { total, list } = response.value;
const totalPages = computed(() => {
  return Math.ceil(total / pageSize)
});
const previousPage = computed(() => {
  if (currentPage.value - 1 <= 1) {
    return 1;
  }
  return currentPage.value - 1;
});

const currentPage = computed(() => {
  if (!pageIndex) {
    return 1;
  }
  if (Number(pageIndex) > totalPages.value) {
    return totalPages.value;
  }
  return Number(pageIndex);
});

const nextPage = computed(() => {
  if (currentPage.value + 1 > totalPages.value) {
    return totalPages.value;
  }
  return currentPage.value + 1;
});

</script>
