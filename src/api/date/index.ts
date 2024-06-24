// 统一管理光伏场景相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 信息总览接口
  TIMESTAMP = "/charge/m-charge-station/getDateColor",
}

/**
 * @typedef {Object} TimeInterval
 * @property {string} startT - 开始时间
 * @property {string} endT - 结束时间
 */

interface TimeStampMap {
  endT: string;
  startT: string;
}

// 根据时间段 获取对应的 日历必要信息
export const getDateInfo = (data: TimeStampMap) =>
  http.post<any, { [key: string]: any }>(API.TIMESTAMP, data);
