export default [
  {
    path: "home",
    name: "Home",
    meta: { title: "首页", icon: "ElementPlus" },
    component: () => import(/* chunkName: HomeView */ "@/views/HomeView"),
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
        meta: { title: "商品管理", icon: "Goods" },
        component: () => import(/* chunkName: Goods */ "@/views/Goods"),
      },
      {
        path: "foods",
        name: "FoodsList",
        meta: { title: "套餐管理", icon: "Sell" },
        component: () => import(/* chunkName: Foods */ "@/views/Goods/Foods"),
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
        component: () => import(/* chunkName: Orders */ "@/views/Sell/Orders"),
      },
    ],
  },
  {
    path: "store",
    name: "Stroe",
    meta: { title: "储存与上传", icon: "Suitcase" },
    redirect: "/admin/store/files",
    children: [
      {
        path: "files",
        name: "Files",
        meta: { title: "资源查看", icon: "Files" },
        component: () => import(/* chunkName: Orders */ "@/views/file"),
      },
      {
        path: "upload",
        name: "Upload",
        meta: { title: "资料上传", icon: "Upload" },
        component: () => import(/* chunkName: Upload */ "@/views/file/Upload"),
      },
    ],
  },
]
