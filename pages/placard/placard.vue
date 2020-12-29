<template>
	<view class="placard">
		<s-fab />
		<view class="lazy_hint">
			*注：可以根据不同需求，选择不同类型卡片进行制作。
		</view>
		<view class="placard_list flex">
			<view class="placard_grid flex fx-dr" v-for="(item, index) in gridList" :key="index" @click="selectType(item)">
				<view class="iconfont" :class="item.icon ? item.icon : ''" :style="{'color': item.color}"></view>
				<text class="placard_text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import sFab from '@/components/public/s-fab.vue';
export default {
	components: {
		sFab
	},
	data() {
		return {
			gridList: [
				{
					id: 1,
					name: '名片',
					icon: 'icon-card',
					color: '#6495ED'
				}, {
					id: 2,
					name: '海报',
					icon: 'icon-haibao',
					color: '#8A2BE2'
				}, {
					id: 3,
					name: '车票',
					icon: 'icon-chepiao',
					color: '#00EE76'
				}, {
					id: 4,
					name: '优惠券',
					icon: 'icon-youhuiquan',
					color: '#EE6AA7'
				}, {
					id: 5,
					name: '邀请函',
					icon: 'icon-yaoqinghan',
					color: '#FF3030'
				}
			]
		};
	},
	methods: {
		selectType (item) { // 选择不同类型卡片
			console.log('item', item)
			uni.navigateTo({
				url: `/pages/placard/select-card/select-card?id=${item.id}&name=${item.name}`
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.placard{
	.placard_list{
		width: 100%;
		justify-content: flex-start;
		flex-wrap: wrap;
		.placard_grid{
			width: calc(50% - 30rpx);
			height: 100%;
			margin: 10rpx 20rpx 10rpx;
			border: 1px solid $lz-border;
			border-radius: 6rpx;
			padding: 80rpx 20rpx;
			box-sizing: border-box;
			.iconfont{
				font-size: 100rpx;
			}
			.placard_text{
				margin-top: 20rpx;
			}
		}
		.placard_grid:nth-child(n){
			margin-right: 10rpx;
		}
		.placard_grid:nth-child(2n){
			margin-left: 10rpx;
		}
	}
	
}
</style>
