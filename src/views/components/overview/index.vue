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
import TextSub from "./components/text-submission.vue";
import Result from "./components/result.vue";
// 指示线 曲率
const curveness = 0.35;

// 关系图 ec 数据
const options = reactive<any>({
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
      data: [],
      // 连线的配置
      links: [],
      // edges: [],
      // 指引线 俩段点和箭头的大小配置
      edgeSymbolSize: [0, 10],
      // 指引线线的配置
      lineStyle: {
        normal: {
          opacity: 0.9,
          color: "green",
          width: 2, // 指引线粗细
          curveness: curveness, // 指引线的曲率
          z: 5, // 设置曲线的 z 值，确保在节点上方
        },
      },
    },
  ],
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

  // 添加 每一条 数据
  options.series[0].data = dateList.map(({ name }, index) => {
    return {
      name,
      x: 100 * index,
      y: 300,
      symbol: "rect",
      symbolSize: [60, 20],
      label: {
        show: true,
        //   formatter: function (params) {
        //     return `${params.name}`;
        //   },
        position: "insideTopLeft",
        formatter: (params) => {
          return [`{a|${params.name}}`, "{b|动词}"].join("\n");
        },
        rich: {
          a: {
            color: "black",
          },
          b: {
            marginTop: 100,
            height: 40,
          },
        },
      },
      itemStyle: {
        color: "rgb(142, 214, 188)", // 设置节点填充颜色 borderColor: '#2f4554'  borderWidth: 2
      },
    };
  });

  // 添加关系
  options.series[0].links = links.map(({ source, target }, index) => {
    return {
      source,
      target,
      value: `第${index + 1}条线`,
      lineStyle: {
        // 设置边的样式，包括宽度、颜色等
        curveness: `${source > target ? -curveness : curveness}`, // 指引线的曲率
      },
    };
  });
};
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
onMounted(() => {
  // 处理图表 options
  dealOptionsData();
});

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
      <TextSub class="overview-sub" @subText="subText" />
    </div>

    <!-- 内容 -->
    <div class="container" v-if="haveResult && isOverViews">
      <!-- 分析结构 分割线 -->
      <div class="overview-parting-line">
        分析结果-----------------------------------------------------------------------------------
      </div>
      <!-- 详细的内容 -->
      <Result class="container-result"></Result>
      <!-- 关系图 -->
      <!-- <relational-ec :options="options" /> -->
    </div>

    <!-- 其他模块 -->
    <router-view />
  </div>
</template>
