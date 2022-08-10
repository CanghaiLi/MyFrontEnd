import { createApp } from "vue"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import App from "./App"
import router from "./router"
import * as ElementPlusIcons from "@element-plus/icons-vue"
import "@/styles/index.scss"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount("#app")
