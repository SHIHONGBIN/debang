// pages/German/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //评论输入框控制
    inputTextarea:'',
    focus:false,
    //二级评论
    parentId:'',
    childId:'',
    //大咖点赞部分data
    dakaDialog: {
      //大咖 点赞
      isclick: false,
      // 大咖 点赞数
      zanNum: 2111
    },
    //大咖答 部分data 数据格式
    dakaAnswer: [{
      id:0,
      // 头像
      userheader:'/pages/images/avt-small.png',
      //姓名
      name:'电光火石',
      //时间
      time:'15分钟',
      title:'普通人应该知道掌握哪些电工、电气类的知识、常识、动手能力？',
      replay:[{
        id:0,
        name:'陈丹青',
        image:'/pages/images/icon-hot.png',
        content: '第一：是电压等级。第二：是开关和插座的正确使用方法。第三：是绝对不能在电线上晾晒衣物。第四：是不使用时务必关闭电源。第五：不要干力所不能及的事',
        //默认点赞 false
        isclick:false,
        //点赞
        zanNum:2,
        //回复
        answerNum:1024,
        //回复列表
        ansetNumLIst:[]
      }]
    }, {
      id:1,
        userheader: '/pages/images/avt-small.png',
        name: 'ZW-FNSD',
        time: '15分钟',
        title: '电气工程及其自动化专业学生的最好归宿在里？',
        replay: [{
          id:0,
          name: '陈丹青',
          image: '/pages/images/icon-hot.png',
          content: '电气专业国内的出路已经很清楚了，国包括轨 道交通，新能源分布式发电，电动汽车，舰船系统，电子封装等等。看起来还挺高端的。外做电力电子的比较多，应用比较广泛。',
          isclick: false,
          zanNum: 2,
          answerNum: 1024,
          //回复列表
          ansetNumLIst: []
        }, {
            id: 1,
            name: '陈丹青',
            image: '/pages/images/icon-hot.png',
            content: '在建筑单位做电气技术员',
            isclick: false,
            zanNum: 2,
            answerNum: 1024,
            //回复列表
            ansetNumLIst: []
          }, {
            id: 2,
            name: '陈丹青',
            image: '/pages/images/icon-hot.png',
            content: '通过注册电气工程师（供配电）和注册电气工程师（发输变电）资格考试。担任大型项目专业负责人。',
            isclick: false,
            zanNum: 2,
            answerNum: 1024,
            //回复列表
            ansetNumLIst: []
          }]
      }
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
    console.log(this.data.parentId.length)
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
  //大咖话题点赞
  clickZan: function() {
    var dakaDialog = this.data.dakaDialog;
    if (!dakaDialog['isclick']) {
      dakaDialog['zanNum'] = dakaDialog['zanNum'] + 1;
      dakaDialog['isclick'] = true;
    }else{
      wx.showToast({
        icon: 'none',
        title: '只能点赞一次！',
      })
    }
    this.setData({
      dakaDialog: dakaDialog
    });
  },
  //大咖回答点赞
  clickSubZan: function(e){
    console.log(e)
    var parentId = e.currentTarget.dataset.parentid;
    var subId = e.currentTarget.dataset.subid;
    console.log(parentId)
    console.log(subId)
    var dakaAnswer = this.data.dakaAnswer;
    if (!dakaAnswer[parentId].replay[subId]['isclick']) {
      dakaAnswer[parentId].replay[subId]['zanNum'] = dakaAnswer[parentId].replay[subId]['zanNum'] + 1;
      dakaAnswer[parentId].replay[subId]['isclick'] = true;
    }else{
      wx.showToast({
        icon:'none',
        title: '只能点赞一次！',
      })
    }
    this.setData({
      dakaAnswer: dakaAnswer
    });
  },

//出现留言输入框textarea 聚焦
  bindButtonTap(e) {
    if (e.currentTarget.dataset.patentid !== ''){
      //二级textarea
      //父id
      var parentId = e.currentTarget.dataset.patentid;
      //子id
      var childId = e.currentTarget.dataset.childid;
      this.setData({
        focus: true,
        parentId: parentId,
        childId: childId
      })
    }else{
      //一级textarea
      this.setData({
        focus: true,
        parentId: '',
        childId: ''
      })
    }

  },
  // 子组件事件textarea传过来处理逻辑
  confirmInput:function(e){
    //获取输入值
    var obj = e.detail;
    
    if (this.data.parentId.length == 0){
      //大咖留言
      var dakaAnswer = this.data.dakaAnswer;
      //加入浏览列表
      dakaAnswer.unshift(obj);
      //赋值到总列表里面
    }else{
      //二级留言
      //父id
      var parentId =this.data.parentId;
      //子id
      var childId = this.data.childId;
      var dakaAnswer = this.data.dakaAnswer;
      //这里保存了输入的文字信息
      var data;
      dakaAnswer.map(function (item,indx){
        if (item.id == parentId){
          //找到当前id的这条数据 输入的二级留言加入到answerNum里面
          item.replay[childId].ansetNumLIst.push(obj.title);
          item.replay[childId].answerNum += 1;
          
        }
        
      })
      
    }
    wx.showLoading({
      title: '正在提交...',
    })
    var that = this;
    setTimeout(function () {
      that.setData({
        dakaAnswer: dakaAnswer,
        //关闭输入框 出现原始底部导航
        focus: false
      });
      wx.hideLoading();
      wx.showToast({
        title: '提交成功！',
      });
    }, 1000)
 
  },
  //textarea失去焦点消失 底部导航出现
  defaultInput:function(){
    this.setData({
      focus:false
    })
  }
})