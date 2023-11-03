<template>
  <Head>
    <Link rel="icon" sizes="16x16" href="//static001.geekbang.org/static/time/icon/favicon-16x16.jpg"/>
    <Link rel="icon" sizes="32x32" href="//static001.geekbang.org/static/time/icon/favicon-32x32.jpg"/>
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 极客时间-轻松学习，高效学习-极客邦` : '极客时间-轻松学习，高效学习-极客邦';
  },
  ogTitle: '极客时间-轻松学习，高效学习-极客邦',
  description: '极客时间-轻松学习，高效学习-极客邦',
  ogDescription: '极客时间-轻松学习，高效学习-极客邦',
});
</script>
