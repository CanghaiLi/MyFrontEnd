// import * as ec from '../../echarts.min';
const comp = requirePlugin("echarts");
import request from "../../utils/request";

// 设置自行引入的 echarts 依赖库
const days = [];
const ys = [];
for (let i = 0; i < 30; i++) {
  days.push("8/" + (i + 1));
  ys.push((Math.random() * 10 + i + 1).toFixed(2));
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    chartsInfo: {
      tooltip: { trigger: "axis" },
      grid: { x: 32, x2: 8, y: 16, y2: 24 },
      series: [
        {
          data: ys,
          type: "line",
          itemStyle: {
            normal: {
              color: "#1373E6",
              lineStyle: { color: "#1373E6" },
            },
          },
          areaStyle: {
            color: "#76aff5",
          },
        },
      ],
      xAxis: {
        data: days,
        type: "category",
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        axisLabel: { formatter: "{value}w" },
      },
    },

    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    // activeNames: ["1", "2", "3"]
    
  },
  // onCollapseChange(event) {
  //   this.setData({
  //     activeNames: event.detail,
  //   });
  // },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面进入，echarts版本为", comp.echarts.version);
    // setTimeout(() => {
    //   this.setData({
    //     ["chartsInfo.series[0].data[0]"]:400
    //   })
    // },2000)
  },
  async onRequest() {
    try {
      const res = await request("/api/pc/keys");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
