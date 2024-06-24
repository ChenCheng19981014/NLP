// 统一管理入驻企业相关接口
import http from "@/utils/http";
// 统一管理接口
enum API {
  // 左侧企业信息总览
  LEFT_INFO = "/tenant/m-tenant/getTotalInfo",
  // 左侧企业实时数据
  LEFT_REALDATA = "/tenant/m-tenant/getMonitor",
  // 左侧企业可调能力
  LEFT_CAPABILITY = "/tenant/m-tenant/getAdjTop",
  // 左侧企业详情查询
  LEFT_CAPABILITY_DETAIL = "/tenant/m-tenant/getBubbleInfo",
  // 右侧本月电量TOP榜
  RIGHT_TOPDATA = "/tenant/m-tenant/getEtotalTop",
  // 租户详情
  TENANTDETAILS = "/tenant/m-tenant/getTenantInfo",
}

// 暴露请求函数
interface Tenant {
  tenantId: number;
}

// 租户详情
export const getTenantDetails = (data: Tenant) =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.TENANTDETAILS,
    data
  );

// 企业信息总览
export const reqLeftInfo = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.LEFT_INFO
  );

// 企业实时数据
export const reqLeftRealData = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.LEFT_REALDATA
  );

// 企业可调能力
export const reqLeftCapability = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.LEFT_CAPABILITY
  );

// 企业详情查询
export const reqLeftCapabilityDetail = (data) =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.LEFT_CAPABILITY_DETAIL,
    data
  );

// 本月电量TOP榜
export const reqMonthTopData = () =>
  http.post<any, { [key: string]: number | string | number[] | string[] }>(
    API.RIGHT_TOPDATA
  );
