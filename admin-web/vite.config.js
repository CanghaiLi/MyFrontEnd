import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [ElementPlusResolver({ importStyle: "sass" })] }),
  ],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    // 忽略后缀名的配置选项, 官方不建议省略.vue... -_-#
    extensions: [".mjs", ".js", ".json", ".vue"],
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: "@use '@/styles/element/index.scss';" },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    hmr: true,
    proxy: {
      "/api/pc": { target: "http://localhost:8080" },
    },
  },
})
