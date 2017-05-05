/* 
 * To change this license header, choose License Headers in Project Properties.
 * and open the template in the editor.
 */
$(function () {
    $("body").append($(__inline('popimg.html')));
    
    window.popimg = new Vue({
        el: "#popimg",
        data: {
            message: '页面加载于 ' + new Date(),
            showClass: "hide"
        },
        methods: {
            show: function () {
                this.showClass = "show";
            }, 
            hide: function () {
                this.showClass = "hide";
            }
        },
        ready: function () {
            alert("准备就绪")
        }
    })
})