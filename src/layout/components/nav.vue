<style lang="scss">
@import "@/design/hooks.scss";

.global-nav {
  background: #000;

  .show-function {
    width: 100%;
    height: 100%;
    border: none !important;
    background-color: #2e8965;
    border-radius: 0px;
    color: $white;
    line-height: normal;
    font-family: "pm";
    position: relative;
  }

  .show-function::after {
    position: absolute;
    content: "";
    width: 0px;
    right: 8px;
    height: 0px;
    top: 18px;
    border: 5px solid transparent;
    border-top-color: #fff;
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
      content: "";
      bottom: 0px;
      width: 100%;
      height: 1px;
      background-color: #e4ecf3;
    }
  }

  .function-list :last-child::after {
    display: none;
  }
}
</style>
<style scoped lang="scss">
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
      background-color: #892e65;
      cursor: pointer;
    }

    .function {
      width: 94px;
      height: 100%;
    }
  }
}
</style>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { reactive, ref } from "vue";
// 路由
const router = useRouter(); // 跳转 功能
// 功能 列表
const functionList = reactive([
  { id: 1, funName: "综合演示", routePath: "" },
  { id: 2, funName: "文本对比", routePath: "/compare" },
  { id: 3, funName: "实体、摘要、事件", routePath: "/pinyin" },
  { id: 4, funName: "数据单位抽取", routePath: "/pinyin" },
  { id: 5, funName: "拼音检索", routePath: "/pinyin" },
  { id: 6, funName: "敏感度识别", routePath: "/censor" },
  { id: 7, funName: "FastText分类", routePath: "/pinyin" },
  { id: 8, funName: "相似检索", routePath: "/pinyin" },
  { id: 9, funName: "FastText分类", routePath: "/pinyin" },
  { id: 10, funName: "相似度计算", routePath: "/pinyin" },
  { id: 11, funName: "热点聚类", routePath: "/pinyin" },
]);

// 接口使用文档 地址
const apiHref = ref("https://ai.trs.cn/ckm/web/api-docs");

// 开启新页面
const openNewPage = (url: string) => {
  window.open(url);
};

// 首页 最右侧dialog弹出状态
const navDialogStatus = ref(false);

// 跳转路由
const jumpRouter = (i: any) => {
  const { routePath } = i;
  // 更新当前的模块
  router.replace({ path: `/overview${routePath}` }); // 添加查询参数
  navDialogStatus.value = false;
  // console.log("跳转路由:", i, navDialogStatus.value);
};
</script>

<template>
  <!-- 全局顶部 -->
  <div class="global-nav">
    <!-- 左侧 -->
    <div class="left">CKM</div>
    <!-- 右侧 -->
    <div class="right">
      <div
        class="api"
        @click="
          () => {
            openNewPage(apiHref);
          }
        "
      >
        接口使用手册
      </div>
      <div class="function">
        <!-- 弹窗 -->
        <el-popover
          popper-class="show-function-dialog"
          placement="bottom"
          :width="250"
          :visible="navDialogStatus"
          trigger="click"
        >
          <template #reference>
            <el-button class="show-function" @click="navDialogStatus = true"
              >功能演示</el-button
            >
          </template>
          <div class="function-list">
            <div
              @click="jumpRouter(i)"
              class="list-item"
              v-for="(i, index) in functionList"
              :key="index + '_funcName'"
            >
              {{ i.funName }}
            </div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>
