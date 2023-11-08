<template>
  <div>
    <video
      v-show="videoInfo.url"
      id="video-player"
      class="video-js w-full h-96"
      controls
      preload="auto"
      :poster="videoInfo.previewImageUrl"
    >
      <source :src="videoInfo.url" type="application/x-mpegURL" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that<a
          href="https://videojs.com/html5-video-support/"
          target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <h1 class="text-3xl font-medium my-3">{{ title }}</h1>
    <div class="text-sm mb-1 text-gray-600">{{ subtitle }}</div>
    <div class="text-sm mb-2 text-gray-500">
      {{ author.name }} | {{ author.intro }}
    </div>
    <div class="text-sm mb-2 text-gray-400">{{ author.brief }}</div>
    <div
      class="leading-6 content"
      v-html="replaceImageTag(introContent || '') || ''"
    />
  </div>
</template>
<script setup>
import videojs from "video.js";
import "video.js/dist/video-js.css";
definePageMeta({
  layout: "only-with-header",
});
const videoInfo = reactive({
  url: "",
  previewImageUrl: "",
});
const route = useRoute();
const { courseId } = route.query;
const { data: courseInfo } = await useFetch("/api/course-detail", {
  query: {
    courseId,
  },
});
const { title, raw_data: rawData } = courseInfo.value;
const { subtitle, author, article, extra } = rawData || {};
const { id: articleId } = article || {};
if (articleId) {
  const { data: articleInfo } = await useFetch("/api/article-detail", {
    query: {
      id: articleId,
    },
  });
  const { video_cover, hls_videos } = articleInfo.value.raw_data || {};

  videoInfo.previewImageUrl = attachmentProxy(video_cover);
  videoInfo.url = m3u8Proxy(hls_videos?.ld?.url || '');
}

const introContent = computed(() => {
  const html = [];
  (extra?.modules || []).map((item) => {
    html.push(`<h1 class="mb-2 text-xl font-bold">${item.title}</h1>`);
    html.push(`<div class="mb-2 border-b pb-2">${item.content}</div>`);
  });
  return html.join("");
});
const initVideoPlayer = () => {
  videojs("video-player");
};
onMounted(() => {
  nextTick(() => {
    initVideoPlayer();
  });
});
</script>
