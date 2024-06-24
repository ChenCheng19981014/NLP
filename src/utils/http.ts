// axios基础封装
import axios from "axios";
const ENV = import.meta.env;
const { VITE_API_URL } = ENV;
const http = axios.create({
  baseURL: VITE_API_URL,
  // baseURL: "http://58.214.239.34:31912", // 线上
  // baseURL: "http://58.214.239.34:21010", // 后端本机
  // baseURL: "http://192.168.10.250:21010", // 溧阳 本地
  timeout: 7000,
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 请求拦截器
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    //处理网络错误
    let msg = "";
    const status = error.response?.status || "500";
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "网络出现问题";
        break;
    }
    ElMessage({
      type: "error",
      message: msg,
    });
    return Promise.reject(error);
  }
);

export default http;
