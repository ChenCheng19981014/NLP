// 收益总览大屏接口
import http from "@/utils/http"

enum API {
    OTHER = "/income/otherIncome",
    STORAGE = "/income/storageIncome",
    CHARGE = "/income/chargeIncome",
    PHOTOVOLTAIC = "/income/photovoltaicIncome",
    INCOME = "/income/incomeTotal",
    INCOMEMONTH = "/income/incomeMonth",
    PYXL = "/income/pyxlIncome",
}

export const getOtherInfo = (data) => http.post<any, { [key: string]: any }>(API.OTHER, data)
export const getStorageInfo = (data) => http.post<any, { [key: string]: any }>(API.STORAGE, data)
export const getChargeInfo = (data) => http.post<any, { [key: string]: any }>(API.CHARGE, data)
export const getPhotovoltaicInfo = (data) => http.post<any, { [key: string]: any }>(API.PHOTOVOLTAIC, data)
export const getIncomeInfo = (data) => http.post<any, { [key: string]: any }>(API.INCOME, data)
export const getIncomeMonthInfo = (data) => http.post<any, { [key: string]: any }>(API.INCOMEMONTH, data)
export const getPyxlInfo = (data) => http.post<any, { [key: string]: any }>(API.PYXL, data)