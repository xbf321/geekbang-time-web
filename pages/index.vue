<template>
  <div>
    <CourseList :pageIndex="pageIndex" :did="did" :cid="cid" />
  </div>
</template>
<script setup>
const route = useRoute();
const { pageIndex, did, cid } = route.query;
console.info('index', pageIndex, did, cid);
</script>