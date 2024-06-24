// 统一管理首页相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 左侧
  MAIN_LEFT = "/main/left",
  // 顶部
  MAIN_TOP = "/main/top",
  // 右侧
  MAIN_RIGHT = "/main/right",
  // 右侧右下角的蓄冷蓄热
  MAIN_RIGHT_XLR = "/main/xlxr",
  // 首页 弹窗
  DIGLOG = "/main/iconInfo",
  // 顶部导航
  FINDNAV = "/largeMode/queryMode",
}

interface Date {
  month: string;
}

// 顶部导航
export const getNav = (data: Date) =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.FINDNAV,
    data
  );

// 首页 弹窗
export const getIconInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.DIGLOG
  );

// 首页左侧的方法
export const reqMainLeft = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.MAIN_LEFT
  );

// 首页顶部的方法
export const reqMainTop = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.MAIN_TOP
  );

// 首页右侧的方法
export const reqMainRight = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.MAIN_RIGHT
  );

// 首页右侧 右下角的蓄冷蓄热
export const reqMainRightXlxr = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.MAIN_RIGHT_XLR
  );
