//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //联系电话
    phoneNumber:'400-100-100',
    //测导航指针
    slideNavindex:false,
    //底部导航指针
    curindex:'',
    //底部导航
    footernav: [{
      title: '得家信息',
      image1: '/pages/images/main-btn-1.png',
      image2: '/pages/images/main_1.png',
      subNav: [{
        name: '德家产品',
        image: '/pages/images/menu-sub-8.png'
      }, {
        name: '品牌故事',
        image: '/pages/images/menu-sub-9.png'
      }, {
        name: '门店查询',
        image: '/pages/images/menu-sub-10.png'
      }, {
        name: '官方网站',
        image: '/pages/images/menu-sub-11.png'
      }]
    }, {
      title: '德家社区',
      image1: '/pages/images/main-btn-2.png',
      image2: '/pages/images/main_2.png',
      subNav: [{
        name: '资讯 NEWS',
        image: '/pages/images/menu-sub-1.png'
      }, {
        name: '社区 CLUB',
        image: '/pages/images/menu-sub-6.png'
      }, {
        name: '工具 TOOLS',
        image: '/pages/images/menu-sub-7.png'
      }]
    }, {
      title: '德家动态',
      image1: '/pages/images/main-btn-3.png',
      image2: '/pages/images/main_3.png',
      subNav: [{
        name: 'DE新闻',
        image: '/pages/images/menu-sub-1.png'
      }, {
        name: 'DE荣誉',
        image: '/pages/images/menu-sub-2.png'
      }, {
        name: 'DE公益',
        image: '/pages/images/menu-sub-3.png'
      }, {
        name: 'DE视频',
        image: '/pages/images/menu-sub-4.png'
      }]
    }],
    imgUrls: [
      '/pages/images/index-banner.png',
      '/pages/images/index-banner.png',
      '/pages/images/index-banner.png',
      '/pages/images/index-banner.png',
    ],
    poducts: [],
    newsList: [],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    indicatorColor:'#3b3438',
    indicatorActiveColor:'#fff',
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
      '/pages/images/index-banner.png',
      '/pages/images/index-banner.png',
      '/pages/images/index-banner.png',
      '/pages/images/index-banner.png',
    ];

    this.setData({
      imgUrls: _imgUrls
    });

  },
  //点击出现导航
  showNav:function(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      curindex:index
    })
  },
  //取消导航
  hideNav:function(){
    this.setData({
      //取消底部导航
      curindex: '',
      //取消测导航
      slideNavindex: false
    })
  },
  //侧导航出现
  showSlideNav:function(){
    this.setData({
      slideNavindex:true
    })
  },
  //打电话
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber // 仅为示例，并非真实的电话号码
    })
  }
})