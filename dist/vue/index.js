"use strict";

define('vue/B.vue', function(require, exports, module) {

'use strict';

//
//
//
//
//
//

module.exports = {
    created: function created() {
        console.log('组件B 加载完成');
    },

    methods: {
        //
    }
};
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"B"},[_vm._v("\n    我是组件B 颜色是蓝色\n")])}
__vue__options__.staticRenderFns =[]
__vue__options__._scopeId = "_v-12c13465"

;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.B[_v-12c13465] {\n    position:absolute;\n    width:300px;\n    height:100px;\n    left:50%;\n    margin-left:-150px;\n    top:50px;\n    background:blue;\n    color:yellow;\n}\n");


});
;
define('vue/A.vue', function(require, exports, module) {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _B = require('vue/B.vue');

var _B2 = _interopRequireDefault(_B);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = {
    components: {
        ComponentB: _B2["default"]
    },
    created: function created() {
        console.log('组件A 加载完成');
    },

    methods: {
        //
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index"},[_c('p',[_vm._v("这是组件A 背景颜色是 红色(组件A 包含组件B)")]),_vm._v(" "),_c('component-B')],1)}
__vue__options__.staticRenderFns =[]
__vue__options__._scopeId = "_v-17b901ad"

;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("\n\n.index[_v-17b901ad] {\n    width:500px;\n    height:300px;\n    background:red;\n    position:relative;\n}\n");


});
;

var app = new Vue({
    el: '#app',
    methods: {},
    components: {
        App: require('vue/A.vue')["default"]
    },
    created: function created() {
        console.log('主页加载完成');
    }
});