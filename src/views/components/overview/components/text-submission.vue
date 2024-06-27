<script setup lang="ts">
import { ref } from "vue";
// 文本
const textarea = ref("");
</script>

<template>
  <!-- 文本提交 -->
  <div class="text-submission">
    <el-input
      class="sub-input"
      v-model="textarea"
      style="width: 100%"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="Please input"
    />
    <el-button type="primary">提交文本</el-button>
  </div>
</template>

<style scoped lang="scss">
@import "@/design/hooks.scss";
.text-submission {
  @include center;
  width: 100%;
  height: 100%;
  padding: 30px;
  margin-top: 50px;
  justify-content: space-around;
  flex-direction: column;
}
</style>

<style lang="scss">
.text-submission {
  .sub-input {
    width: 100%;
    height: 200px;
    > textarea {
      width: 100%;
      height: 100% !important;
    }
  }
}
</style>
