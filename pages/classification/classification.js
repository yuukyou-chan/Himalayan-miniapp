const { ificationContent } = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    VerticalNavTop: 0,
    TabCur: 0,
    ificationTitle:[
      {title:"有声书"},
      {title:"畅销书"},
      {title:"儿童"},
      {title:"相声评书"},
      {title:"情感生活"},
      {title:"人文"},
      {title:"历史"},
      {title:"国学书院"},
      {title:"音乐"},
      {title:"教育培训"},
      {title:"体育"}
    ],
    ificationContent:ificationContent
  },


  onLoad() {
    const that = this;
    //调用getSystemInfo APi获取到用户的手机屏幕高度，动态设置scroll-view的高度
    wx.getSystemInfo({
      success (res) {
        // var heightleft = (res.windowHeight*2);
        const height = (res.windowHeight*2);
        that.setData({
          phoneHeight: height,
        })
      }
    })
  },

  //随着滚动动态设置左侧边栏的选中态
  showActive(e) {
    const index = parseInt(e.detail.scrollTop/116);
    this.setData({
      activeIndex: index
     })
  },
  // 侧边栏的点击事件
  change(e) {
    const { index, id } =  e.currentTarget.dataset
    this.setData({
      VerticalNavTop: (index - 1) * 50,
      activeIndex:index,
      TabCur: id,
    })
  },
})