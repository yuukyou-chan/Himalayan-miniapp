const app = getApp()
Page({
  data: {
    collected: [],
    currentIndex:0,
    height:0,
    login: false,
    content: [
      {text: "我的收藏"},
      {text: "我的已购"},
      {text: "收听历史"},
      {text: "我的礼包"}
    ]
  },
  onLoad(options) {
    this.setData({
      collected: app.globalData.collected,
    })
    const that = this;
    wx.getSystemInfo({
      success (res) {
        that.setData({
          height :res.windowHeight
        })
      }
    })
    console.log(this.data)
  },
  onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
        key: 'userinfo',
        success(res){
          that.setData({
            login: res.data ? true : false,
          })
        }
      })
    }
    this.setData({
      collected: app.globalData.collected
    })
  },
  checkItem(e) {
    const that = this;
    console.log(this.data)
    console.log(e.target.dataset)
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.index,
      })
    }
  },
  // 滑动切换tab
  changeTab(e) {
    const that = this;
    // console.log(e)
    that.setData({
      currentIndex:e.detail.current,
      collected: app.globalData.collected
    })
  },
  // 删除收藏元素
  delete(e){
    let index = e.currentTarget.dataset.index
    // console.log(index)
    this.data.collected.splice(index,1)
    this.setData({
      collected: app.globalData.collected
    })
  }
})