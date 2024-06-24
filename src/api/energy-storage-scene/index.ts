// 统一管理光伏场景相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 信息总览接口
  INFORMATION = "/storage/m-storage/getTotalInfo",
  // 实时监测
  REALTIME = "/storage/m-storage/getMonitor",
  // 储能电量统计（月统计）
  MONTHTOTAL = "/storage/m-storage/getMonthTotal",
  // 储能电量统计（年统计）
  YEARTOTAL = "/storage/m-storage/getYearTotal",
  // 储能分组工况
  GETGROUP = "/storage/m-storage/getGroup",
  // 获取储能详情
  INFO = "/storage/m-storage/getInfo",
}

// 几段
interface level {
  xd: number;
}

interface ID {
  id: number;
}

// 储能分组工况
export const getenergyStorageInfo = (data: ID) =>
  http.post<any, { [key: string]: any }>(API.INFO, data);

// 信息总览接口数据
export const getTotalInfo = (data: level) =>
  http.post<any, { [key: string]: any }>(API.INFORMATION, data);

// 实时监控数据接口
export const getMonitor = (data: level) =>
  http.post<any, { [key: string]: any }>(API.REALTIME, data);

// 储能电量统计（月统计）
export const getMonthTotal = (data: level) =>
  http.post<any, { [key: string]: any }>(API.MONTHTOTAL, data);

// 储能电量统计（年统计）
export const getYearTotal = (data: level) =>
  http.post<any, { [key: string]: any }>(API.YEARTOTAL, data);

// 储能分组工况
export const getGroup = (data: level) =>
  http.post<any, { [key: string]: any }>(API.GETGROUP, data);
