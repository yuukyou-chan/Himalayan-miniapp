const app = getApp()
let collected = app.globalData.collected

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    list: [
      {
        imgurl: "http://imagev2.xmcdn.com/group43/M04/7C/BF/wKgKklr0O8Og64tkAADE9DuNjI8775.jpg!op_type=5&upload_type=album&device_type=ios&name=small",
        title: "听NBA巨星学篮球",
        trackTitle: "公共收益由谁管理？"
      },
      {
        imgurl: "http://imagev2.xmcdn.com/group43/M04/7C/BF/wKgKklr0O8Og64tkAADE9DuNjI8775.jpg!op_type=5&upload_type=album&device_type=ios&name=small",
        title: "今天出来玩",
        trackTitle: "下雷暴雨能去哪啊"
      }
    ],
    collected: app.globalData.collected
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  onload(){
    this.setData({
      collected:app.globalData.collected,
    })
    console.log(collected)
  }
  
})

