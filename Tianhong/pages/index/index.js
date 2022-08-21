// import * as ec from '../../echarts.min';
const comp = requirePlugin('echarts');
import request from "../../utils/request"
// // 设置自行引入的 echarts 依赖库
// comp.echarts = ec;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartsInfo: {
      "series": [
        {
          "data": [820, 932, 901, 934, 1290, 1330, 1320],
          "type": "line"
        }
      ],
      "xAxis": {
        "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "type": "category"
      },
      "yAxis": {
        "type": "value"
      }
    },
    option1: [
      { text: '全部商品', value: "0", icon: '' },
      { text: '新款商品', value: "1", icon: '' },
      { text: '活动商品', value: "2", icon: '' },
    ],
    option2: [
      { text: '默认排序', value: 'a', icon: '' },
      { text: '好评排序', value: 'b', icon: '' },
      { text: '销量排序', value: 'c', icon: '' },
    ],
    value1: "0",
    value2: 'a',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面进入，echarts版本为', comp.echarts.version);
    setTimeout(() => {
      this.setData({
        ["chartsInfo.series[0].data[0]"]:400
      })
    },2000)
  },
  async onRequest() {
    try {
      const res = await request("/api/pc/keys")
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})