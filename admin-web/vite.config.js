import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    // 忽略后缀名的配置选项, 官方不建议省略.vue... -_-#
    extensions: [".mjs", ".js", ".json", ".vue"],
  },
  server: {
    host: "127.0.0.1",
    port: 8080,
    cors: true,
    open: true,
    hmr: true,
  },
})
