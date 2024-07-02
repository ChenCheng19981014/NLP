<template>
  <div ref="chartRef" class="chart-base"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted, ref, watch, nextTick } from "vue";
// import "echarts-liquidfill";
// import "echarts-gl";
const chartRef = ref(null);
const emit = defineEmits(["loadOver"]);
let chartInstance = null;

const initChart = () => {
  if (!chartRef.value) {
    console.warn("图表容器不可用!");
    return;
  } else {
    nextTick(() => {
      try {
        // 执行第二次的时候将第一次的表格数据清除掉
        if (
          chartInstance != null &&
          chartInstance != "" &&
          chartInstance != undefined
        ) {
          chartInstance.dispose(); //销毁
        }

        chartInstance = echarts?.init(chartRef.value);
        chartInstance?.setOption(props.options);
        emit("loadOver", chartInstance);
        console.warn = () => {};
      } catch (error) {
        console.warn("无法加载图表：", error);
      }
    });
  }
};

// 创建一个 ResizeObserver 实例
const resizeObserver = new ResizeObserver(() => {
  chartInstance?.resize();
});

onMounted(() => {
  // 监听窗口大小变化
  window.addEventListener("resize", () => {
    if (chartInstance) {
      chartInstance.resize();
    }
  });
  if (chartRef.value) {
    resizeObserver.observe(chartRef.value);
  }
});

watch(
  () => chartRef,
  () => {
    initChart();
  },
  { deep: true, immediate: true }
);

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
  }
  if (chartRef.value) {
    resizeObserver.unobserve(chartRef.value);
  }
});

const props = defineProps({
  options: Object,
  loading: Boolean,
  delay: Number,
  changeClear: { type: Boolean, default: true },
  zoomLength: { type: Number, default: 7 },
  active: { type: Boolean, default: true },
  devicePixelRatio: { type: Number, default: 1 },
  tooltipType: {
    type: Object,
    default: () => ({
      type: "",
      eventName: "",
    }),
  },
  loadingStyle: {
    type: Object,
    default: () => ({
      text: "loading",
      color: "rgb(27, 166, 255)",
      textColor: "#FFFFFF",
      maskColor: "rgba(0, 0, 0, 0.5)",
      fontSize: 35,
      showSpinner: true,
      spinnerRadius: 30,
      lineWidth: 8,
    }),
  },
});

watch(
  () => props.options,
  (newOption) => {
    if (chartInstance) chartInstance.setOption(newOption);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.chart-base {
  width: 100%;
  height: 100%;
}
</style>
