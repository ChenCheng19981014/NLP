// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.6_sass@1.77.6/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.6_sass@1.77.6__vue@3.4.29_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import Icons from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.29_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/unplugin-icons@0.19.0_@vue+compiler-sfc@3.4.29_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/resolver.js";
import AutoImport from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.11.0_vue@3.4.29_typescript@5.4.5___rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.7_rollup@2.79.1_vue@3.4.29_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/zyj/Desktop/Liyang_zhongguancun/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.7_rollup@2.79.1_vue@3.4.29_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "C:\\Users\\zyj\\Desktop\\Liyang_zhongguancun";
var pathSrc = path.resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [
      vue(),
      // cesium(),
      AutoImport({
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({})
        ]
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"]
          }),
          // 自动导入 Element Plus 组件，指定sass样式配色系统
          ElementPlusResolver({ importStyle: "sass" })
        ]
      }),
      Icons({
        autoInstall: true
      })
    ],
    resolve: {
      alias: {
        "@": pathSrc
        // 相对路径别名配置，使用 @ 代替 src
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 必须配置 才可全局使用 定义的css
          additionalData: `@use "@/design/var.scss" as *; `
        }
      }
    },
    server: {
      // open: true,
      host: "0.0.0.0",
      port: 9999
    },
    base: "./"
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx6eWpcXFxcRGVza3RvcFxcXFxMaXlhbmdfemhvbmdndWFuY3VuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx6eWpcXFxcRGVza3RvcFxcXFxMaXlhbmdfemhvbmdndWFuY3VuXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy96eWovRGVza3RvcC9MaXlhbmdfemhvbmdndWFuY3VuL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBDb25maWdFbnYsIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuLy8gXHU5MTREXHU3RjZFXHU2MzA5XHU5NzAwXHU1QkZDXHU1MTY1XHJcbmltcG9ydCBJY29ucyBmcm9tIFwidW5wbHVnaW4taWNvbnMvdml0ZVwiO1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIjtcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnNcIjtcclxuY29uc3QgcGF0aFNyYyA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpO1xyXG5pbXBvcnQgY2VzaXVtIGZyb20gXCJ2aXRlLXBsdWdpbi1jZXNpdW1cIjtcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChtb2RlOiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUubW9kZSwgcHJvY2Vzcy5jd2QoKSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJlbnY6XCIsIGVudik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIC8vIGNlc2l1bSgpLFxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQUVsTWVzc2FnZSwgRWxNZXNzYWdlQm94Li4uIChcdTVFMjZcdTY4MzdcdTVGMEYpXHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXHJcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcclxuICAgICAgICAgIEljb25zUmVzb2x2ZXIoe30pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NkNFOFx1NTE4Q1x1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxyXG4gICAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICAgIGVuYWJsZWRDb2xsZWN0aW9uczogW1wiZXBcIl0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBFbGVtZW50IFBsdXMgXHU3RUM0XHU0RUY2XHVGRjBDXHU2MzA3XHU1QjlBc2Fzc1x1NjgzN1x1NUYwRlx1OTE0RFx1ODI3Mlx1N0NGQlx1N0VERlxyXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7IGltcG9ydFN0eWxlOiBcInNhc3NcIiB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgSWNvbnMoe1xyXG4gICAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgXCJAXCI6IHBhdGhTcmMsIC8vIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEY3Rlx1NzUyOCBAIFx1NEVFM1x1NjZGRiBzcmNcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgIC8vIFx1NUZDNVx1OTg3Qlx1OTE0RFx1N0Y2RSBcdTYyNERcdTUzRUZcdTUxNjhcdTVDNDBcdTRGN0ZcdTc1MjggXHU1QjlBXHU0RTQ5XHU3Njg0Y3NzXHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJAL2Rlc2lnbi92YXIuc2Nzc1wiIGFzICo7IGAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgLy8gb3BlbjogdHJ1ZSxcclxuICAgICAgaG9zdDogXCIwLjAuMC4wXCIsXHJcbiAgICAgIHBvcnQ6IDk5OTksXHJcbiAgICB9LFxyXG4gICAgYmFzZTogXCIuL1wiLFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ULFNBQVMsY0FBYyxlQUFzQztBQUNqWCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBRWpCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQVJwQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFNLFVBQVUsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFFN0MsSUFBTyxzQkFBUSxhQUFhLENBQUMsU0FBZ0M7QUFDM0QsUUFBTSxNQUFNLFFBQVEsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBRTVDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBLE1BRUosV0FBVztBQUFBO0FBQUEsUUFFVCxXQUFXO0FBQUEsVUFDVCxvQkFBb0I7QUFBQTtBQUFBLFVBRXBCLGNBQWMsQ0FBQyxDQUFDO0FBQUEsUUFDbEI7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVc7QUFBQTtBQUFBLFVBRVQsY0FBYztBQUFBLFlBQ1osb0JBQW9CLENBQUMsSUFBSTtBQUFBLFVBQzNCLENBQUM7QUFBQTtBQUFBLFVBRUQsb0JBQW9CLEVBQUUsYUFBYSxPQUFPLENBQUM7QUFBQSxRQUM3QztBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLFFBQ0osYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQTtBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUE7QUFBQSxVQUVKLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQTtBQUFBLE1BRU4sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
