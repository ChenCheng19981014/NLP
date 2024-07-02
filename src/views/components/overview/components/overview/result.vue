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
    padding-bottom: 400px;
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
        background-color: rgb(66, 142, 185);
        cursor: pointer;
      }
    }

    .tabs-item-active {
      color: $white;
      background-color: rgb(66, 142, 185);
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
import { useDebounceFn } from "@vueuse/core";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import KeyWord from "./components/keyword.vue";
import AutoAbstract from "./components/auto-abstract.vue";
// 路径
const route = useRoute();
// full path路劲
const { fullPath } = route;
// 基础路径
const basePath = ref(fullPath);
// 左侧列表
const leftTabs = ref<{ [key: string]: any }[]>([
  { name: "关键词提取", id: "overview-关键词提取", component: KeyWord },
  { name: "自动摘要", id: "overview-自动摘要", component: AutoAbstract },
  { name: "拼音转写", id: "overview-拼音转写", component: KeyWord },
  { name: "繁简转换", id: "overview-繁简转换", component: KeyWord },
  { name: "文本推荐", id: "overview-文本推荐", component: KeyWord },
  { name: "句法分析", id: "overview-句法分析", component: KeyWord },
  { name: "文本分类", id: "overview-文本分类", component: KeyWord },
  { name: "情感分析", id: "overview-情感分析", component: KeyWord },
  { name: "文本聚类", id: "overview-文本聚类", component: KeyWord },
  { name: "事件抽取", id: "overview-事件抽取", component: KeyWord },
  { name: "关系抽取", id: "overview-关系抽取", component: KeyWord },
]);

// 当前选中的index
const leftSelectedIndex = ref(0);

// 元素是否在移动中
const isMoving = ref(false);

// 跳转至 指定的锚点位置
const jumpToPosition = (item: { [key: string]: any }, index: number) => {
  isMoving.value = true;
  const rightDiv = document.querySelector(`#${item.id}`);
  rightDiv?.scrollIntoView({ block: "start", behavior: "smooth" });
  leftSelectedIndex.value = index;
  // 可以进行 滚动了
  useDebounceFn(() => (isMoving.value = false), 800)();
};

// 判断选中的菜单
const judegeSelectedMenu = () => {
  if (isMoving.value) return;
  const menu = document.querySelector(".right-context") as Element;
  const childArr = Array.from(menu.children);
  const winInnerHeight = window.innerHeight;
  const flagHeight = winInnerHeight / 2;
  const near = childArr.reduce((prev, curr) => {
    const { top: prevTop } = prev.getBoundingClientRect();
    const { top: currTop } = curr.getBoundingClientRect();
    return Math.abs(currTop - flagHeight) < Math.abs(prevTop - flagHeight)
      ? curr
      : prev;
  });
  const index: number = Number(near.getAttribute("sort") || 0);
  leftSelectedIndex.value = index;
  // console.log(" 滚动信息 :", index, near);
};

// 进行防抖处理 再次进入
const debouncedSelectTabs = useDebounceFn(() => judegeSelectedMenu(), 10);

onMounted(() => {
  // 滚动检测
  window.addEventListener("scroll", () => debouncedSelectTabs(), true);
});
</script>

<template>
  <!-- 分析结果 -->
  <div class="result">
    <!-- 左侧affix组件 -->
    <el-affix target=".container" :offset="50">
      <div class="left-tabs" v-if="true">
        <!-- 左侧内容 -->
        <div
          @click="jumpToPosition(i, index)"
          class="tabs-item"
          :sort="index"
          :class="{ 'tabs-item-active': index === leftSelectedIndex }"
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
        :sort="index"
        :key="index + '_right_context'"
        :class="i.id"
        class="context-item"
      >
        <!-- <component :is="i.component" /> -->

        <!-- 仪表盘 -->
        <yibiaopan-ec />
      </div>
    </div>
  </div>
</template>
