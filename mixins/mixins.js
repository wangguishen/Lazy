import * as global from '@/utils/global.js'

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
		},
		/**
		 * 跳转路径 -- 保留当前页面
		 * path		-->		跳转目标路径
		 * param	-->		参数 默认为空对象，已对象形式进行传递
		 */
		CW002: (path, param = {}) => {
			uni.navigateTo({
				url: `${path}${global.ObjectAnParam(param)}`
			});
		},
		/**
		 * 跳转路径 -- 关闭当前页面
		 * path		-->		跳转目标路径
		 * param	-->		参数 默认为空对象，已对象形式进行传递
		 */
		CW003: (path, param = {}) => {
			uni.redirectTo({
				url: `${path}${global.ObjectAnParam(param)}`
			});
		},
		/**
		 * 
		 */
		CW004: () => {
		},
	}
}