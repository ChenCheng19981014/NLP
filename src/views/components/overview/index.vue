<style scoped lang="scss">
@import "@/design/hooks.scss";

.overview {
  width: 100%;
  height: auto;
  min-height: 1080px;
  @include center;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  // overflow: auto;

  .overview-top {
    width: 1164px;
    height: auto;

    .overview-sub {
      width: 100%;
      height: 331px;
      background-color: #f6f6f6;
    }
  }

  .container {
    width: 1164px;
    height: auto;

    .overview-parting-line {
      @include center;
      width: 100%;
      height: 32px;
      font-size: 24px;
      line-height: 32px;
      color: #565656;
      justify-content: flex-start;
      padding: 40px;
    }

    .container-result {
      width: 100%;
      height: auto;
    }
  }
}
</style>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, reactive, onMounted, watch } from "vue";
import { ElBacktop } from "element-plus"; // 根据具体的导入路径调整
import TopSub from "./components/overview/top-submission.vue";
import Result from "./components/overview/result.vue";

// 是否有返回接口 判断字符
const haveResult = ref(false);
// 提交 文本
const subText = (data: any) => {
  haveResult.value = data ? true : false;
  ElMessage({
    type: "success",
    message: "模拟接口请求成功~",
  });
  console.log("subText文本:", data);
};

// 初始化
onMounted(() => {});

// 是否是首页
const isOverViews = ref(false);
// 路由 信息
const route = useRoute();

watch(
  () => route,
  (to, from) => {
    // 是否为首页  首页显示首页内容
    isOverViews.value = to.name === "overview";

    // 结果清空
    haveResult.value = false;

    // console.log("是否为首页overViews:", isOverViews.value, routerName);
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <!-- overview 首页 -->
  <div class="overview">
    <!-- 顶部 -->
    <div class="overview-top" v-if="isOverViews">
      <!-- 文本提交 -->
      <TopSub class="overview-sub" @subText="subText" />
    </div>

    <!-- 内容 -->
    <div class="container" v-if="haveResult && isOverViews">
      <!-- 分析结构 分割线 -->
      <div class="overview-parting-line">
        分析结果-----------------------------------------------------------------------------------
      </div>
      <!-- 详细的内容 -->
      <Result class="container-result"></Result>
    </div>

    <!-- 其他模块 -->
    <router-view />
  </div>
</template>
