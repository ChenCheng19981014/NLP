<style scoped lang="scss">
@import "@/design/hooks.scss";

.result {
  width: 100%;
  height: auto;
  @include center;
  justify-content: space-between;

  .context-item {
    width: 100%;
    height: 300px;
    background-color: #777;
    @include center;
    color: #fff;
    font-size: 20px;
    font-family: "pm";
  }

  .right-context {
    width: 940px;
    height: 100%;
    @include center;
    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
  }
}
</style>
<style lang="scss">
@import "@/design/hooks.scss";

// 左侧 锚点
.result .el-affix {
  width: 200px;
  margin-bottom: auto;

  .left-tabs {
    width: 200px;
    background-color: rgb(246, 246, 246);
    @include center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: auto;
    padding: 20px;
    gap: 10px;

    .tabs-item {
      width: 100%;
      height: 33px;
      @include center;
      position: relative;

      &:hover {
        color: $white;
        background-color: #777;
        cursor: pointer;
      }
    }

    .tabs-item::after {
      position: absolute;
      content: "";
      bottom: -5px;
      width: 100%;
      height: 1px;
      background-color: rgb(226, 226, 226);
    }
  }

  .left-tabs :last-child::after {
    display: none;
  }
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
// 路径
const route = useRoute();
// full path路劲
const { fullPath } = route;
// 基础路径
const basePath = ref(fullPath);
// 左侧列表
const leftTabs = ref([
  { name: "关键词提取", id: "overview-1" },
  { name: "自动摘要", id: "overview-1" },
  { name: "拼音转写", id: "overview-1" },
  { name: "繁简转换", id: "overview-1" },
  { name: "文本推荐", id: "overview-1" },
  { name: "句法分析", id: "overview-1" },
  { name: "文本分类", id: "overview-1" },
  { name: "情感分析", id: "overview-1" },
  { name: "文本聚类", id: "overview-1" },
  { name: "事件抽取", id: "overview-1" },
  { name: "关系抽取", id: "overview-1" },
]);
</script>

<template>
  <!-- 分析结果 -->
  <div class="result">
    <!-- 左侧affix组件 -->
    <el-affix target=".container" :offset="50">
      <div class="left-tabs" v-if="true">
        <!-- 左侧内容 -->
        <div
          class="tabs-item"
          v-for="(i, index) in leftTabs"
          :key="index + '_leftTabs'"
        >
          {{ i.name }}
        </div>
      </div>
    </el-affix>

    <!-- 右侧 内容 -->
    <div class="right-context" v-if="true">
      <div
        v-for="(i, index) in leftTabs"
        :id="i.id"
        :key="index + '_right_context'"
        :class="i.id"
        class="context-item"
      >
        {{ i.name }}
      </div>
    </div>
  </div>
</template>
