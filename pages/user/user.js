const app = getApp()
let userInfo = app.globalData.userInfo;
Page({
	data: {
		timeout: [
			{ text: "不开启" },
			{ text: "播放当前声音关闭" },
			{ text: "播放2首声音关闭" },
			{ text: "播放3首声音关闭" },
			{ text: "播放4首声音关闭" },
			{ text: "10分钟后" },
			{ text: "20分钟后" },
			{ text: "30分钟后" },
		],
		activeIndex: 0
	},

	onLoad() {
		const that = this;
		//获得设备信息
		wx.getSystemInfo({
			success(res) {
				that.setData({
					phoneHeight: res.windowHeight,
				})
			}
		})
	},
	gotoLogin() {
		wx.navigateTo({
			url: './phoneLogin/phoneLogin',
		});
	},
	openSwitch() {
		const that = this;
		that.setData({
			show: true
		})
	},
	close() {
		const that = this;
		that.setData({
			show: false
		})
	},
	chooseTimeOut(e) {
		const that = this;
		that.setData({
			activeIndex: e.currentTarget.dataset.activeindex
		})
	}
})