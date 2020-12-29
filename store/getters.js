/*
 * @Descripttion: 懒宅
 * @version: 1.0.0
 * @Author: shinphy
 * @Date: 2019-10-16 11:24:13
 * @LastEditors: shinphy
 * @LastEditTime: 2019-12-06 12:48:15
 */
const getters = {
  getLocalType: state => { // 手机型号
    let status = uni.getStorageSync("LOCAL_TYPE")
    if (status) {
      return status
    }
    return state.appUtil.localType
  },
	getAppType: state => { // 手机型号
	  let status = uni.getStorageSync("APP_TYPE")
	  if (status) {
	    return status
	  }
	  return state.appUtil.appType
	},
	getFabShow: state => { // fab是否显示
    let status = uni.getStorageSync("FAB_SHOW")
    if (status) {
      return status
    }
    return state.publices.fabShow
  },
	getCardInfo: state => { // 卡片输入信息
	  let status = uni.getStorageSync("CARD_INFO")
	  if (status) {
	    return status
	  }
	  return state.publices.cardInfo
	},
}
export default getters
