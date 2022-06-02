// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		currentTab: 1,
		navTitle: [
			{id:1, title: '新品限免' },
			{id:2, title: '商业财经' },
			{id:3, title: '相声评书' },
			{id:4, title: '人文历史' }
    ],
    list: [
      [{"image":"http://imagev2.xmcdn.com/storages/1dd4-audiofreehighqps/3D/AD/GKwRIDoGOdJgAAx7gAFCbU00.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
      "title":"【新品限免】继女荣华|古风重生权谋宫斗多人有声剧|小夜光、盗愁",
      "trackTitle":"【新品限时免费】2022年5月30日—7月30日限时免费收听上架首日更新30集，每日晚八点更新三集，订阅可以...",
      "sell":"33.2亿",
      "episode":"44集"},
      {"image":"http://imagev2.xmcdn.com/storages/ad3e-audiofreehighqps/C8/29/GKwRIaIGXTL7AA1f1gFYb4ue.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
      "title":"【新品限免】万事如易|古代女卦师|VIP免费|多人有声剧",
      "trackTitle":"【新品限时免费】2022年5月30日—6月30日限时免费收听！三月果经典著作，此书主播读过6遍，精彩不必多言...",
      "sell":"23.6亿",
      "episode":"36集"},
      {"image":"http://imagev2.xmcdn.com/storages/55fb-audiofreehighqps/03/EF/GKwRIDoGLuBaAAdLjQE8b3LQ.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
      "title":"【新品限免】昆仑神棺之生死门丨九龙金棺&八卦风水&诡异地宫丨多人有声剧",
      "trackTitle":"【新品限时免费】2022年5月30日—6月30日限时免费收听！",
      "sell":"16.8亿",
      "episode":"42集"}],
      
      [{"image":"http://imagev2.xmcdn.com/storages/d3fe-audiofreehighqps/0E/C8/GKwRIRwGSU9QAA-4CQFLaqMh.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
      "title":"王昕招商丨《招商变现密码》线上视频课",
      "trackTitle":"招商十大赚钱模式丨第五讲：用商机赚钱",
      "sell":"45亿",
      "episode":"8集"},
      {"image":"http://imagev2.xmcdn.com/group30/M03/F9/9B/wKgJXlmII17QJQwsAAE1G3BFilE987.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
      "title":"陆家嘴财经早餐",
      "trackTitle":"上海发布重振经济50条措施，6月1日起取消企业复工复产审批制度|2022-05-30",
      "sell":"33.6亿",
      "episode":"18集"},
      {"image":"http://imagev2.xmcdn.com/storages/2549-audiofreehighqps/DE/79/CMCoOSEDvMZaAAEwgAB1IO2H.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
      "title":"杨侃｜杨毅电台","tags":"杨毅,杨毅电台,杨侃",
      "trackTitle":"【杨侃】169 美国深圳对美国金华，这才是勇士的优势",
      "sell":"16.8亿",
      "episode":"12集"}],
      
    [{"image":"http://imagev2.xmcdn.com/storages/3157-audiofreehighqps/FF/61/GKwRIasF7gy_AAO0GQEcjerL.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
    "title":"乾隆皇帝|赵维莉评书",
    "trackTitle":"到了保护农业生产的作用，使得清朝国库日渐充实。乾隆时期武功繁盛，在平定边疆地区叛乱方面做出了巨大...",
    "sell":"38亿",
    "episode":"88集"},
    {"image":"http://imagev2.xmcdn.com/group90/M04/29/00/wKg5PV9jQPvgXYDvAA_SeGLCC64290.png!op_type=5&upload_type=album&device_type=ios&name=medium",
    "title":"翰青·以为说/精选短篇评书故事",
    "trackTitle":"带毛的新娘5",
    "sell":"23.6亿",
    "episode":"36集"},
    {"image":"http://imagev2.xmcdn.com/storages/c749-audiofreehighqps/C8/D8/GKwRIW4GUQKbAATNHwFQDVNT.jpeg!op_type=5&upload_type=album&device_type=ios&name=medium",
    "title":"郭德纲30年相声精选【超全过瘾版】",
    "trackTitle":"“江山父老能容我，不使人间造孽钱”“装三分痴呆防死，留七分正经谋生。”“我争者人必争，极力争未必...",
    "sell":"16.8亿",
    "episode":"122集"}],

    [{"image":"http://imagev2.xmcdn.com/storages/dfb8-audiofreehighqps/34/08/GMCoOSYGafF2AAX3BwFgLlz7.jpeg!op_type=5&upload_type=album&device_type=ios&name=medium",
    "title":"开国将帅风云录|解密历史档案|朱德林彪彭德怀粟裕王震|解放战争抗美援朝|毛泽东",
    "trackTitle":"解密开国将帅们鲜为人知的历史，铭记革命军人的历史功绩",
    "sell":"25亿",
    "episode":"56集"},
    {"image":"http://imagev2.xmcdn.com/group20/M0B/B6/D6/wKgJLFe-TyuCUGx4AAFJETNyhAw282.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
    "title":"听谢涛·真三国",
    "trackTitle":"拒绝杜撰，还原真实三国风云",
    "sell":"16亿",
    "episode":"36集"},
    {"image":"http://imagev2.xmcdn.com/group18/M06/02/56/wKgJJVqP3ZLAsnPuAADkmst8S74953.jpg!op_type=5&upload_type=album&device_type=ios&name=medium",
    "title":"百家讲坛 易中天品三国",
    "trackTitle":"易中天为你还原真实的三国",
    "sell":"12.6亿",
    "episode":"244集"}]
    ]
  },
  // 导航栏的点击事件
  handleClick:function(e){
    var i = e.currentTarget.dataset.id;
    this.setData({
      currentTab:i
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