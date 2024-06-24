// 大屏模式
import http from "@/utils/http";

//日历模式查询
interface Date {
    month: string;
}

// 统一管理接口
enum API {
    //当月日历模式查询
    QUERYMODE = '/largeMode/queryMode',
    /* 经济模式 */
    GETINFO = '/economy/getInfo',
    INCOMETOTAL = '/economy/incomeTotal',
    CENTERLINE = '/economy/centerLine',
    TOTALANALYSIS = '/economy/totalAnalysis',
    PHOTOVOLTAICANALYSIS = '/economy/photovoltaicAnalysis',
    STORAGEANALYSIS = '/economy/storageAnalysis',
    HISTORY = '/economy/history',
    /* 辅助模式 */
    AllEVENT = '/fzfw/getAllEvent',
    FZFWRECEIVE = '/fzfw/receive',
    FZFWEVALUTION = '/fzfw/evaluation',
    FZFWDECLARE = '/fzfw/declare',
    FZFWEXECUTION = '/fzfw/execution',
    FZFWGETINFO = '/fzfw/getInfo',
    FZFWINCOMETOTAL = '/fzfw/incomeTotal',
    FZFWEVALUTIONCHECK = '/fzfw/evaluateCheck',

    /* 需求响应接口 */
}

// 当月日历模式查询
export const getModeInfo = (data: Date) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.QUERYMODE,
        data
    );
/* 经济模式接口 */
//基本信息
export const getGETINFO = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.GETINFO,
        data
    );
//收益统计
export const getINCOMETOTAL = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.INCOMETOTAL,
        data
    );
//大屏中间线段曲线
export const getCENTERLINE = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.CENTERLINE,
        data
    );
//总体分析
export const getTOTALANALYSIS = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.TOTALANALYSIS,
        data
    );
//历史需量
export const getHISTORY = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.HISTORY,
        data
    );
//光伏分析
export const getPHOTOVOLTAICANALYSIS = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.PHOTOVOLTAICANALYSIS,
        data
    );
//储能分析
export const getSTORAGEANALYSIS = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.STORAGEANALYSIS,
        data
    );

/* 辅助模式接口 */
//全部事件
export const getAllEvent = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.AllEVENT,
        data
    );
//需求接收
export const getFzfwReceive = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWRECEIVE,
        data
    );
//能力评估
export const getFzfwEvaluation = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWEVALUTION,
        data
    );
//申报/中标结果
export const getFzfwDeclare = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWDECLARE,
        data
    );
//执行监控
export const getFzfwExecution = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWEXECUTION,
        data
    );
//执行评价
export const getFzfwEvaluateCheck = (data) =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWEVALUTIONCHECK,
        data
    );
export const getFzfwInfo = () =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWGETINFO,
    );

export const getFzfwtotal = () =>
    http.post<any, { [key: string]: number | string | number[] | string[] }>(
        API.FZFWINCOMETOTAL,
    );

/* 需求响应接口 */


