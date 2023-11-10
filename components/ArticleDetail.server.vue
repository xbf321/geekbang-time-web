<template>
  <div class="main flex-1 flex flex-col pb-2">
    <div class="border-b p-3 text-lg font-medium text-gray-600">
      <div class="absolute mt-3.5 text-black ml-1.5 menu icon sm:hidden"></div>
      <a class="pl-8 sm:pl-0 hover:underline hover:text-orange-400" :href="'/catalog.html?courseId=' + courseId">{{courseTitle}}</a>
    </div>
    <div class="p-3 flex-1 h-full overflow-y-auto">
      <h1 class="text-2xl font-medium mb-1">{{ articleInfo.article_title }}</h1>
      <div class="text-sm text-gray-400 mb-2">
        {{ articleInfo.author_name }}
      </div>
      <template v-if="articleInfo.article_cover">
        <img
          class="rounded-lg max-h-80 mb-2"
          v-if="!articleInfo.article_cover_hidden"
          :src="attachmentProxy(articleInfo.article_cover)"
        />
      </template>
      <audio v-if="articleInfo.audio_download_url" controls class="!block my-2" height="100" width="100">
        <source :src="attachmentProxy(articleInfo.audio_download_url)" type="audio/mpeg">
        <embed height="50" width="100" :src="attachmentProxy(articleInfo.audio_download_url)">
      </audio>
      <div class="py-3 font-bold text-red-700 course-content" v-if="['p30', 'p35'].includes(articleInfo.product_type)">
        此课程为视频内容，请去官网查观看，-> 
        <template v-if="articleInfo.product_type === 'p30'">
          <a target="_blank" :href="'https://time.geekbang.org/opencourse/detail/' + courseId">去官网</a>。
        </template>
        <template v-if="articleInfo.product_type === 'p35'">
          <a target="_blank" :href="'https://time.geekbang.org/course/detail/'+ courseId + '-' + id">去官网</a>。
        </template>
      </div>
      <div
        class="leading-7 course-content"
        v-html="replaceImageTag(articleInfo.article_content || articleInfo.article_content_short)"
      />
    </div>
  </div>
</template>
<script setup>
  const nuxtApp = useNuxtApp();
  const { props } = nuxtApp.ssrContext.islandContext;
  const { id } = props;
  const { data: courseDetail } = await useFetch('/api/article-detail', {
    query: {
      id,
    }
  });
  const { raw_data: articleInfo, course_id: courseId, course_title: courseTitle } = courseDetail.value;
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
    :deep(a) {
      color: rgb(249 115 22);
      text-decoration: underline;
    }
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
    :deep(pre) {
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: rgb(22, 27, 34);
      border-radius: 6px;
      margin-bottom: 16px;
      color: #fff;
    }
  }
</style>
