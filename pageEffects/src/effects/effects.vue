<template>
	<view class="effect">
		<s-fab></s-fab>
		<view class="effect_list flex">
			<view
				class="effect_list_grid flex fx-dr"
				v-for="(item, index) in effects"
				:key="index"
				@click="selectType(item)"
			>
			 <!-- :style="{background: CW001()}" -->
				<view class="effect_list_grid_box">
					<component :is="item.pathName" />
				</view>
				<text class="effect_list_grid_text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { mixins } from '@/mixins/mixins'
import sFab from '@/components/public/s-fab.vue';
import { component } from '@/utils/global'
component('pageEffects')
export default {
	name: 'effect',
	mixins: [mixins],
	components: {
		sFab
	},
	data () {
		return {
			effects: [
				{
					name: '效果1',
					pathName: 'effect1'
				}, {
					name: '效果2',
					pathName: 'effect2'
				}, {
					name: '效果3',
					pathName: 'effect3'
				}, {
					name: '效果4',
					pathName: 'effect4'
				}, {
					name: '效果5',
					pathName: 'effect5'
				}, {
					name: '效果6',
					pathName: 'effect6'
				}, {
					name: '效果7',
					pathName: 'effect7'
				}, {
					name: '效果8',
					pathName: 'effect8'
				}, {
					name: '效果9',
					pathName: 'effect9'
				}, {
					name: '效果10',
					pathName: 'effect10'
				}, {
					name: '效果11',
					pathName: 'effect11'
				}, {
					name: '效果12',
					pathName: 'effect12'
				}, {
					name: '效果13',
					pathName: 'effect13'
				}, {
					name: '效果14',
					pathName: 'effect14'
				}
			]
		}
	},
	methods: {
		selectType (item) {
			this.CW002('/pageEffects/src/effects/effects-details', item)
		}
	}
}
</script>

<style lang="scss" scoped>
@font-face{
	// font-family: ;
}
.effect{
	&_list{
		width: 100%;
		justify-content: flex-start;
		flex-wrap: wrap;
		&_grid{
			width: calc(50% - 30rpx);
			height: 300rpx;
			margin: 10rpx 20rpx 10rpx;
			border: 1px solid $lz-border;
			border-radius: 6rpx;
			box-sizing: border-box;
			overflow: hidden;
			&_box{
				width: 50%;
				height: 50%;
				color: #FFFFFF;
				border-radius: 6rpx;
				border: 1px solid $lz-border-in;
			}
			&_text{
				margin-top: 20rpx;
			}
		}
		&_grid:nth-child(n){
			margin-right: 10rpx;
		}
		&_grid:nth-child(2n){
			margin-left: 10rpx;
		}
	}
	&_prev{
		width: 100%;
		height: 500rpx;
	}
}
</style>
