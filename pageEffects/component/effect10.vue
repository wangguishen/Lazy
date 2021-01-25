<template>
	<view class="effect10 ahc flex">
		<view class="border10 flex" :class="{'border10-active': active}">
			123
		</view>
	</view>
</template>

<script>
export default {
	name: 'effect10',
	data () {
		return {
			active: false,
			setInt: null
		}
	},
	mounted() {
		let self = this
		self.setInt = setInterval(()=>{
			self.changeActive()
		}, 3000)
	},
	beforeDestroy () {
		this.destroyClear()
	},
	methods: {
		changeActive () {
			this.active = !this.active
		},
		destroyClear () {
			let self = this
			clearInterval(self.setInt)
			self.setInt = null
		}
	}
}
</script>

<style lang="scss" scoped>
.effect10 {
	background: #9acd32;
	.border10 {
		width: 50%;
		height: 30%;
		font-size: 14px;
		// background: #FFF;
	}
}
</style>
