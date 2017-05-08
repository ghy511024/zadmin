define('lib/demotest/vue/plug1.vue', function(require, exports, module) {

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


module.exports = {
    data: function () {
        return {
            level1: "xxx"
        }
    }, name: "test"
}

var app = new Vue({
    el: "#app",
    data: {
        title: "我是一个标题",
        list: [
            {text: "111"},
            {text: "222"}
        ],
        isboy: true
    }
})

var __vue__options__;
if(exports && exports.__esModule && exports.default){
  __vue__options__ = exports.default;
}else{
  __vue__options__ = module.exports;
}
__vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"xxx"}},[_c('h1',[_vm._v("我的等级"+_vm._s(_vm.level1))]),_vm._v(" "),_c('h1',[_vm._v("我的名字"+_vm._s(_vm.uname1))])])}
__vue__options__.staticRenderFns =[]
__vue__options__._scopeId = "_v-54f85106"

;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})("\n\n\n\n\n\n\n\n\n\n#xxx[_v-54f85106]{\n    margin:0px;\n}\n");


});
