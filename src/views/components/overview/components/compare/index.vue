<style scoped lang="scss">
@import "@/design/hooks.scss";

.compare {
  width: 100%;
  height: 100%;
  @include center;
  color: white;

  .container {
    width: 1164px;
    height: 490px;
    background-color: black;
    font-size: $base-font;
    @include center;
  }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <!-- 文本对比 -->
  <div class="compare">
    <!-- 内容 -->
    <div class="container">文本对比</div>
  </div>
</template>
