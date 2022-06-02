const app = getApp()
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		performance: [{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		{
			name: "《人在江湖》郭德纲 于谦",
			year: "2年前",
			count: "5601.9万",
			time: "34:36"
		},
		],
		performanceInfo: [],
		imgurl: ''
	},
	onLoad(options) {
		this.setData({
			performanceInfo: [{
				imgurl: options.url + '=5&upload_type=album&device_type=ios&name=medium&magick=png',
				title: options.title,
				author: options.nickname,
				num1: options.playscounts,
				num2: "257"
			}],
			imgurl: options.url + '=5&upload_type=album&device_type=ios&name=medium&magick=png',
		});
	},
	collection(){
		app.globalData.collected.push(this.data.performanceInfo[0] )
		console.log(app.globalData.collected)
		wx.showToast({
			title: '收藏成功',
		})
  }
})