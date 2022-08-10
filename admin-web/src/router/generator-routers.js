const Routes = [
  {
    path: "/index",
    name: "Index",
    redirect: "/index/home",
    component: () => import(/* chunkName: Index */ "@/components/ParentView"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import(/* chunkName: Home */ "@/views/HomeView"),
      },
    ],
  },
]

export default Routes
