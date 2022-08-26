Page({
  data: {
    option1: [
      {
        text: "全部商户",
        value: "0",
        icon: "",
      },
      {
        text: "苏宁连云港广场",
        value: "1",
        icon: "",
      },
      {
        text: "苏宁宿州广场",
        value: "2",
        icon: "",
      },
    ],
    option2: [
      {
        text: "全部渠道",
        value: "a",
        icon: "",
      },
      {
        text: "支付宝",
        value: "b",
        icon: "",
      },
      {
        text: "微信",
        value: "c",
        icon: "",
      },
    ],
    option3: [
      {
        text: "所有状态",
        value: "a",
        icon: "",
      },
      {
        text: "已支付",
        value: "b",
        icon: "",
      },
      {
        text: "已退款",
        value: "c",
        icon: "",
      },
    ],
    value1: "0",
    value2: "a",
    value3: "a",
  },
  onLoad: function (options) {},
  chooseStartTime: function () {
    wx.showToast({
      title: '功能开发中...',
    })
  },
  onReady: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},
  onShareAppMessage: function () {},
});
