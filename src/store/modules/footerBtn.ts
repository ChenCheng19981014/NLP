import { defineStore } from "pinia";
import { ref } from "vue";

/**
 *  @Author: cc
 *  @description:  当前 首页运行的模式
 */
export const StoreFooterBtnName = defineStore(
  "currentFooterBtnName",
  () => {
    // 底部右侧按钮 名称
    const currentFooterChoice = ref("");

    const updataChoiceName = (name: string) => {
      currentFooterChoice.value = name;
    };

    return {
      currentFooterChoice,
      updataChoiceName,
    };
  },
  {
    // 配置第三个参数
    persist: {
      storage: sessionStorage,
      key: "currentFooterBtnName",
    },
  }
);
