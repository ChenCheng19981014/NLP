// 统一管理光伏场景相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 信息总览接口
  INFORMATION = "/charge/m-charge-station/getInfo",
  // 实时监测
  REALTIME = "/charge/m-charge-station/getMonitor",
  // 价格策略
  STRATEGY = "/charge/m-charge-station/strategy",
  // 运营分析（月统计）
  MONTHANALYSIS = "/charge/m-charge-station/monthAnalysis",
  // 运营分析（年统计）
  YEARANALYSIS = "/charge/m-charge-station/yearAnalysis",
  // 获取充电枪详情
  GUN = "/charge/m-charge-station/getGunInfo",
}

// 几段
interface Level {
  type: number;
}

// 价格策略
interface Strategy {
  localDate: string;
  type: number;
}
interface GunId {
  type: string;
}

// 信息总览接口数据
export const getGunInfo = (data: Level) =>
  http.post<any, { [key: string]: any }>(API.GUN, data);

// 信息总览接口数据
export const getInfo = (data: Level) =>
  http.post<any, { [key: string]: any }>(API.INFORMATION, data);

// 实时监控数据接口
export const getMonitor = (data: Level) =>
  http.post<any, { [key: string]: any }>(API.REALTIME, data);

// 价格策略
export const getStrategy = (data: Strategy) =>
  http.post<any, { [key: string]: any }>(API.STRATEGY, data);

// 运营分析（月统计）
export const getMonthAnalysis = (data: Strategy) =>
  http.post<any, { [key: string]: any }>(API.MONTHANALYSIS, data);

// 运营分析（年统计）
export const getYearAnalysis = (data: Strategy) =>
  http.post<any, { [key: string]: any }>(API.YEARANALYSIS, data);
