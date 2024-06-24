import { defineStore } from "pinia";
import { ref } from "vue";

/**
 *  @Author: cc
 *  @description:  当前 存储的level
 */
export const Level = defineStore(
  "energyStorageSceneLevel",
  () => {
    // 当前模式 索引
    const energyStorageSceneLevelIndex = ref(1);

    const updateLevelIndex = (index: number) => {
      energyStorageSceneLevelIndex.value = index;
    };

    return {
      energyStorageSceneLevelIndex,
      updateLevelIndex,
    };
  },
  {
    // 配置第三个参数
    persist: {
      storage: sessionStorage,
      key: "energy-storage-scene-level",
    },
  }
);
