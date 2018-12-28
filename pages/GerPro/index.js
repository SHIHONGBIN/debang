//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    imgUrls: [
      '/pages/images/cp-banner.png',
      '/pages/images/cp-banner.png',
      '/pages/images/cp-banner.png',
      '/pages/images/cp-banner.png',
    ],
    poducts: [],
    newsList: [],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    indicatorColor: '#d0111b',
    indicatorActiveColor: '#fff',
    duration: 1000

  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },


  //事件处理函数



  getBannerData: function () {
    var _imgUrls = [
      '/pages/images/cp-banner.png',
      '/pages/images/cp-banner.png',
      '/pages/images/icp-banner.png',
      '/pages/images/cp-banner.png',
    ];

    this.setData({
      imgUrls: _imgUrls
    });

  }
})