<template>
  <!-- 返回顶部锚点 -->
  <el-backtop target="#app" :right="100" :bottom="100" v-if="true" />
  <!-- 路由 -->
  <router-view v-if="true" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
</script>

<style scoped lang="scss">
@import "@/design/hooks.scss";
</style>
