<template>
  <!-- 关键字 -->
  <div class="keyWord">
    <h1>关键字 组件</h1>

    <!-- 关系图 -->
    <relational-ec :optionsData="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
// 关系图 ec 数据
const options = reactive<{ [key: string]: any }>({
  data: [],
  links: [],
  // 指示线 曲率
  curveness: 0.35,
});
// 处理 options
const dealOptionsData = () => {
  // 基础 数据
  const dateList = [
    {
      name: "root",
    },
    {
      name: "习近",
    },
    {
      name: "主席",
    },
    {
      name: "特使",
    },
    {
      name: "cc",
    },
    {
      name: "xwy",
    },
  ];

  //  指示线 关系
  const links = [
    {
      source: 3, // 从那一条开始
      target: 0, // 目标点位
    },
    {
      source: 3,
      target: 1,
    },
    {
      source: 3,
      target: 2,
    },
    {
      source: 3,
      target: 4,
    },
    {
      source: 3,
      target: 5,
    },
  ];

  // 更新 options.data 的方法，确保响应性
  const updateData = () => {
    options.data = dateList.map(({ name }, index) => ({
      name,
      x: 100 * index,
      y: 300,
      symbol: "rect",
      symbolSize: [60, 20],
      label: {
        show: true,
        position: "insideTopLeft",
        formatter: (params) => {
          return [`{a|${params.name}}`, "{b|动词}"].join("\n");
        },
        rich: {
          a: { color: "black" },
          b: { marginTop: 100, height: 40 },
        },
      },
      itemStyle: {
        color: "rgb(142, 214, 188)",
      },
    }));
  };

  // 更新 options.links 的方法，确保响应性
  const updateLinks = () => {
    options.links = links.map(({ source, target }, index) => ({
      source,
      target,
      value: `第${index + 1}条线`,
      lineStyle: {
        curveness: source > target ? -options.curveness : options.curveness,
      },
    }));
  };

  // 初始化时调用一次数据更新方法
  updateData();
  updateLinks();
};

// 初始化
onMounted(() => {
  // 处理图表 options
  dealOptionsData();
});
</script>

<style scoped lang="scss">
@import "@/design/hooks.scss";

.keyWord {
  width: 100%;
  height: 100%;
  @include center;
  flex-direction: column;
}
</style>
