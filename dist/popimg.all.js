$(function(){$("body").append($('<div id="popimg" class="popimg">\r\n    <div class="preview-photo" href="http://fengyun-bar.b0.upaiyun.com/1470742916289691.jpg">ASDFA</div>\r\n</div>\r\n')),window.popimg=new Vue({el:"#popimg",data:{message:"页面加载于 "+new Date,dominstance:null,imgData:{},config:{spacing:60,beforeShowDetail:function(){}}},methods:{init:function(n){console.log("init"),this.config=$.extend(this.config,n),dominstance=this.getInstance(),this.initEvent()},showImage:function(){imgData.src=data,this.dominstance.overlay.show(0,function(){$("body").addClass("pop-show")}),this.dominstance.modal.show(0).addClass("animate-in"),this.loadImg(data).then(function(){$(".modal_content>img",dominstance.modal).remove(),$(".modal_content",dominstance.modal).append('<img src="'+imgData.src+'"/>'),console.log(imgData)},function(){alert("图片加载失败！")})},hide:function(){},getInstance:function(){return this.dominstance?this.dominstance:this.dominstance=this.initDom()},initDom:function(){var n='<div>\r\n    <div class="overlay">\r\n\r\n    </div>\r\n    <div class="pop-modal">\r\n        <div class="pop-close iconfont icon-close_m"></div>\r\n        <div class="pop-detail iconfont icon-menu"></div>\r\n        <div class="modal_content">\r\n            <ul class="pop-list"></ul>\r\n        </div>\r\n    </div>\r\n</div>',o=$(n).find(".overlay"),i=$(n).find(".pop-modal");return console.log("tpl"),console.log(n),$("body").append(o),$("body").append(i),{overlay:o,modal:i}},initEvent:function(){var n=this;$(window).on("resize",function(){this.computePosition()}),$("body").on("click",".preview-photo",function(o){var i=$(o.target).attr("href");return n.showImage(i),!1}),dominstance.overlay.on("click",function(){n.hide()}),$(".pop-close",dominstance.modal).on("click",function(){n.hide()}),$(".pop-detail",dominstance.modal).on("click",function(){if($(".modal_content>.pop-list",dominstance.modal).hasClass("pop-in"))return $(".modal_content>.pop-list",dominstance.modal).removeClass("pop-in").delay(200).animate({top:"-100%"},200),!1;var n=config.beforeShowDetail()||imgData,o="";for(var i in n)o+="<li>"+i+" :"+n[i]+"</li>";$(".modal_content>.pop-list",dominstance.modal).html(o).animate({top:0},400).addClass("pop-in")})}},ready:function(){}}),popimg.init()});