<!-- 树状 关系 图 -->
<template>
  <div class="yibiaopan-ec">
    <chart-base-v3 :options="options"></chart-base-v3>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted, reactive } from "vue";

// 仪表盘
const options = reactive({
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {},
    },
  },
  series: [
    {
      type: "感情分",
      detail: { formatter: "{value}%" },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [
            [0.3, "#6ced91"],
            [0.7, "#06a8fd"],
            [1, "#fe6b7d"],
          ],
        },
      },
      data: [{ value: 50, name: "感情分" }],
    },
  ],
});

// props 传值
const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="scss">
// 公共组件 样式
@import "@/design/hooks.scss";

.yibiaopan-ec {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
// 公共组件 样式
@import "@/design/hooks.scss";
</style>
