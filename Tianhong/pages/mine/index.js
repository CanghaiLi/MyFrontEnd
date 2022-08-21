// pages/mine/index.js
Page({

  data: {
    
  },

  getUserInfo(e) {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: ({userInfo}) => {
        const { nickName, avatarUrl } = userInfo
        wx.setStorageSync('nickName', nickName);
        wx.setStorageSync('avatarUrl', avatarUrl);
        this.setData({ nickName, avatarUrl })
      }
    })
  },
  gotoOrder(e){
    const {value} = e.currentTarget.dataset
    wx.setStorageSync('tabVal', value)
    wx.switchTab({
      url: '/pages/order/index',
    })
  },
  gotoCoupon(){
    wx.navigateTo({
      url: '/views/coupon/couponList/index',
    })
  },
  gotoInvoice(){
    wx.navigateTo({
      url: '/views/invoice/index/index',
    })
  },
  gotoMessage(){
    wx.navigateTo({
      url: '/views/message/index',
    })
  },
  gotoContact(e){
    const { type } = e.currentTarget.dataset
    wx.navigateTo({
      url: '/views/contact/index?type=' + type,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const nickName = wx.getStorageSync('nickName') || ''
    const avatarUrl = wx.getStorageSync('avatarUrl') || ''
    this.setData({nickName, avatarUrl})
  },
})