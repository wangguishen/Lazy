<script>
	export default {
		onLaunch: function() {
			const self = this
			uni.getSystemInfo({
				success: function (res) {
					console.log('res', res)
					self.$store.dispatch('appUtil/setAppType', res)
				}
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		height: 100%;
	}
</style>
