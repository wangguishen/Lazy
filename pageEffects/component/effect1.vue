<template>
	<view class="effect1">
		<view
			v-for="(item, index) in list"
			:key="index"
			class="effect1_box"
			:class="[
				item.className,
				{'current': current -1 === index},
				{'next': current === index},
				{'finished': index < current - 1},
				{'strut': current === list.length && index === list.length - 1}
			]"
			:style="{background: CW001()}"
			@touchstart="touchstart"
			@touchend="touchend"
		>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
import { mixins } from '@/mixins/mixins'
export default {
	name: 'effect1',
	mixins: [mixins],
	data () {
		return {
			current: 1,
			coord: {
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0
			},
			list: [
				{
					name: '第一页',
					className: 'box1'
				}, {
					name: '第二页',
					className: 'box2'
				}, {
					name: '第三页',
					className: 'box3'
				}, {
					name: '第四页',
					className: 'box4'
				}, {
					name: '第五页',
					className: 'box5'
				}, {
					name: '第六页',
					className: 'box6'
				}, {
					name: '第七页',
					className: 'box7'
				}
			]
		}
	},
	mounted () {
		this.init()
	},
	methods: {
		init () {
			
		},
		touchstart (e) {
			this.coord.startX = e.changedTouches[0].pageX
			this.coord.startY = e.changedTouches[0].pageY
		},
		touchend (e) {
			this.coord.endX = e.changedTouches[0].pageX
			this.coord.endY = e.changedTouches[0].pageY
			if (this.coord.startX - this.coord.endX > 20) {
				this.moveAdd()
			} else if (this.coord.endX - this.coord.startX > 20) {
				this.moveMinus()
			}
		},
		moveAdd () {
			if (this.current < this.list.length) {
				this.current++
			}
		},
		moveMinus () {
			if (this.current > 1) {
				this.current--
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.effect1{
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	&_box{
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		transform: scale(0.6);
	}
	.box1{
		width: 100%;
		height: 100%;
		z-index: 0;
		transform: scale(0.8);
	}
	.current {
	  z-index: 3;
	  transform: scale(0.8);
	  transition-timing-function: ease-in;
	  transition-duration: 0.2s;
	  transition-property: transform;
	}
	.next {
	  z-index: 2;
	  transition-timing-function: ease-in;
	  transition-duration: 0.2s;
	}
	.finished {
	  z-index: 4;
	  transform: translate3d(-205%, 200%, 0);
	  transition: all 0.5s ease;
	}
	.strut{
		z-index: 4;
		transform: scale(1);
	}
}
</style>
