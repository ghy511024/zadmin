define('vue/a.vue', function(require, exports, module) {

//
//
//
//
//
//

module.exports = {
  created() {
    console.log('component a created !');
  },
  methods: {
    //
  }
}

var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-a"},[_vm._v("\n  Component A\n")])}
__vue__options__.staticRenderFns =[]
__vue__options__._scopeId = "_v-70cd7fe4"

;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\nbody[_v-70cd7fe4] {\r\n  a {\r\n    color: inherit;\r\n  }\r\n}\r\n.component-a[_v-70cd7fe4] {\r\n  line-height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgb(227, 99, 61);\r\n}\r\n");


});
