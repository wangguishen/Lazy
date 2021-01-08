export const mixins = {
	data () {
		return {
			
		}
	},
	computed: {
	},
	methods: {
		/**
		 * 随机生成颜色
		 * transparency 透明度  默认：1
		 */
		CW001: (transparency = 1) => {
			let r = Math.floor(Math.random() * 255);
			let g = Math.floor(Math.random() * 255);
			let b = Math.floor(Math.random() * 255);
			return `rgba(${r}, ${g}, ${b}, ${transparency})`
		}
	}
}