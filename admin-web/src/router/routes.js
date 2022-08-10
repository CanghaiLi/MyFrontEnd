export default [
  {
    path: "home",
    name: "Home",
    meta: { title: "首页", icon: "ElementPlus" },
    component: () => import(/* chunkName: Home */ "@/views/HomeView"),
  },
  {
    path: "goods",
    name: "Goods",
    meta: { title: "商品管理", icon: "Grid" },
    redirect: "/admin/goods/boats",
    children: [
      {
        path: "boats",
        name: "Boats",
        meta: { title: "游船管理", icon: "Goods" },
        component: () => import(/* chunkName: Home */ "@/views/Goods"),
      },
      {
        path: "foods",
        name: "FoodsList",
        meta: { title: "小食套餐管理", icon: "Sell" },
        component: () => import(/* chunkName: Home */ "@/views/Goods/Foods"),
      },
    ],
  },
  {
    path: "sell",
    name: "Sell",
    meta: { title: "售卖管理", icon: "CreditCard" },
    redirect: "/admin/goods/list",
    children: [
      {
        path: "list",
        name: "GoodsList",
        meta: { title: "订单查看", icon: "List" },
        component: () => import(/* chunkName: Home */ "@/views/Sell/Orders"),
      },
    ],
  },
]
