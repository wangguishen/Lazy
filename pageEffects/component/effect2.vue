<template>
	<view class="effect2 ahc flex">
		<div class="border1" :class="{'border1-active': active}"></div>
	</view>
</template>

<script>
export default {
	name: 'effect2',
	data () {
		return {
			active: false,
			setInt: null
		}
	},
	mounted() {
		let self = this
		self.destroyClear()
		self.changeActive()
		self.setInt = setInterval(()=>{
			self.changeActive()
		}, 3000)
	},
	beforeDestroy () {
		this.destroyClear()
	},
	methods: {
		changeActive () {
			let self = this
			self.active = true
			setTimeout(() => {
				self.active = false
			}, 500)
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
.effect2 {
	.border1 {
		width: 50%;
		height: 30%;
	}
}
</style>
