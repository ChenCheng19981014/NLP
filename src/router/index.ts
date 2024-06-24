import { createRouter, createWebHashHistory } from "vue-router";
import beforeEach from "./before-each";

const routes = [
  {
    path: "/",
    name: "app",
    redirect: "/module/overview", // 重定向
  },
  {
    path: "/module/:mode",
    name: "module",
    component: () => import("@/views/index/index.vue"),
  },

  {
    path: "/ec",
    name: "ec",
    component: () => import("@/views/index/ec.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "any",
    redirect: "/outFactory",
  },
];

// createRouter用于创建路由器实例，可以管理多个路由
const router = createRouter({
  // 路由的模式的设置
  history: createWebHashHistory(),
  routes,
});

beforeEach(router);

export default router;
