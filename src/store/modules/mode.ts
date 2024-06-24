import { defineStore } from "pinia";
import { ref } from "vue";

// 模式 映射表
const modeMap = [
  { name: "经济运行模式" },
  { name: "需求响应模式" },
  { name: "辅助服务模式" },
];

/**
 *  @Author: cc
 *  @description:  当前 首页运行的模式
 */
export const Mode = defineStore(
  "currentMode",
  () => {
    // 当前模式
    const currentMode = ref<string>("经济运行模式");
    // 当前模式 索引
    const currentModeIndex = ref(0);

    const currentTabs = ref(""); // 当前的 tabs 蓝图名称
    //    子类模式
    const childMode = ref<string>("");

    const updataMode = (data: string) => {
      currentMode.value = data;
      // 当前模式 索引
      currentModeIndex.value = modeMap.findIndex((item) => item.name === data);
      // console.log("当前模式:", currentMode);
    };

    const updateChildMode = (childModeName: string) => {
      childMode.value = childModeName;
    };

    // 更新 当前的 tabs 蓝图名称
    const updateTabs = (name: string) => {
      currentTabs.value = name;
    };

    return {
      childMode,
      currentMode,
      updataMode,
      currentModeIndex,
      updateChildMode,
      currentTabs,
      updateTabs,
    };
  },
  {
    // 配置第三个参数
    persist: {
      storage: sessionStorage,
      key: "Mode",
    },
  }
);
