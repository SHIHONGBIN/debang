// pages/WriteArticle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //标签
    biaoqianArr:['电工技师','容电器工程师','采购'],
    //指针
    biaoqianArrEq:'',
    config:{
      biaoqian:'',
      title:{
        length:20,
        curLength: 20,
        content:''
      },
      article:[{
          length:120,
        curLength: 120,
          content:''
      }],
      image:[]
    },
    height: 60,
    focus: false
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
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
  //字数控制
  textareaInput:function(e){
    var text = e.detail.value;
    var type = e.currentTarget.dataset.type;
    var id = e.currentTarget.dataset.id;
    var config = this.data.config;
    //判断是标题
    if(type == 'title'){
      config.title.curLength -= 1;
      if (config.title.curLength >= config.title.length){
        config.title.content = text.slice(0, config.title.length)
      }else{
        config.title.content = text
      }
    } 
    //如果是文章 赋值
    if(type == 'article'){
      config.article[id].curLength -= 1;
      if (config.article[id].curLength >= config.article[id].length) {
        config.article[id].content = text.slice(0, config.article[id].length)
      } else {
        config.article[id].content = text
      }
    }
    this.setData({
      config:config
    })
  },
  //添加段落
  addArticle:function(){
    var obj = {
      length: 120,
      curLength: 120,
      content: ''
    };
    var config = this.data.config;
    config.article.push(obj);
    this.setData({
      config:config
    })
  },
  //添加图片
  uploadImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        var config = that.data.config;
        tempFilePaths.map(function(item,index){
          config.image.push(item)
        })
        that.setData({
          config:config
        })
      }
    })},
    //添加标签
  getCurIndex:function(e){
    var cur = e.currentTarget.dataset.id;
    var config = this.data.config;
    config['biaoqian'] = this.data.biaoqianArr[cur];
    this.setData({
      biaoqianArrEq: cur,
      config:config
    });

  }
})