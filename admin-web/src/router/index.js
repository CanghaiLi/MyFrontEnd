import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout"
import ParentView from "@/components/ParentView"
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { useUserStore } from '../store/userStore'
import menuRouters from "./routes"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/admin/home",
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
          path: "/admin",
          name: "Admin",
          redirect: "/admin/home",
          component: ParentView,
          children: menuRouters,
        },
      ],
    },
  ],
})

// const { getLocalStorage } = useLocalStorage();

// router.beforeEach(async (to, from, next) => {
//   const store = useUserStore();
//   const token = getLocalStorage("token") || false;
//   const userRouters = store.userRouters;
//   const uid = getLocalStorage("uid");

//   if (!token && to.name === ELOGINSTATE.ISLOGIN) {
//     store.userRouters = [];
//     // 未登录 去的是登录页面
//     next();
//   } else if (!token && to.name !== ELOGINSTATE.ISLOGIN) {
//     // 未登录 去的不是登录页面
//     next({ name: ELOGINSTATE.ISLOGIN });
//   } else if (token && to.name === ELOGINSTATE.ISLOGIN) {
//     // 已登录 去的是登录页面
//     if (!uid) {
//       next();
//     } else {
//       next({ path: "/" });
//     }
//   } else if (token && uid && to.name !== ELOGINSTATE.ISLOGIN) {
//     // 已登录但是没有用户菜单
//     if (userRouters.length === 0) {
//       await store.setUserRouters(uid);
//       let newRoutes = generateRouter(store.userRouters);
//       const layout = routes.find((item: RouteRecordRaw) => item.name == "Layout")!;
//       layout.children = [...Routers, ...newRoutes];
//       router.addRoute(layout);
//       router.replace(to.path);
//     }
//     store.setNavList(to.fullPath);
//     next();
//   } else if (!uid) {
//     next({ name: ELOGINSTATE.ISLOGIN });
//   }
// });

export default router
