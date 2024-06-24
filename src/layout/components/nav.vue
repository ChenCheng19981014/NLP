<style scoped lang='scss'>
@import "@/design/hooks.scss";

.global-nav {
   width: 100%;
   height: 100%;
   @include center;
   justify-content: space-between;
   padding: 0px 20px;
   background-color: #438eb9;
   color: $white;
   font-family: "pm";

   .right {
      height: 100%;
      @include center;
      justify-content: space-between;

      .api {
         width: 94px;
         height: 100%;
         @include center;
         background-color: #892E65;
         cursor: pointer;
      }

      .function {
         width: 94px;
         height: 100%;
      }

   }
}
</style>

<style lang="scss">
@import "@/design/hooks.scss";

.global-nav {
   .show-function {
      width: 100%;
      height: 100%;
      border: none !important;
      background-color: #2E8965;
      border-radius: 0px;
      color: $white;
      line-height: normal;
      font-family: "pm";
   }
}

.show-function-dialog {
   width: 100%;
   padding: 20px;
   gap: 15px;
   @include center;

   .function-list {
      width: 100%;
      @include center;
      flex-direction: column;
      cursor: pointer;

      .list-item {
         font-size: $base-font-small;
         height: 40px;
         width: 100%;
         @include center;
         justify-content: flex-start;
         position: relative;

         &:hover {
            color: $white;
            background-color: #777;
         }
      }

      .list-item::after {
         position: absolute;
         content: '';
         bottom: 0px;
         width: 100%;
         ;
         height: 1px;
         background-color: #e4ecf3;
      }


   }

   .function-list :last-child::after {
      display: none;
   }



}
</style>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
// 功能 列表
const functionList = reactive([
   { id: 1, funName: '综合演示' },
   { id: 2, funName: '文本对比' },
   { id: 3, funName: '实体、摘要、事件' },
   { id: 4, funName: '数据单位抽取' },
   { id: 5, funName: '拼音检索' },
   { id: 6, funName: '敏感度识别' },
   { id: 7, funName: 'FastText分类' },
   { id: 8, funName: '相似检索' },
   { id: 9, funName: 'FastText分类' },
   { id: 10, funName: '相似度计算' },
   { id: 11, funName: '热点聚类' },
])

</script>

<template>
   <!-- 全局顶部 -->
   <div class='global-nav'>
      <!-- 左侧 -->
      <div class="left">CKM</div>
      <!-- 右侧 -->
      <div class="right">
         <div class="api" @click="() => { window.open('https://ai.trs.cn/ckm/web/api-docs') }">接口使用手册</div>
         <div class="function">
            <!-- 弹窗 -->
            <el-popover popper-class="show-function-dialog" placement="bottom" :width="250" trigger="click">
               <template #reference>
                  <el-button class="show-function">功能演示</el-button>
               </template>
               <div class="function-list">
                  <div class="list-item" v-for="(i, index) in functionList" :key="index + '_funcName'">{{ i.funName }}
                  </div>
               </div>
            </el-popover>
         </div>
      </div>

   </div>
</template>