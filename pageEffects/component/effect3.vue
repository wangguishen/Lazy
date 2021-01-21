<template>
	<view class="effect3 ahc flex">
		<view class="border3" :class="{'border3-active': active}">
			<!-- 132132 -->
		</view>
	</view>
</template>

<script>
export default {
	name: 'effect3',
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
			// let self = this
			// self.active = true
			// setTimeout(() => {
			// 	self.active = false
			// }, 500)
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
.effect3 {
	.border3 {
		width: 50%;
		height: 30%;
	}
}
</style>
