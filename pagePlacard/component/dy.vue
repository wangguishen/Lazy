<template>
	<view class="dy">
		<view class="ipt-box">
			<input class="ipt" type="text" v-model="dyUrl" />
			<button class="btn" @click="changeUrl">{{btnText}}</button>
		</view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			dyUrl: '  https://v.douyin.com/JpKqELK/ 复制此链接，打开抖音搜索，直接观看视频！',
			btnText: '转化',
			isUrlShow: false
		}
	},
	onReady() {
	},
	methods:{
		changeUrl () {
			this.dyUrl = this.initUrl(this.dyUrl)
			// window.location.replace(this.dyUrl)
			// this.analysisUrl(this.dyUrl)
			// this.isUrlShow = true
			// console.log(this.initUrl(this.dyUrl))
		},
		initUrl (url) {
			return url.replace(/^\s*/, '').split(' ')[0]
		},
		analysisUrl (url) {
			console.log(url)
			let targetUrl = new URL(url)
			console.log(targetUrl)
		}
	}
}
</script>

<style lang="scss">
	.dy{
		position: relative;
		width: 100%;
		height: 100%;
		.ipt-box{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			height: 200rpx;
			.ipt{
				width: 80%;
				height: 50rpx;
				padding-left: 15rpx;
				border-radius: 50rpx;
				box-sizing: border-box;
				border: 1rpx solid #808080;
			}
			.btn{
				width: 50%;
				height: 80rpx;
				color: #FFF;
				margin-top: 30rpx;
				line-height: 80rpx;
				background: #4CD964;
			}
		}
		.sss{
			position: absolute;
			top: 200rpx;
			left: 0;
			width: 100%;
			height: 200rpx;
		}
	}
</style>
