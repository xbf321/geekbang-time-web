<template>
  <div class="main flex-1 flex flex-col pb-2">
    <div class="border-b p-3 text-lg font-medium text-gray-600">
      <div class="absolute mt-3.5 text-black ml-1.5 menu icon sm:hidden"></div>
      <a class="pl-8 sm:pl-0 hover:underline hover:text-orange-400" href="/catalog.html?pid=100311101">大型 Android 系统重构实</a>
    </div>
    <div class="p-3 flex-1 h-full overflow-y-auto">
      <h1 class="text-2xl font-medium mb-1">{{ courseDetail.article_title }}</h1>
      <div class="text-sm text-gray-400 mb-2">
        {{ courseDetail.author_name }}
      </div>
      <img
        class="rounded-lg max-h-80 mb-2"
        v-if="!courseDetail.article_cover_hidden"
        :src="courseDetail.article_cover"
      />
      <div
        class="leading-7 course-content"
        v-html="courseDetail.article_content"
      />
    </div>
  </div>
</template>
<script setup>
const { data: courseDetail } = await useFetch("/api/article");
</script>
<style scoped lang="scss">
.menu.icon {
  width: 17px;
  height: 1px;
  background-color: currentColor;
}

.menu.icon:before {
  content: '';
  position: absolute;
  top: -5px;
  left: 0;
  width: 17px;
  height: 1px;
  background-color: currentColor;
}

.menu.icon:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 0;
  width: 17px;
  height: 1px;
  background-color: currentColor;
}


.course-content {
  :deep(p) {
    margin-bottom: 16px;
  }
  :deep(ul) {
    list-style: disc;
    margin-left: 26px;
    margin-bottom: 10px;
  }
  :deep(h2) {
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
  }
  :deep(h3) {
    font-size: 16px;
    padding: 10px 0;
    font-weight: 500;
  }
  :deep(img) {
    border: 1px solid gray;
    margin: 10px 0;
    max-width: 80%;
    border-radius: 6px;
    background-color: #eee;
  }
}
</style>
