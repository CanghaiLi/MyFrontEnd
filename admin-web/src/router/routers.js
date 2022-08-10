import Layout from "../layout/index.vue"
const Routers = [
  {
    path: "/",
    redirect: "/index/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* chunkName: 404 */ "@/components/NotFound"),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import(/* chunkName: login */ "src/view/login/login.vue"),
  // },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/index",
        name: "Index",
        redirect: "/index/home",
        component: () => import("@/components/ParentView"),
        children: [
          {
            path: "home",
            name: "Home",
            component: () => import(/* chunkName: Home */ "@/views/HomeView"),
          },
        ],
      },
    ],
  },
]

export default Routers
