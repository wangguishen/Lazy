<template>
	<view class="home">
		<s-fab></s-fab>
		<swiper
			class="swiper_box"
			:indicator-dots='setSwiper.indicatorDots'
			:indicator-color="setSwiper.indicatorColor"
			:indicator-active-color="setSwiper.indicatorActiveColor"
			:autoplay='setSwiper.autoplay'
			:circular='setSwiper.circular'
			:interval="setSwiper.interval"
			:duration="setSwiper.duration">
			<swiper-item v-for="(item, index) in imgList" :key="index">
				<image class='swiper_box_img' :src="item.src"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import sFab from '@/components/public/s-fab.vue';
export default {
	components: {
		sFab
	},
	data () {
		return {
			setSwiper: {
				indicatorDots: true,
				indicatorColor: '#FF00FF',
				indicatorActiveColor: '#FFFFFF',
				autoplay: true,
				circular: true,
				interval: 5000,
				duration: 1000
			},
			imgList: [
				{
					src: '/static/carousel/bg1.jpg'
				}, {
					src: '/static/carousel/bg2.jpg'
				}, {
					src: '/static/carousel/bg3.jpg'
				}, {
					src: '/static/carousel/bg4.jpg'
				}, {
					src: '/static/carousel/bg5.jpg'
				}, {
					src: '/static/carousel/bg6.jpg'
				}
			]
		}
	},
	methods: {
		copy(e){
		    console.log(e,'长按复制')
		    var text = e.currentTarget.dataset.message
		    wx.setClipboardData({
		      	data: text,
		      	success: function (res) {
		        	wx.showToast({
		          		title: '复制成功',
		        	});
		      	}
		    })
		},
	}
}
</script>

<style lang="scss" scoped>
.home{
	.swiper_box{
		width: 750rpx;
		height: 300rpx;
		.swiper_box_img{
			width: 100%;
			height: 100%;
		}
	}
	// &_img{
	// 	width: 100%;
	// }
}
</style>
