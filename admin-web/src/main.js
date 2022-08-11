import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import App from "./App"
import router from "./router"
import * as ElementPlusIcons from "@element-plus/icons-vue"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import "@/styles/index.scss"

// 按需引入ElementPlus
// If you want to use ElMessage, import it.
import "element-plus/es/components/message/style/css"
import "element-plus/es/components/message-box/style/css"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.mount("#app")
