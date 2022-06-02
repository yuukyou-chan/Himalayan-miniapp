// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchHistory: [],
		hotData: [
			{ title: "宝宝巴士", icon: "icon-jiantouUp", color: "text-orange" },
			{ title: "孟鹤堂", icon: "icon-jiantouUp", color: "text-red" },
			{ title: "三体", icon: "icon-jiantouDown", color: "text-green" },
			{ title: "龙王殿", icon: "icon-jiantouUp", color: "text-red" },
			{ title: "儿童恐龙故事", icon: "icon-jiantouDown", color: "text-red" },
			{ title: "儿童版三国演义", icon: "icon-jiantouUp", color: "text-red" },
		]
  },

  /**
	 * 搜索事件
	 */
	search(e){
		this.setData({
			searchHistory: [...this.data.searchHistory,e.detail.value]
		})
	},
	/**
	 * 取消搜索事件
	 */
	cancelSearch(){
		wx.navigateBack({
			delta: 1,
		})
	},
	/**
	 * 清空历史记录
	 */
	clearHistory(){
		this.setData({
			searchHistory: []
		})
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

  }
})