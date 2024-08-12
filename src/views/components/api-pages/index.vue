<template>
  <!-- Nlp项目文档 -->
  <div class="api-web" ref="apiWeb">
    <iframe
      class="api-docs"
      ref="apiDocs"
      :src="`${apiUrl}/swagger-ui/index.html`"
    ></iframe>
  </div>
</template>
s
<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const apiWeb = ref<Element | HTMLElement | null>(null);

const apiDocs = ref<Element | HTMLElement | null>(null);

const ENV = import.meta.env;

const { VITE_API_URL_One, VITE_API_URL_Two } = ENV;
// 文档地址
const apiUrl = ref(`${VITE_API_URL_One}`);

// 初始化 盒子高度
const initBoxHeight = () => {
  const rootDiv = document.querySelector(".overview")?.getBoundingClientRect();

  console.log(" rootDiv :", rootDiv);

  if (apiWeb.value && rootDiv) {
    // 设置盒子高度为视口高度的一半（示例）
    (apiWeb.value as HTMLElement).style.height = `${rootDiv?.height}px`;
    (apiDocs.value as HTMLElement).style.height = `${rootDiv?.height + 58}px`;
  }
};

onMounted(() => {
  nextTick(() => initBoxHeight());
});
</script>

<style scoped lang="scss">
.api-web {
  width: 100%;

  .api-docs {
    margin-top: -60px;
    width: 100%;
    height: 100%;
  }
}
</style>
