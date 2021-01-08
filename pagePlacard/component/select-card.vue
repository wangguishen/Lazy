<template>
	<view class="card">
		<popup-layer class="popup" ref="popupRef" :direction="'right'" v-model="boolShow" :autoClose="false">
		  <view class="card_left">
				<view class="lazy_hint flex">
					请选择<text class="card_color">{{paramName}}</text>模板。
				</view>
				<image class="card_img" v-for="(item, index) in list[paramId]" :key="index" :src="item.img" mode="aspectFit" @click="selectImg(item)"></image>
		  </view>
		</popup-layer>
		<view class="card_canvas" v-if="currentImg.img">
			<canvas class="card_canvas_box1" :style="{'width': currentImg.canW + 'px','height': currentImg.cavH + 'px'}" canvas-id="cardCan"></canvas>
			<canvas class="card_canvas_box2" :style="{'width': currentImg.canW_bg + 'px','height': currentImg.cavH_bg + 'px'}" canvas-id="cardCanBg"></canvas>
		</view>
		<view class="select_img">
			<image class="select_img_box1" :src="currentImg.img" mode="aspectFit"></image>
			<image class="select_img_box2" :src="currentImg.img_bg" mode="aspectFit"></image>
			<!-- <button class="select_img_btn" type="primary" @click="editInfo">填写信息</button> -->
			<button class="select_img_btn" type="primary" @click="sureBtn(cardInfo)">测试</button>
		</view>
		<cover-view class="card_cover flex fx-dr" v-if="currentImg.img_yt && currentImg.img_yt !== '' && currentImg.secondShow">
			<cover-image class="card_cover_img" :src="currentImg.img_yt"></cover-image>
			<button class="card_cover_btn" type="primary" @click="useImg">确定使用</button>
		</cover-view>
		<s-picker ref="myPicker" :isShow="cardInfoIsShow" @sure-btn="sureBtn"></s-picker>
	</view>
</template>

<script>
	import popupLayer from '@/components/popup-layer/popup-layer.vue'
	import sPicker from '@/components/public/s-picker/s-picker.vue'
	import { pinyin } from '@/utils/Convert_Pinyin.js'
	export default {
		components:{
			popupLayer, sPicker
		},
		data() {
			return {
				paramId: 0,
				paramName: '卡片',
				boolShow: false,
				list: [
					[
						{
							img: 'https://wangguishen.github.io/imgGather/lazy/card/mb1-1.png',
							img_bg: 'https://wangguishen.github.io/imgGather/lazy/card/mb1-2.png',
							img_yt: 'https://wangguishen.github.io/imgGather/lazy/card/artwork/yt1-1.png'
						}, {
							img: 'https://wangguishen.github.io/imgGather/lazy/card/mb2-1.png',
							img_bg: 'https://wangguishen.github.io/imgGather/lazy/card/mb2-2.png',
							img_yt: 'https://wangguishen.github.io/imgGather/lazy/card/artwork/yt2-1.png'
						}, {
							img: 'https://wangguishen.github.io/imgGather/lazy/card/mb3-1.png',
							img_bg: 'https://wangguishen.github.io/imgGather/lazy/card/mb3-2.png',
							img_yt: 'https://wangguishen.github.io/imgGather/lazy/card/artwork/yt3-1.png'
						}, {
							img: 'https://wangguishen.github.io/imgGather/lazy/card/mb4-1.png',
							img_bg: 'https://wangguishen.github.io/imgGather/lazy/card/mb4-2.png',
							img_yt: 'https://wangguishen.github.io/imgGather/lazy/card/artwork/yt4-1.png'
						}, {
							img: 'https://wangguishen.github.io/imgGather/lazy/card/mb5-1.png',
							img_bg: 'https://wangguishen.github.io/imgGather/lazy/card/mb5-2.png',
							img_yt: 'https://wangguishen.github.io/imgGather/lazy/card/artwork/yt5-1.png'
						}, {
							img: 'https://wangguishen.github.io/imgGather/lazy/card/mb6-1.png',
							img_bg: 'https://wangguishen.github.io/imgGather/lazy/card/mb6-2.png',
							img_yt: 'https://wangguishen.github.io/imgGather/lazy/card/artwork/yt6-1.jpg'
						}
					]
				],
				currentImg: { // 当前选中的图片
					img: '', // 原图片
					lifeW: 0, // 原图片宽度
					lifeH: 0, // 原图片高度
					cavW: 0, // canvas的宽度
					cavH: 0 ,// canvas的高度
					img_bg: '', // 背景 - 原图片
					lifeW_bg: 0, // 背景 - 原图片宽度
					lifeH_bg: 0, // 背景 - 原图片高度
					cavW_bg: 0, // 背景 - canvas的宽度
					cavH_bg: 0, // 背景 - canvas的高度
					img_yt: '',
					secondShow: false
				},
				ctx: null, // canvas主页
				ctx_bg: null, // canvas背景
				cardInfoIsShow: false
			}
		},
		computed: {
			appType: function () {
				return this.$store.getters.getAppType
			},
			cardInfo: function () {
				return this.$store.getters.getCardInfo
			}
		},
		onLoad (param) {
			// this.paramId = Number(param.id) - 1
			this.paramName = param.name
			console.log('param', this.paramId)
		},
		mounted () {
			this.init()
		},
		methods: {
			init () { // 初始化
				this.$refs.popupRef.show()
				
				this.selectImg(this.list[0][this.paramId])
			},
			selectImg (item) {
				const self = this
				this.currentImg.img = item.img
				this.currentImg.img_bg = item.img_bg
				this.currentImg.img_yt = item.img_yt
				// this.secondShow = true
				this.$refs.popupRef.close()
				this.drawCard()
			},
			
			drawCard () { // 绘制主页面
				const self = this;
				console.log('22222222222222', this.appType)
				self.ctx = uni.createCanvasContext('cardCan')
				console.log('11',self.currentImg.img)
				uni.getImageInfo({
					src: self.currentImg.img,
					success: function (image) {
						console.log('22',image)
						self.currentImg.lifeW = image.width
						self.currentImg.lifeH = image.height
						self.currentImg.cavW = self.appType.windowWidth
						self.currentImg.cavH = self.appType.windowWidth * self.currentImg.lifeH / self.currentImg.lifeW
						self.ctx.drawImage(image.path, 0, 0, self.currentImg.cavW, self.currentImg.cavH)
						self.ctx.draw(true, () => {
							console.log('33', self.currentImg)
							self.drawImg('cardCan', self.currentImg.cavW, self.currentImg.cavH, 'img')
						})
						self.drawCardBg()
					}
				});
			},
			
			drawCardBg () { // 绘制背景页面
				const self = this;
				self.ctx_bg = uni.createCanvasContext('cardCanBg')
				uni.getImageInfo({
					src: self.currentImg.img_bg,
					success: function (image) {
						console.log('44', self.currentImg)
						self.currentImg.lifeW_bg = image.width
						self.currentImg.lifeH_bg = image.height
						self.currentImg.cavW_bg = self.appType.windowWidth
						self.currentImg.cavH_bg = self.appType.windowWidth * self.currentImg.lifeH_bg / self.currentImg.lifeW_bg
						self.ctx_bg.drawImage(image.path, 0, 0, self.currentImg.cavW_bg, self.currentImg.cavH_bg)
						self.ctx_bg.draw(true)
					}
				});
			},
			drawImg (id, w, h, img) { // 提取绘制图片公共方法
				const self = this;
				uni.canvasToTempFilePath({
					x: 0,
					y: 0,
					width: self.currentImg.cavW,
					height: self.currentImg.cavH,
					destWidth: self.currentImg.cavW,
					destHeight: self.currentImg.cavH,
					canvasId: id,
					success: function(res) {
						self.currentImg[img] = res.tempFilePath
						console.log('resssss', res)
					},
				})
			},
			useImg () { // 点击确定使用按钮
				this.currentImg.img_yt = ''
			},
			editInfo () { // 填写信息
				const self = this;
				self.cardInfoIsShow = true
				// self.$refs.myPicker.info()
			},
			sureBtn (info) {
				const self = this;
				let namePY = pinyin.getFullChars(info.name).toUpperCase()
				self.ctx.setFontSize(20)
				self.ctx.setFillStyle('#104E8B')
				self.ctx.fillText(info.name, 280, 50)
				self.ctx.save()
				
				self.ctx.setFontSize(16)
				self.ctx.fillText(pinyin.getFullChars(info.name).toUpperCase(), 280 - 16 * 7, 50)
				self.ctx.save()
				
				self.ctx.setFontSize(10)
				self.ctx.fillText(info.phone, 158, 112)
				self.ctx.fillText(info.email, 158, 127)
				self.ctx.fillText(info.url, 158, 143)
				self.ctx.fillText(info.address, 158, 158)
				self.ctx.draw(true, () => {
					self.drawImg('cardCan', self.currentImg.cavW, self.currentImg.cavH, 'img')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.card{
	width: 100%;
	min-height: 100vh;
	background: #F4F4F4;
	overflow: hidden;
	.lazy_hint{
		padding: 10rpx;
		.card_color{
			margin: 0 5rpx;
			color: $lz-special;
		}
	}
	.card_img{
		width: calc(100% - 20rpx);
		height: 160rpx;
		margin: 10rpx;
		border: 1px solid $lz-border;
		box-sizing: border-box;
	}
	.card_canvas{
		position: fixed;
		top: 100vh;
		left: 0;
		z-index: -1000;
		width: 100%;
		height: 100%;
		&_box1, &_box2{
			width: 100%;
			min-height: 150rpx;
		}
		&_box1{
			margin-bottom: 30rpx;
		}
		&_btn{
			width: 80%;
			margin-top: 30rpx;
		}
	}
	.select_img{
		width: 100%;
		height: 100%;
		&_box1, &_box2{
			width: 100%;
			// min-height: 150rpx;
		}
		&_box1{
			margin-bottom: 30rpx;
		}
		&_btn{
			width: 80%;
			margin-top: 30rpx;
		}
	}
	.card_cover{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		&_img{
			width: 90%;
			height: auto;
		}
		&_btn{
			width: 70%;
			margin-top: 30rpx;
		}
	}
}
</style>
