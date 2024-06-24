import { createApp } from "vue";
import "reset.css";
import App from "./App.vue";
// 导入路由组件
import router from "@/router";
// 配置国际化
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponents from "@/components";
//公共样式
import "@/design/index.scss";
// 导入仓库
import pinia from "@/store";
import { addDirective } from "@/directives/index";

// 获取应用实例对象
const app = createApp(App);
// 全局注册的指令可以直接通过 app.directive 使用
// 获取应用实例对象
addDirective(app);
app.use(router);
app.use(ElementPlus, { locale: zhCn }); // 配置中文国际化
app.use(globalComponents); // 安装全局路由组件
app.use(pinia); // 注册全局仓库
app.mount("#app");
