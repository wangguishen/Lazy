<template>
	<view class="effects-details">
		<component :is="isComponent" />
	</view>
</template>

<script>
import { mixins } from '@/mixins/mixins'
import { component } from '@/utils/global'
component('pageEffects')
export default {
	name: 'effectsDetails',
	mixins: [mixins],
	data () {
		return {
			isComponent: 'effect1',
		}
	},
	onLoad (obj) {
		if (Object.keys(obj).length === 0) return
		this.isComponent = obj.pathName
		uni.setNavigationBarTitle({
			title: `特效-${obj.name}`
		});
	},
	mounted () {
		
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
.effects-details{
	width: 100%;
	height: 100%;
}
</style>
