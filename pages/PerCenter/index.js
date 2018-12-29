
Page({

  data: {
    showModal: false,
    select: false,
    grade_name: '电工',
    grades: [
      '电工',
      '盘工',
    ]
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  /**
   * 已选下拉框
   */
  mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      grade_name: name,
      select: false
    })
  },


})