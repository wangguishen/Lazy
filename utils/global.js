import Vue from 'vue'
/** 
 * 动态组件引用
 * path 文件夹名称
 */
export const component = (path) => {
	let modulesFiles;
	if (path === 'pageEffects') {
		modulesFiles = require.context('../pageEffects/component', false, /\.vue$/)
	}
	if (modulesFiles) {
		modulesFiles.keys().forEach(fileName => {
		  const componentConfig = modulesFiles(fileName)
			const fileNameFilter = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
		  const componentName = fileNameFilter.charAt(0).toUpperCase() + fileNameFilter.slice(1)
		  Vue.component(componentName, componentConfig.default || componentConfig)
		})
	}
}

/** 
 * 随机颜色生成
 */
export const randomColor = (transparency = 1) => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgba(${r}, ${g}, ${b}, ${transparency})`
}
// export const randomColor = () => {
// 	return '#' + (Math.random() * 0xffffff << 0).toString(16)
// }
