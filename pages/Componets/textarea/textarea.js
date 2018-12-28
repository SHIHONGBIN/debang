// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    proA:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //评论输入框控制
    inputTextarea: '',
    focus: false,
    proA:'',
    obj:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //出现留言输入框textarea 聚焦
    bindButtonTap() {
      this.setData({
        proA: true
      })
    },
    //输入绑定textarea
    textareaInput: function (e) {
      var text = e.detail.value;
      this.setData({
        inputTextarea: text
      });
    },
    //提交留言
    confirmInput: function () {
      var obj = {
        id:99999,
        // 头像
        userheader: '/pages/images/avt-small.png',
        //姓名
        name: '电光火石',
        //时间
        time: '刚刚',
        title: this.data.inputTextarea,
        replay: []
      };
      //传值到父组件
      this.triggerEvent('myevent', obj, {})
    },
    defaultInput:function(){
      var obj = {proA:false}
      //传值到父组件
      this.triggerEvent('myevent2', obj, {})
    }
  },
  /*ready*/
  ready: function (e) {
  },
})
