Page({
  data: {
    array: ['电工技师', '电工技师1', '电工技师2', '电工技师3'],
    array1: ['盘厂电工', '盘厂电工1', '盘厂电工2', '盘厂电工3'],
    objectArray: [{
        id: 0,
        name: '电工技师'
      },
      {
        id: 1,
        name: '电工技师1'
      },
      {
        id: 2,
        name: '电工技师2'
      },
      {
        id: 3,
        name: '电工技师3'
      }
    ],
    index: 0,


    objectArray1: [{
        id: 0,
        name: '盘厂电工'
      },
      {
        id: 1,
        name: '盘厂电工1'
      },
      {
        id: 2,
        name: '盘厂电工2'
      },
      {
        id: 3,
        name: '盘厂电工3'
      }
    ],
    index1: 0,
    yzmTips: '获取验证码',
    isTimeRun: false,
    //输入input的值
    config: {
      phoneNumber: '',
      vcode: '',
      name1:'',
      name2:''
    },
    vcodeInit: '123456',
    //是否注册成功弹窗
    isSuccess:false
  },



  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    });
    var config = this.data.config;
    config['name1'] = this.data.objectArray[this.data.index].name;
    this.setData({
      config: config
    })
  },

  bindPickerChange1(e) {
    this.setData({
      index1: e.detail.value
    });
    var config = this.data.config;
    config['name2'] = this.data.objectArray1[this.data.index1].name;
    this.setData({
      config: config
    })
  },
  //输入绑定
  textinput: function(e) {
    var name = e.target.dataset.name;
    var value = e.detail.value;
    var config = this.data.config;
    config[name] = value;
    this.setData({
      config: config
    })
  },
  //倒计时 获取验证码
  verficodeFn: function() {
    const initYZM = this.data.yzmTips;
    var config = this.data.config;

    if (config.phoneNumber != '') {
      if (new RegExp('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$', 'gi').test(config.phoneNumber) == false) {
        wx.showToast({
          icon: 'none',
          title: '手机号不正确！'
        })
      } else {
        //验证通过
        if (this.data.isTimeRun == false) {
          this.setData({
            isTimeRun: true
          });
          // 倒计时秒
          let time = 10;
          // 调用验证码接口

          let fn = setInterval(() => {
            --time;
            if (time > 0) {
              this.setData({
                yzmTips: `${time}s`
              })
            } else {
              this.setData({
                yzmTips: initYZM,
                isTimeRun: false
              });
              clearInterval(fn)
            };
          }, 1000)
        }
      }

    } else {
      wx.showToast({
        icon: 'none',
        title: '手机号不能为空！'
      })
    }

  },
  //注册
  submit: function() {
    var config = this.data.config;
    if (config.vcode == this.data.vcodeInit) {
      //wx.request  data = config 调用接口
      
      // 提交成功
      this.setData({
        isSuccess:true
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '验证码错误！'
      })
    }
  }
})