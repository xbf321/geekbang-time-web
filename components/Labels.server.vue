<template>
  <div class="flex mb-2">
    <span class="font-bold leading-7">方向：</span>
    <div class="flex-1">
      <a
        class="text-sm p-1 px-2 rounded-xl hover:text-orange-400"
        :class="item.selected ? 'font-medium bg-orange-400 text-white hover:text-white hover:bg-orange-600' : ''"
        :href="'?did=' + item.lid"
        v-for="item in direction"
        :key="item.lid"
        >{{ item.name }}</a
      >
    </div>
  </div>
  <div class="flex">
    <span class="font-bold leading-7">分类：</span>
    <div class="flex-1">
      <a
        class="text-sm p-1 px-2 rounded-xl hover:text-orange-400"
        :class="item.selected ? 'font-medium bg-orange-400 text-white hover:text-white hover:bg-orange-600' : ''"
        :href="'?did=' + did + '&cid=' + item.lid"
        v-for="item in categories"
        :key="item.lid"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>
<script setup>
  const nuxtApp = useNuxtApp();
  const { props } = nuxtApp.ssrContext.islandContext;
  const { data: allLabels } = await useFetch('/api/labels');
  let { did, cid } = props;
  const direction = computed(() => {
    let list = allLabels.value
      .filter((item) => item.pid === 0);
    list.unshift({
      lid: 0,
      name: '全部',
    });
    const itemByCid = allLabels.value.find((item) => item.lid === cid);
    if (itemByCid) {
      did = itemByCid.pid;
    }
    list = list.map((item) => {
      const { lid, name } = item;
      const selected = did === lid;
      return {
        lid,
        name,
        selected,
      };
    });
    return list;
  });
  const categories = computed(() => {
    let list = allLabels.value
      .filter((item) => {
        if (did === 0) {
          return item.pid !== 0;
        }
        return item.pid === did;
      });
    list.unshift({
      lid: 0,
      name: '全部',
    });
    list = list.map((item) => {
      const { lid, name } = item;
      const selected = cid === lid;
      return {
        lid,
        name,
        selected,
      };
    });
    return list;
  });
</script>