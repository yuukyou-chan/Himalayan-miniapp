// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioList:[
      {"image":"https://imagev2.xmcdn.com/group78/M07/A6/A1/wKgO4F6EVv7gP1QhAABQuiUyuzo039.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      "title":"中国之声","playing":"新闻晚高峰","quantity":1062.80},
      {"image":"https://imagev2.xmcdn.com/group77/M02/BE/55/wKgO1V6EVaWzJKRzAAB_KG0GnJE021.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      "title":"CRI环球资讯","playing":"老外看点","quantity":460.84},
      {"image":"https://imagev2.xmcdn.com/storages/59fe-audiofreehighqps/E6/45/CMCoOSEEaR40AABUhgCnNxgr.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      "title":"经济之声","playing":"试听大会下午版","quantity":329.28},
      {"image":"https://imagev2.xmcdn.com/group75/M06/1E/E6/wKgO3V6L9FHD0pQnAAJnjRFwGy8159.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios",
      "title":"清晨音乐台","playing":"只听好歌不听话","quantity":258.62}
    ],
    showCover:false,
    cateList:["全部分类","新闻台","音乐台","交通台","体育台","经济台","文艺台"]
  },
  showCate(e){
    let showCover = e.target.dataset.showCover;
    this.setData({
      showCover:true,
    })
  },
  closeCate(e){
    let showCover = e.target.dataset.showCover;
    this.setData({
      showCover:false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  
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