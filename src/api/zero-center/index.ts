// 统一管理光伏场景相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 信息总览接口
  INFORMATION = "/zero/m-zero-carbon/getTotalInfo",
  // 实时监测
  REALTIME = "/zero/m-zero-carbon/getMonitor",
  // 主要用能设备监测
  KTMONITOR = "/zero/m-zero-carbon/getKTMonitor",
  // 供需平衡分析
  BALANCEANALYSIS = "/zero/m-zero-carbon/balanceAnalysis",
}

// 几段
interface Level {
  type: number;
}

// 价格策略
interface Mode {
  mode: number;
}

// 信息总览接口数据
export const getInfo = () =>
  http.post<any, { [key: string]: any }>(API.INFORMATION);

// 实时监控数据接口
export const getMonitor = () =>
  http.post<any, { [key: string]: any }>(API.REALTIME);

// 主要用能设备监测
export const getKTMonitor = () =>
  http.post<any, { [key: string]: any }>(API.KTMONITOR);

// 供需平衡分析
export const getBalanceAnalysis = () =>
  http.post<any, { [key: string]: any }>(API.BALANCEANALYSIS);
