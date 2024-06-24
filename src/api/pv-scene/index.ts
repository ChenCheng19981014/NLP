// 统一管理光伏场景相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 信息总览接口
  INFORMATION = "/photovoltaic/m-photovoltaic/getTotalInfo",
  // 实时监测数据接口
  REALTIME = "/photovoltaic/m-photovoltaic/getMonitor",
  // 光伏发电量日统计
  GENERATION_DAY = "/photovoltaic/m-photovoltaic/getDayTotal",
  // 光伏发电量月统计
  GENERATION_MONTH = "/photovoltaic/m-photovoltaic/getMonthTotal",
  // 并网点发电状态
  STATYS = "/photovoltaic/m-photovoltaic/getConnectionStatus",
  // 获取楼栋光伏详情
  DETAILS = "/photovoltaic/m-photovoltaic/getBuildingInfo",
}

// 暴露请求函数
// 信息总览接口数据
export const getInformationInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.INFORMATION
  );

// 实时监控数据接口
export const getRealTimeInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.REALTIME
  );

// 光伏发电量日统计
export const getGenerationDayInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.GENERATION_DAY
  );

// 光伏发电量月统计
export const getGenerationMonthInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.GENERATION_MONTH
  );

// 并网点发电状态
export const getStatusInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.STATYS
  );

// 获取楼栋光伏详情
export const getBuildingInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.DETAILS
  );
