//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../api/index.js');
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		imgList: [
			'/image/swiper/ad1.jpg',
			'/image/swiper/ad2.jpg',
			'/image/swiper/ad3.jpg',
			'/image/swiper/ad4.jpg',
			'/image/swiper/ad5.jpg',
			'/image/swiper/ad6.jpg',
			'/image/swiper/ad7.jpg'
		],
		navList: [{
			icon: '/image/nav-icon/bangdan.png',
			events: 'goTolist',
			text: '榜单'
		},
		{
			icon: '/image/nav-icon/diantai.png',
			events: 'goToRadio',
			text: '广播'
		},
		{
			icon: '/image/nav-icon/gushi.png',
			events: 'goTolist',
			text: '情感电台'
		},
		{
			icon: '/image/nav-icon/xiaoshuo.png',
			events: 'goTolist',
			text: '听知识'
		},

		],
		swiperCurrent: 0,
	},
	onLoad: function (options) {
		const that = this
		myRequest.getData().then(res => {
      const {guess,hotRecommends} = res.data
			that.setData({
				showitem: true,
				guess: guess.list.slice(0, 7),
				xiaoshuocontent: hotRecommends.list[0].list,
				xiangshengcontent: hotRecommends.list[2].list,
        tuokocontent: hotRecommends.list[4].list,
			});
			// console.log(guess);
      // console.log(hotRecommends);
      // console.log(playsCounts)
			
		}).catch(err => {
			console.log('error :>> ', err);
			that.setData({
				showitem: false
			})
		})
	},
	//轮播图改变事件
	swiperChange: function (e) {
		this.setData({
			swiperCurrent: e.detail.current
		})
	},
	goToBangDan: function () {
		wx.navigateTo({
      url: '/pages/index/bangdan/bangdan',
		})
	},
	goToRadio: function () {
		wx.navigateTo({
      url: '/pages/radio/radio',
		})
	},
	goTolist: function () {
		wx.navigateTo({
      url: '/pages/list/list',
		})
	},
	gotoDetails(e) {
		const url = e.currentTarget.dataset.coverimg;
		const title = e.currentTarget.dataset.title;
		const nickname = e.currentTarget.dataset.nickname
    console.log(e)
    const playscounts = e.currentTarget.dataset.playscounts;
		wx.navigateTo({
			// 页面传参
      url: '/pages/details/details?url=' + url + '&title=' + title + '&playscounts=' + playscounts+ '&nickname=' + nickname,
    })
	}	
})