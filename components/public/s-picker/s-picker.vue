<template>
	<view>
		<popup-layer class="s-picker" ref="popupInfo" v-model="popShow" :autoClose="false">
		  <view class="s-picker_box">
				<view class="flex fx-ju_sp mb40">
					<view><button type="default" size="mini" @click="close">取消</button></view>
					<view><button type="primary" size="mini" @click="sureBtn">确定</button></view>
				</view>
				<view class="pic flex fx-ju_s mb40">
					<view class="pic_text">姓名：</view>
					<input class="pic_ipt" type="text" v-model="cardInfo.name" />
				</view>
				<view class="pic flex fx-ju_s mb40">
					<view class="pic_text">电话：</view>
					<input class="pic_ipt" type="text" v-model="cardInfo.phone" />
				</view>
				<view class="pic flex fx-ju_s mb40">
					<view class="pic_text">手机：</view>
					<input class="pic_ipt" type="text" v-model="cardInfo.tel" />
				</view>
				<view class="pic flex fx-ju_s mb40">
					<view class="pic_text">网址：</view>
					<input class="pic_ipt" type="text" v-model="cardInfo.url" />
					<icon type="clear" size="15" />
				</view>
				<view class="pic flex fx-ju_s mb40">
					<view class="pic_text">邮箱：</view>
					<input class="pic_ipt" type="text" v-model="cardInfo.email" />
				</view>
				<view class="pic flex fx-ju_s mb40">
					<view class="pic_text">地址：</view>
					<input class="pic_ipt" type="text" v-model="cardInfo.address" />
				</view>
		  </view>
		</popup-layer>
	</view>
</template>

<script>
import popupLayer from '@/components/popup-layer/popup-layer.vue'
export default {
	components:{
		popupLayer
	},
	props: {
		isShow: {
			type: Boolean,
			default: () => {
				return false
			}
		}
	},
	computed: {
		cardInfo: function () {
			return this.$store.getters.getCardInfo
		}
	},
	watch: {
		isShow: function (val) {
			this.popShow = val
			if (val) {
				this.$refs.popupInfo.show()
			} else {
				this.$refs.popupInfo.close()
			}
		}
	},
	data () {
		return {
			popShow: false
		}
	},
	mounted () {
		this.init()
	},
	methods: {
		init () {
			this.popShow = this.isShow
		},
		open () {
			this.popShow = true
			this.$refs.popupInfo.show()
		},
		close () {
			this.popShow = false
			this.$refs.popupInfo.close()
		},
		sureBtn () {
			this.close()
			this.$store.dispatch('publices/setCardInfo', this.cardInfo)
			this.$emit('sureBtn', this.cardInfo)
		}
	}
}
</script>

<style lang="scss" scoped>
.s-picker{
	width: 100%;
	&_box{
		width: 100%;
		padding: 20rpx;
		font-size: 30rpx;
		box-sizing: border-box;
		.pic{
			width: 100%;
			&_ipt{
				max-width: 80%;
				border-bottom: 1rpx solid #AEEEEE;
			}
		}
		input{
			width: 100%;
		}
		.mb40{
			margin-bottom: 40rpx;
		}
	}
}
</style>
