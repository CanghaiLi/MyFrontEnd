const app = getApp()
Page({
  data: {
    baseRes: app.globalData.baseRes,
    imgUrls: [
      {
        key: 'DR20221111XXX',
        name: '大画舫单人票',
        payTime: '2022-03-20 15:00',
        desc: '成人 3 位，儿童 0 位。一次性船票消费，扫码上传',
        code: '/images/qrcode.png',
        place: '玄武湖一号码头',
        time: '2022-04-01 19:00-21:00'
      },
      {
        key: 'ZL20221111CCC',
        name: '2人脚踏船',
        payTime: '2022-03-21 15:00',
        desc: '整船租赁，计时扣费，限2人乘坐，100元/小时',
        code: '/images/qrcode.png',
        place: '玄武湖一号码头',
        time: '2022-04-01 19:00-21:00',
        type: 'cs',
        spendTime: '3小时12分钟',
        extraMoney: '50'
      },
      {
        key: 'ZL20221111XXX',
        name: '2人脚踏船',
        payTime: '2022-03-21 15:00',
        desc: '整船租赁，计时扣费，限2人乘坐，100元/小时',
        code: '/images/qrcode.png',
        place: '玄武湖一号码头',
        time: '2022-04-01 19:00-21:00',
        type: 'jx',
        spendTime: '1小时12分钟',
        spendMoney: '150',
      }
    ],
    cardNum:2,
    swiperIndex:0
  },
  onLoad(){
    wx.getSystemInfo({
      success: res => {
        console.log(res.screenHeight)
        if (res.screenHeight > 800) {
          this.setData({high: true})
        }
      }
    })
  },
  bindchange:function(e){
    console.log(e.detail.current)
    this.setData({
      swiperIndex:e.detail.current
    })
  }
})