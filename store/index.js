/*
 * @Descripttion: 懒宅
 * @version: 1.0.0
 * @Author: shinphy
 * @Date: 2019-10-16 11:24:13
 * @LastEditors: shinphy
 * @LastEditTime: 2019-12-06 12:48:15
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// console.log(modules)
const store = new Vuex.Store({
  modules,
  getters
})
// console.log(store, 'store')
export default store
