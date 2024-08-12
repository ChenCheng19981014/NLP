<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Nav from "./components/nav.vue";
// 路由 信息
const route = useRoute();
// 是否是首页
const isOverViews = ref(false);

// 是否为首页  首页显示首页内容
const setLayoutHeight = (to) => (isOverViews.value = to.name === "overview");

watch(
  () => route,
  (to) => {
    // 是否为首页  首页显示首页内容
    setLayoutHeight(to);
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="layout" :class="{ fullHeight: !isOverViews }">
    <!-- 顶部 -->
    <Nav class="layout-nav" />

    <!-- 内容 -->
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@import "@/design/hooks.scss";

.layout {
  width: 100%;
  // height: 100%;
  @include center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgb(228, 230, 233);

  .layout-nav {
    width: 100%;
    height: 45px !important;
  }
}

.fullHeight {
  height: 100%;
}
</style>
