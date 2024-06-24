import { defineStore } from "pinia";
import { ref } from "vue";
import overviewNormalIcon from "@/assets/images/global/overview-normal.png";
import pvSceneNormalIcon from "@/assets/images/global/pv-scene-normal.png";
import energyStorageSceneNormalIcon from "@/assets/images/global/energy-storage-scene-normal.png";
import chargingStationNormalIcon from "@/assets/images/global/charging-station-normal.png";
import coldHeatStorageNormalIcon from "@/assets/images/global/cold-heat-storage-normal.png";
import enterCompanyNormalIcon from "@/assets/images/global/enter-company-normal.png";
import zeroCenterNormalIcon from "@/assets/images/global/zero-center-normal.png";
import icomeNormalIcon from "@/assets/images/global/icome-normal.png";
import overviewActiveIcon from "@/assets/images/global/overview-active.png";
import pvSceneActiveIcon from "@/assets/images/global/pv-scene-active.png";
import energyStorageSceneActiveIcon from "@/assets/images/global/energy-storage-scene-active.png";
import chargingStationActiveIcon from "@/assets/images/global/charging-station-active.png";
import coldHeatStorageActiveIcon from "@/assets/images/global/cold-heat-storage-active.png";
import enterCompanyActiveIcon from "@/assets/images/global/enter-company-active.png";
import zeroCenterActiveIcon from "@/assets/images/global/zero-center-active.png";
import icomeActiveIcon from "@/assets/images/global/icome-active.png";

// 模式 映射表
export const routeMap = [
  // 默认首页
  {
    name: "首页",
    blueName: "首页",
    path: "overview",
    normalIcon: overviewNormalIcon,
    activeIcon: overviewActiveIcon,
  },

  // { name: "运行模式", path: "running-mode" }, // 三种运行模式 经济 电网 绿色

  {
    name: "光伏场景",
    path: "pv-scene",
    blueName: "光伏场景1",
    normalIcon: pvSceneNormalIcon,
    activeIcon: pvSceneActiveIcon,
  },

  {
    name: "储能场景",
    blueName: "储能场景1",
    path: "energy-storage-scene",
    normalIcon: energyStorageSceneNormalIcon,
    activeIcon: energyStorageSceneActiveIcon,
  },

  {
    name: "充电场景",
    blueName: "充电场景1",
    path: "charging-station",
    normalIcon: chargingStationNormalIcon,
    activeIcon: chargingStationActiveIcon,
  },

  {
    name: "蓄冷蓄热",
    blueName: "蓄冷蓄热1",
    path: "cold-heat-storage",
    normalIcon: coldHeatStorageNormalIcon,
    activeIcon: coldHeatStorageActiveIcon,
  },

  {
    name: "入驻企业",
    blueName: "入驻企业1",
    path: "enter-company",
    normalIcon: enterCompanyNormalIcon,
    activeIcon: enterCompanyActiveIcon,
  },

  {
    name: "指挥中心",
    blueName: "指挥中心",
    path: "zero-center",
    normalIcon: zeroCenterNormalIcon,
    activeIcon: zeroCenterActiveIcon,
  },

  {
    name: "收益总览",
    blueName: "收益总览1",
    path: "icome",
    normalIcon: icomeNormalIcon,
    activeIcon: icomeActiveIcon,
  },
];

/**
 *  @Author: cc
 *  @description:  当前 首页运行的模式
 */
export const Route = defineStore(
  "currentmRoute",
  () => {
    // 当前模式
    const currentRoute = ref<string>("综合态势");
    // 当前模式 索引
    const currentRouteIndex = ref(0);

    const updataRoute = (data: string) => {
      currentRoute.value = data;
      // 当前模式 索引
      currentRouteIndex.value = routeMap.findIndex(
        (item) => item.path === data
      );
    };

    return {
      currentRoute,
      updataRoute,
      currentRouteIndex,
    };
  },
  {
    // 配置第三个参数
    persist: {
      storage: sessionStorage,
      key: "currentmRoute",
    },
  }
);
