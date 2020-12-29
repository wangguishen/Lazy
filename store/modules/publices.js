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
  fabShow: false,
	cardInfo: {
		name: '',
		tel: '',
		phone: '',
		email: '',
		address: '',
		code: '',
		logo: '',
		post: '',
		py: '',
		url: ''
	}
}

const actions = {
  setFabShow ({ commit }, boo) {
    commit(types.SET_FAB_SHOW, boo)
		uni.setStorageSync("FAB_SHOW", boo)
  },
	setCardInfo ({ commit }, boo) {
	  commit(types.SET_CARD_INFO, boo)
		uni.setStorageSync("CARD_INFO", boo)
	}
}
const mutations = {
  'SET_FAB_SHOW' (state, boo) {
    state.fabShow = boo
  },
	'SET_CARD_INFO' (state, boo) {
    state.cardInfo = boo
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
