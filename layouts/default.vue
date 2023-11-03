<template>
  <Header />
  <div class="container mx-auto pt-14 pb-4">
    <Labels :did="did" :cid="cid"/>
    <slot />
  </div>
</template>
<script setup>
const route = useRoute();
let { cid = 0, did = 0 } = route.query;
cid = parseInt(cid, 0);
did = parseInt(did, 0);
</script>