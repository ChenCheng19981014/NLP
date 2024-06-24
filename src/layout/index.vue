
  
<script setup lang='ts'>
import { ref } from 'vue';
import Nav from './components/nav.vue'
</script>
  
<template>
 <div class='layout'>

    <!-- 顶部 -->
    <Nav  style="height: 45px;" />

    <!-- 内容 -->
    <RouterView/>
 </div> 
</template>


<style scoped lang='scss'>
@import "@/design/hooks.scss";
.layout{
    width: 100%;
    height: 100%;
    @include center;
    flex-direction: column;
} 
</style>