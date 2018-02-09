Page({
  data: {
    imgUrls: [
      {
        url: '/images/1.jpg'
      }, {
        url: '/images/2.jpg'
      }, {
        url: '/images/3.jpg'
      }, {
        url: '/images/4.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  create() {
    wx.navigateTo({
      url: '../zhadui/create',
    })
  }
})