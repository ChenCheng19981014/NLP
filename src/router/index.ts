import { createRouter, createWebHashHistory } from "vue-router";
import beforeEach from "./before-each";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/overview", // 重定向
    children: [
      // 添加子路由
      {
        path: "/overview",
        name: "overview",
        component: () => import("@/views/components/overview/index.vue"),
      },

      {
        path: "/pinyin",
        name: "pinyin",
        component: () => import("@/views/components/pinyin/index.vue"),
      },
    ],
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
