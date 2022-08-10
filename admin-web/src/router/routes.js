export default [
  {
    path: "home",
    name: "Home",
    meta: { title: "首页" },
    component: () => import(/* chunkName: Home */ "@/views/HomeView"),
  },
  {
    path: "goods",
    name: "Goods",
    meta: { title: "商品管理" },
    redirect: "/admin/goods/list",
    children: [
      {
        path: "list",
        name: "GoodsList",
        meta: { title: "商品管理" },
        component: () => import(/* chunkName: Home */ "@/views/Goods"),
      },
      {
        path: "foods",
        name: "FoodsList",
        meta: { title: "食品套餐" },
        component: () => import(/* chunkName: Home */ "@/views/Goods/Foods"),
      },
    ],
  },
]
