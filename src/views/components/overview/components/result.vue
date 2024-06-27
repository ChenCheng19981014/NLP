<style scoped lang="scss">
@import "@/design/hooks.scss";
.result {
  width: 100%;
  height: 100%;
  @include center;
  justify-content: space-between;

  #section1 {
    width: 100%;
    height: 300px;
    background-color: #777;
    @include center;
    color: black;
    font-size: 20px;
  }
  #section2 {
    width: 100%;
    height: 300px;
    background-color: #777;
    @include center;
    color: black;
    font-size: 20px;
  }
  #section3 {
    width: 100%;
    height: 300px;
    background-color: #777;
    @include center;
    color: black;
    font-size: 20px;
  }

  .result-affix {
    flex: 1;
    height: 100%;
    @include center;
    flex-direction: column;
    justify-content: flex-start;
  }

  .right-context {
    flex: 9;
    height: 100%;
    @include center;

    flex-direction: column;
    // justify-content: flex-start;
    justify-content: space-between;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <!-- 分析结果 -->
  <div class="result">
    <!-- 左侧affix组件 -->
    <div class="result-affix" ref="result-affix">
      <el-affix :offset="60" :target="$refs.app">
        <el-anchor affix>
          <el-anchor-link :href="`#section1`"> section1 </el-anchor-link>
          <el-anchor-link :href="`#section2`"> section2 </el-anchor-link>
          <el-anchor-link :href="`#section3`"> section3 </el-anchor-link>
        </el-anchor>
      </el-affix>
    </div>

    <!-- 右侧 内容 -->
    <div class="right-context">
      <div id="section1">section1</div>
      <div id="section2">section2</div>
      <div id="section3">section3</div>
    </div>
  </div>
</template>
