import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 配置按需导入
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
const pathSrc = path.resolve(__dirname, "src");
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  // console.log("env:", env);
  return {
    plugins: [
      vue(),
      // cesium(),
      AutoImport({
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({}),
        ],
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
          // 自动导入 Element Plus 组件，指定sass样式配色系统
          ElementPlusResolver({ importStyle: "sass" }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: {
        "@": pathSrc, // 相对路径别名配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 必须配置 才可全局使用 定义的css
          additionalData: `@use "@/design/var.scss" as *; `,
        },
      },
    },
    server: {
      // open: true,
      host: "0.0.0.0",
      port: 9999,
    },
    base: "./",
  };
});
