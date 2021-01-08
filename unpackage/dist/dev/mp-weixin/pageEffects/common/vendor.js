(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pageEffects/common/vendor"],{

/***/ 74:
/*!*********************************************!*\
  !*** F:/Shinphy/Lazy/Lazy/mixins/mixins.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.mixins = void 0;var mixins = {
  data: function data() {
    return {};


  },
  computed: {},

  methods: {
    /**
              * 随机生成颜色
              * transparency 透明度  默认：1
              */
    CW001: function CW001() {var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(transparency, ")");
    } } };exports.mixins = mixins;

/***/ }),

/***/ 75:
/*!********************************************!*\
  !*** F:/Shinphy/Lazy/Lazy/utils/global.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.randomColor = exports.component = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/** 
                                                                                                                                                                                                                                                                             * 动态组件引用
                                                                                                                                                                                                                                                                             * path 文件夹名称
                                                                                                                                                                                                                                                                             */
var component = function component(path) {
  var modulesFiles;
  if (path === 'pageEffects') {
    modulesFiles = __webpack_require__(76);
  }
  if (modulesFiles) {
    modulesFiles.keys().forEach(function (fileName) {
      var componentConfig = modulesFiles(fileName);
      var fileNameFilter = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
      var componentName = fileNameFilter.charAt(0).toUpperCase() + fileNameFilter.slice(1);
      _vue.default.component(componentName, componentConfig.default || componentConfig);
    });
  }
};

/** 
    * 随机颜色生成
    */exports.component = component;
var randomColor = function randomColor() {var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(transparency, ")");
};
// export const randomColor = () => {
// 	return '#' + (Math.random() * 0xffffff << 0).toString(16)
// }
exports.randomColor = randomColor;

/***/ }),

/***/ 76:
/*!***************************************************************************!*\
  !*** F:/Shinphy/Lazy/Lazy/pageEffects/component sync nonrecursive \.vue$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./effect1.vue": 77,
	"./effect2.vue": 84,
	"./effect3.vue": 89,
	"./effect4.vue": 94,
	"./effect5.vue": 99,
	"./effect6.vue": 104
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 76;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pageEffects/common/vendor.js.map