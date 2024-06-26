<style scoped lang="scss">
@import "@/design/hooks.scss";

.overview {
   width: 100%;
   height: 100%;
   @include center;
   color: black;
}
</style>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
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
            position: 'top',
            normal: {
               show: true,
            },
         },
         edgeSymbol: ["circle", "arrow"],
         edgeLabel: {
            show: true,
            fontSize: 12,
            fontWeight: 'bold',
            color: 'black',
            formatter: (params) => {
               const { value } = params;
               return value || '默认'
            }  // 这里设置连线文字的显示格式，{c} 表示显示连接线的值
         },
         data: [],
         // 连线的配置
         links: [],
         // 指引线 俩段点和箭头的大小配置
         edgeSymbolSize: [0, 10],
         // 指引线线的配置
         lineStyle: {
            normal: {
               opacity: 0.9,
               color: "green",
               width: 2, // 指引线粗细
               curveness: 0.35, // 指引线的曲率
               z: 5 // 设置曲线的 z 值，确保在节点上方
            },
         },
      },
   ],
});

// 初始化
onMounted(() => {
   dealOptions();
});

// 处理 options
const dealOptions = () => {

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

   // 添加 数据
   dateList.map(({ name }, index) => {
      // 设置 数据
      options.series[0].data.push({
         name,
         x: 100 * index,
         y: 300,
         symbol: "rect",
         symbolSize: [60, 20],
         itemStyle: {
            color: "rgb(142, 214, 188)", // 设置节点填充颜色 borderColor: '#2f4554'  borderWidth: 2
         },
      });
   });

   const links = [
      {
         source: 3,
         target: 0,
         value: 'nn'
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

   // 添加关系
   options.series[0].links = links;
};
</script>

<template>
   <div class="overview">
      <!-- 关系图 -->
      <relational-ec :options="options" />
   </div>
</template>
