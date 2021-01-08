import Vue from 'vue'
import App from './App'

/* 引入vuex */
import store from '@/store/index.js'

/* 手机类型 */
import '@/utils/sysType.js'

/* icon图标库 */
import '@/style/iconfont.css'

/* 引入公共的css */
import '@/style/style.scss'

/* 引入公共 */
import '@/utils/setting.js'

/* 引入拼音库 */
// import { pinyinUtil } from '@/utils/pinyinUtil.js'

/* 全局过滤器 */
import vFilters from '@/filters/vFilters'
for (const key in vFilters) {
  Vue.filter(key, vFilters[key])
}

Vue.prototype.Url = 'http://172.16.1.157:8080/' 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
