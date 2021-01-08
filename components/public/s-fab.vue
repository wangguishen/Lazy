<template>
	<view>
		<uni-fab
			:pattern="fab.pattern"
			:content="fab.content"
			direction="vertical"
			@trigger="openFab"
			@fabClick="fabClick"
		></uni-fab>
	</view>
</template>

<script>
export default {
	name: "sFab",
	data () {
		return {
			curPageRoute: '',
			fab: {
				pattern: {
					buttonColor: '#436EEE'
				},
				content: [
					{
						id: 0,
						iconPath: '/static/icon/home_2.png',
						selectedIconPath: '/static/icon/home_1.png',
						path: 'pages/home/home',
						text: '首页',
						active: false
					}, {
						id: 1,
						iconPath: '/static/icon/ln_2.png',
						selectedIconPath: '/static/icon/ln_1.png',
						path: 'pages/recom/recom',
						text: '推荐',
						active: false
					}, {
						id: 2,
						iconPath: '/static/icon/hb_2.png',
						selectedIconPath: '/static/icon/hb_1.png',
						path: 'pagePlacard/src/placard/placard',
						text: '海报',
						active: false
					}, {
						id: 3,
						iconPath: '/static/icon/collect_2.png',
						selectedIconPath: '/static/icon/collect_1.png',
						path: 'pageEffects/src/effects/effects',
						text: '特效',
						active: false
					}, {
						id: 4,
						iconPath: '/static/icon/my_2.png',
						selectedIconPath: '/static/icon/my_1.png',
						path: 'pages/user/user',
						text: '我的',
						active: false
					}
				]
			}
		}
	},
	mounted() {
		let pages = getCurrentPages();
		let curPage = pages[pages.length - 1];
		this.curPageRoute = curPage.route;
		this.fab.content.forEach(item => {
			if (item.path === this.curPageRoute) {
				item.active = true
			} else {
				item.active = false
			}
		})
	},
	computed: {
		fabShow: function () {
			return this.$store.getters.getFabShow
		}
	},
	methods: {
		openFab (e) { // 菜单点击事件
			if (e.item.path !== this.curPageRoute) {
				uni.redirectTo({
					url: `/${e.item.path}`
				})
			}
		},
		fabClick () { // 悬浮按钮点击事件
			// this.$store.dispatch('publices/setFabShow', !this.fabShow)
			console.log("悬浮按钮点击事件", this.fabShow)
		}
	}
}
</script>

<style>
</style>
