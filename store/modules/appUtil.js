/*
 * @Descripttion: 懒宅
 * @version: 1.0.0
 * @Author: shinphy
 * @Date: 2019-10-16 11:24:13
 * @LastEditors: shinphy
 * @LastEditTime: 2019-12-06 12:48:15
 */

import * as types from '../types.js'

const state = {
  localType: {}, // 手机型号
	appType: {} // 设备信息
}

const actions = {
  setLocalType ({ commit }, boo) {
    commit(types.SET_LOCAL_TYPE, boo)
		uni.setStorageSync("LOCAL_TYPE", boo)
  },
	setAppType ({ commit }, boo) {
	  commit(types.SET_APP_TYPE, boo)
		uni.setStorageSync("APP_TYPE", boo)
	}
}
const mutations = {
  'SET_LOCAL_TYPE' (state, boo) {
    state.localType = boo
  },
	'SET_APP_TYPE' (state, boo) {
	  state.appType = boo
	}
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
