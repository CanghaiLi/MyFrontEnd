import type { RouteRecordRaw } from "vue-router"

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about/AboutView.vue"),
    meta: {
      title: "关于",
    },
  },
]
