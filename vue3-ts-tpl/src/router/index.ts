import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import { staticRoutes } from "./staticRoutes"
console.log(import.meta.env)
console.log(new URL("./src", import.meta.url))
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ...staticRoutes,
  ],
})

export default router
