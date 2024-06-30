<!-- 直线 关系图 -->
<template>
  <div class="relational-ec">
    <chart-base-v3 :options="options"></chart-base-v3>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted, reactive, watch } from "vue";
// props值
const props = defineProps({
  optionsData: {
    type: Object,
    default: () => {
      return {
        data: [],
        links: [],
        curveness: 0.35,
      };
    },
  },
});

// 关系图 ec 数据
const options = reactive<{ [key: string]: any }>({
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  series: [
    {
      type: "graph", // 关系图
      layout: "none",
      symbolSize: 50,
      roam: true,
      label: {
        position: "top",
        normal: {
          show: true,
        },
      },
      edgeSymbol: ["circle", "arrow"],
      edgeLabel: {
        show: true,
        fontSize: 12,
        fontWeight: "bold",
        color: "black",
        formatter: (params) => {
          const { value } = params;
          return value || "默认";
        }, // 这里设置连线文字的显示格式，{c} 表示显示连接线的值
      },
      data: props.optionsData.data,
      // 连线的配置
      links: props.optionsData.links,
      // 指引线 俩段点和箭头的大小配置
      edgeSymbolSize: [0, 10],
      // 指引线线的配置
      lineStyle: {
        normal: {
          opacity: 0.9,
          color: "green",
          width: 2, // 指引线粗细
          curveness: props.optionsData.curveness, // 指引线的曲率
          z: 5, // 设置曲线的 z 值，确保在节点上方
        },
      },
    },
  ],
});

watch(
  () => props,
  () => {
    const { data, links } = props.optionsData;
    options.series[0].data = data;
    options.series[0].links = links;
  },
  { deep: true, immediate: true }
);
</script>

<style scoped lang="scss">
// 公共组件 样式
@import "@/design/hooks.scss";
.relational-ec {
  width: 100%;
  height: 100%;
}
</style>
