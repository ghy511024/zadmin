window.TPL=window.TPL||{},TPL.tplmap=TPL.tplmap||{},TPL.getTpl=TPL.getTpl||function(o){return TPL.tplmap[o]},function(o){o.tplmap["zadmin-popimg"]='<div class="popimg-panel"><div class="popimg-overlay" style="display: none;"></div><div class="popimg-modal"><i class="popimg-close iconfont icon-close_m"></i><i class="popimg-detail iconfont icon-menu"></i><div class="modal_content"><ul class="popimg-list"></ul><img src="" /></div></div></div>'}(TPL),window.popimg=function(){var o=null,i={},t={spacing:60,beforeShowDetail:function(){},errorResolve:function(){}},n={init:function(i){t=$.extend(t,i),o=n.getInstance(),n.initEvent()},initDom:function(){var o=$(TPL.getTpl("zadmin-popimg"));return $("body").append(o),{overlay:o.find(".popimg-overlay"),modal:o.find(".popimg-modal")}},initEvent:function(){$(window).on("resize",function(){n.computePosition()}),$("body").on("click",".preview-photo",function(o){var i=$(o.target).attr("data-href");return n.showImage(i),!1}),$(".popimg-close",o.modal).on("click",function(){n.hide()}),$(".popimg-detail",o.modal).on("click",function(){if($(".modal_content>.popimg-list",o.modal).hasClass("popimg-in"))return $(".modal_content>.popimg-list",o.modal).removeClass("popimg-in").delay(300).animate({top:"-100%"},200),!1;var n=t.beforeShowDetail()||i,e="";for(var a in n)"error"!==a&&(e+="<li>"+a+" :"+n[a]+"</li>");$(".modal_content>.popimg-list",o.modal).html(e).animate({top:0},400).addClass("popimg-in")})},resetDom:function(){o.modal.removeClass("animate-out animate-in"),$("body").removeClass("popimg-show"),$(".modal_content>.popimg-list",o.modal).removeAttr("style").removeClass("popimg-in")},loadImg:function(){var o=$.Deferred(),t=new Image;return t.src=i.src,t.onload=function(){i.width=t.width,i.height=t.height,i.aspect_ratio=t.width/t.height,i.error=!1,n.computePosition(),o.resolve()},t.onerror=function(){o.reject()},o},hide:function(){o.overlay.animate({opacity:0},100,function(){$(this).hide()}),$("body").removeClass("popimg-show"),o.modal.addClass("animate-out").delay(400).removeClass("animate-in"),setTimeout(function(){n.resetDom()},500)},showImage:function(e){return null===o&&n.init(),"undefined"==typeof e?!1:(n.resetDom(),i.src=e,o.overlay.show(0,function(){$("body").addClass("popimg-show")}),o.modal.show(0).addClass("animate-in"),void n.loadImg(e).then(function(){$(".modal_content>img",o.modal).remove(),$(".modal_content",o.modal).append('<img src="'+i.src+'"/>')},function(){var o=t.errorResolve();o||(console.warn("图片加载失败！"),i.width=360,i.height=240,i.aspect_ratio=1.5,i.error=!0,n.computePosition())}))},computePosition:function(){var n=$(window).width(),e=$(window).height(),a=Math.min(n-2*t.spacing,i.width),m=Math.min(e-2*t.spacing,i.height);a/m<i.aspect_ratio&&(m=a/i.aspect_ratio),a/m>i.aspect_ratio&&(a=m*i.aspect_ratio),o.modal.css({left:Math.abs(a-n)/2,top:Math.abs(m-e)/2,width:a,height:m})},getInstance:function(){return o?o:o=n.initDom()}};return{showImage:n.showImage}}();