// pages/pCenter/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //弹窗控制
    lightbox: false,
    //是否提交
    isUpload: false,
    //状态 0 未提交   1 提交 审核中  2 提交 未通过
    configID:'',
    config: [{
      //未提交
      id: 0,
      initsrc: '../images/uploadbg.png',
      name: '上传电工证',
      src: '',
      //提交
      upload: false,
      //审核中
      checking: false,
      //审核后
      checked: false,
      //通过
      srcIsUpload: false,
      //重新上传
      uploadAgain: false
    }, 
    {
      //审核中
      id: 1,
      initsrc: '../images/uploadbg.png',
      name: '上传工程师证',
      src: '../images/img-zx.png',
        //提交
        upload: true,
      //审核中
      checking: true,
      //审核后
      checked: false,
      //还未通过
      srcIsUpload: false,
        //重新上传
        uploadAgain: false
    }, 
    // {
    //   //审核失败
    //   id: 2,
    //   initsrc: '../images/uploadbg.png',
    //   name: '上传工程师证',
    //   src: '../images/img-zx.png',
    //   //提交
    //   upload: true,
    //   //审核中
    //   checking: true,
    //   //审核后
    //   checked: true,
    //   //还未通过
    //   srcIsUpload: false,
    //   //重新上传
    //   uploadAgain:false
    // }
    // , {
    //   //审核通过
    //   id: 3,
    //   initsrc: '../images/uploadbg.png',
    //   name: '上传工程师证',
    //   src: '../images/img-zx.png',
    //     //提交
    //     upload: true,
    //   //审核中
    //     checking: true,
    //   //审核后
    //     checked: true,
    //   //通过
    //   srcIsUpload: true,
    //     //重新上传
    //     uploadAgain: false
    // }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  chooseImage: function(e) {
    var index = e.currentTarget.dataset.id;
    var config = this.data.config;
    //未提交或者重新提交才会调用上传功能  序号0 1 要连续
    if (config[index].src === '' || config[index].checked == true && config[index].srcIsUpload==false) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        const id = e.currentTarget.dataset.id;
        var config = that.data.config;
        //未上传
        if (config[id].src == ''){
          config[id].src = tempFilePaths[0];
        }else{
          //审核失败重新上传 状态回滚审核中
          config[id].uploadAgain = true;
        }
        
        that.setData({
          config: config
        })
      }
    })
    }
  },
  //提交上传图片
  submitImage: function(e) {
      var index = e.currentTarget.dataset.id;
      this.setData({
        configID: index,
        lightbox: true
      });
  },
  //弹窗消失
  hideLightBox: function(e) {
    var config = this.data.config;
    var configId = this.data.configID;
    this.setData({
      lightbox: false
    })
    //如果是点击了确定按钮
    if (e.currentTarget.dataset.type == 'button') {
      config[configId].upload = true;
      config[configId].checking = true,
      // if(){
        config[configId].checked = false;
      // }
      console.log(configId)

      this.setData({
        config: config
      })
    }
  }
})