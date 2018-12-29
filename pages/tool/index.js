// pages/tool/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideNav:false,
    //产品资料
    productMsg: ['ic','fd','lvsss'],
    productMsgCur:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  //showSlideBox
  showSlideBox:function(e){
    this.setData({
      slideNav:true
    })
  },
  hideSlideBox:function(e){
    this.setData({
      slideNav: false
    })
  },
  //产品资料切换
  //添加标签
  getCurIndex: function (e) {
    var cur = e.currentTarget.dataset.id;
    this.setData({
      productMsgCur: cur
    });
    console.log(this.data.productMsg[cur])
  }
})