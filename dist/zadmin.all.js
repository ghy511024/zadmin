window.Ut=function(){return Ut={getParam:function(t){var e=window.location.search,n={},i=e.replace("?","").split("&");for(var a in i){var r=i[a];n[r.split("=")[0]]=r.split("=")[1]}return null!=t?n[t]:n},gettime:function(t){var e=null;if(null!=t&&0!=t.length){var n=t.split(" ");if(null!=n&&n.length>1){var i=(n[0]||"-").split("-"),a=i[0],r=Number(i[1])-1,o=i[2],l=n[1].split(":"),s=l[0],p=l[1];e=new Date(a,r,o,s,p).getTime()}return e}},Null:function(t){return null==t||""==t||0==t.length},isURL:function(t){return null==t.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+(\w|\/)$/i)?!1:!0},getTimeTostr:function(t){var e="",t=Number(t)||-1;if(t>0){var n=new Date(t),i=n.getMonth()+1;i=10>i?"0"+i:i;var a=n.getDate();a=10>a?"0"+a:a;var r=n.getHours();r=10>r?"0"+r:r;var o=n.getMinutes();o=10>o?"0"+o:o,e=n.getFullYear()+"-"+i+"-"+a+" "+r+":"+o}return e},search:function(t,e){var n=Ut.getParam();n[t]=e;var i=[];for(var a in n)null!=a&&a.length>0&&i.push(a+"="+n[a]);var r=i.join("&");return r}}}();var CssTool={makstyle:function(t){var e=this.getstyle(t);$('<style type="text/css">'+e+"</style>").appendTo("head")},getstyle:function(t){for(var e="",n=this._getstyleArray(t),i=0;i<n.length;i++)for(var a=n[i],r=a.length-1;r>=0;r--){var o=a[r];for(var l in o){var s=l.replace(/[#]/gi," #").replace(/[\.]/gi," .").replace(/&\s/gi,"&").replace(/&/gi,""),p=o[l];e+=s+"{"+p+"}"}}return e=e.replace(/^\s/gi,"")},_getstyleArray:function(t){var e=[];for(var n in t){var i=this._getyles(n,t[n]);e.push(i)}return e},_getyles:function(t,e){function n(t,e){var a={};for(var r in e)/[#\.&]/gi.test(r)&&"object"==typeof e[r]?n(t+r,e[r]):a[t]=(a[t]||"")+r+":"+e[r]+";";i.push(a)}var i=[];return n(t,e),i}};jQuery.fn.zen=function(t,e){var n=$(this);return void 0==typeof t?n:(t.replace(/^([^>+]+)(([>+])(.*))?/,function(t,i,a,r,o){i.replace(/^([^*]+)(\*([0-9]+))?/,function(t,i,a,l){void 0==l&&(l=1),1>l&&(l=1);for(var s=i.match(/[^.#]+/)[0],p=1;l>=p;p++){var d=$("<"+s+">");i.replace(/([.#])([^.#]+)/g,function(t,e,n){"#"==e?d.attr("id",n):"."==e&&d.addClass(n)}),n.append(d),void 0==r?void 0!=e&&jQuery.each([d],e):"+"==r?n.zen(o,e):">"==r&&d.zen(o,e)}})}),$(this))},window.zen=function(t,e){var n=$("<span>").zen(t,e).html();return $(n)},window.fytip=function(t){var e,n=!1,i=!1,a={init:function(){this.layout(),this.initEvent()},layout:function(){var e={".fy-slide-tip":{position:"fixed",padding:"5px","z-index":"1000","font-size":"12px","line-height":"1.4",opacity:"0.95",top:"0px",".arrow":{position:"absolute",width:"0",height:"0","border-color":"transparent","border-style":"solid","border-width":"5px 5px 5px 5px","&.top-arrow":{left:"50%",bottom:"-5px","margin-left":"-5px","border-top-color":"#425160"},"&.right-arrow":{top:"50%",left:"-5px","margin-top":"-5px","border-right-color":"#425160"}},".tip-inner":{"max-width":"400px",padding:"12px 8px",color:"#fff","text-align":"center","text-decoration":"none","border-radius":"0",background:"#163342"}}};t(".fy-tip").length&&CssTool.makstyle(e)},initEvent:function(){t(".fy-tip").on({mouseenter:function(){n=!0;var e=t(r.getSinleton()),i=t(this).offset().top,a=t(this).offset().left,o=t(this).innerWidth(),l=t(this).innerHeight(),s=t(this).attr("data-tip")||"top",p=t(this).attr("data-desc")||"content";"content"==p&&(p=t(this).html()),r.reset(),e.find(".arrow").addClass(s+"-arrow"),e.find(".tip-inner").html(p);var d=e.width(),c=e.height();"top"==s&&e.css({left:a-(d-o+5)/2,top:i-c-10}),"right"==s&&(e.css({left:a+o+2,top:i-(c-l)/2-5}),e.addClass("")),e.show()},mouseleave:function(){n=!1,setTimeout(function(){if(!n&&!i){var e=t(r.getSinleton());e.hide()}},50)}}),t(document).on("mouseenter",".fy-slide-tip",function(){i=!0}),t(document).on("mouseleave",".fy-slide-tip",function(){i=!1;var e=t(r.getSinleton());e.hide()})},reset:function(){var e=t(r.getSinleton()).find(".arrow");e.removeClass("top-arrow"),e.removeClass("right-arrow"),e.removeClass("left-arrow"),e.removeClass("bottom-arrow")},getSinleton:function(){function n(){return null==e&&(e=new i),e}function i(){var e=document.createElement("div");return t(e).addClass("fy-slide-tip"),t(e).append(t('<div class="arrow"></div>')),t(e).append(t('<div class="tip-inner"></div>')),t("body").append(e),e}return n()}},r=a;return a}($),$(document).ready(function(){fytip.init()});var alertStyle={"#zalert":{display:"none","font-family":"'微软雅黑'",top:"0",left:"0",width:"100%",height:"100%",position:"fixed","z-index":"99999"},"#zalert .bk":{opacity:"0.5",width:"100%",height:"100%",background:"#000",filter:"alpha(opacity=50)"},"#zalert .z-close":{position:"absolute",right:"8px","font-size":"24px",top:"0px",color:"#B3B2B2",cursor:"pointer"},"#zalert .z-close:hover":{color:"#5F5A5A"},"#zalert .panel":{background:"#FFF","border-radius":"3px",position:"fixed","z-index":"99999999",width:"400px","min-height":"100px",padding:"15px 20px",left:"50%",top:"25%","margin-left":"-200px"},"#zalert .info":{margin:"30px auto","text-align":"center","font-size":"14px",height:"24px","line-height":"24px",width:"100%"},"#zalert .zbtn":{width:"60px",border:"1px solid #df1155",color:"#fff","background-color":"#f71d65","font-size":"14px","text-align":"center",cursor:"pointer",margin:"0px auto 20px",top:"25%",padding:"2px 5px"},"#zalert .zbtn:hover":{"background-color":"#FD4884"}};window.zalert=function(){var t={init:function(){this.cstyle(),this.initEvent(),this.cpage()},cstyle:function(){$('<style type="text/css">'+t.getstyle(alertStyle)+"</style>").appendTo("head")},cpage:function(){var t=zen("div#zalert>div.bk+div.panel"),e=$(t).find(".panel");e.zen("div.title-wrap>div.z-title+div.z-close"),e.zen("div.content>div.info+div.zbtn"),$(e).find(".z-close").html("×"),$(e).find(".z-title").html("来自章鱼tv的提示"),$(e).find(".zbtn").html("确定"),$("body").append(t)},initEvent:function(){$(document).on("click","#zalert .zbtn,#zalert .z-close",function(){$("#zalert").hide()})},alert:function(t){$("#zalert").fadeIn(),$("#zalert .info").html(t)},getstyle:function(t){function e(t){var e="";for(var n in t)if(/[#\.]/gi.test(n)&&"object"==typeof t[n]){var i=t[n],a="";for(var r in i)a+=r+":"+i[r]+";";e+=n+"{"+a+"}"}return e}var n=e(t);return n}};return $(document).ready(function(){t.init()}),function(e,n){t.alert(e,n)}}(),window.ImgUp=function(){var t={init:function(){this.wrapAllImgUp(),this.layout(),this.viewImg()},initEvent:function(){},layout:function(){e("http://static.ws.kukuplay.com/common/lib/ajaximg/ajaxupload.js",function(){t.bindAllImgUp()})},wrapAllImgUp:function(){$(".zy-imgup").each(function(){t.wrapImgUp($(this))})},wrapImgUp:function(t){$(t).wrap("<div class='zyform-up-wrap'></div>");var e=$('<i class="iconfont icon-eye f12 zyadmin-eyeicon"></i>'),n=$('<i class="iconfont icon-upload f12 zyadmin-upicon"></i>');$(t).parent().append(e).append(n)},bindAllImgUp:function(){$(".zyform-up-wrap .zyadmin-upicon").each(function(){t.bindImgUp($(this))})},bindImgUp:function(t){window.UpConf=window.UpConf||{};var e=UpConf.upurl||"/picture/multiupload",n=UpConf.returl||"origin",i=UpConf.success;null!=e&&e.length>0&&new AjaxUpload(t,{action:e,name:"upfile",data:{maxWidth:"120",maxHeight:"120"},dataType:"json",autoSubmit:!0,onSubmit:function(){},onComplete:function(e,a){if(console.log("上传回调:"+a),"string"==typeof a)try{a=JSON.parse(a)}catch(r){console.log("返回数据转换为对象失败。。。",a)}if(null!=a){if(a instanceof Array)for(var o in a){var l=a[o],s=l[n],p=s.url;$(t).parent().find("input").val(p)}else{var d=a[n];d instanceof Array?null!=d&&d.length>0&&$(t).parent().find("input").val(d[0]):"string"==typeof d&&$(t).parent().find("input").val(d)}"function"==typeof i&&i(a,$(t).parent().find("input"))}else alert("返回数据为空")}})},viewImg:function(){$(document).on("mouseenter",".zyadmin-eyeicon",function(){var t=$(this).parent().find("input").val();return null==t.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+(\w|\/)$/i)?!1:void($(this).parent().find(".viewimg").length?$(this).parent().find(".viewimg").attr("src",t).show():($(this).parent().append("<img class='viewimg' src='"+t+"'/>"),$(this).parent().find("img").show()))}),$(document).on("mouseleave",".zyform-up-wrap",function(){$(this).parent().find(".viewimg").hide()})}},e=function(t,e){var n=null;n=document.createElement("script"),n.type="text/javascript","function"==typeof e&&(n.onload=n.onreadystatechange=function(){var t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onreadystatechange=null,e())}),n.src=t,document.getElementsByTagName("head")[0].appendChild(n)};return t}(),$(function(){ImgUp.init()}),window.zform=function(){var tmpfun,zform={init:function(){zform.initEvent()},initEvent:function(){$(document).on("click",".add-dyn",function(){var t=$(this).parent().find(".dyn-tmp").clone().removeClass("dyn-tmp");$(this).parent().find(".dyn-list").append(t);var e=$(t).find(".zy-imgup");e.length&&(ImgUp.wrapImgUp(e),ImgUp.bindImgUp($(e).parent().find(".zyadmin-upicon"))),zform.resize()}),$(document).on("click",".add-zlist",function(){var t=$(this).parent().find(".list-tmp").clone().removeClass("list-tmp");$(this).parent().find(".z-list").append(t),zform.resize()}),$(document).on("click",".up-dyn,.up-zlist",function(){var t=$(this).parent(),e=$(t).prev();e.before(t)}),$(document).on("click",".del-zlist,.del-dyn",function(){var t=$(this).parent();t.remove()}),$(document).on("click",".z-form .close,.z-form .cancel",function(){$(".zform-cover").hide(),tmpfun=null}),$(document).on("click",".z-form .save",function(){zform.save()})},bindEvent:function(){},save:function(){var t=zform.getData();console.log("save data:",JSON.stringify(t)),null!=tmpfun&&"function"==typeof tmpfun?tmpfun(t):alert("callback is null")},getData:function(){var data={};return $(".z-form .form .item").each(function(){var type=$(this).data("ftype"),key=$(this).data("fkey"),dtype=$(this).attr("dtype");if(!Ut.Null(key))if("text"==type){var value=($(this).find("input").val()||"").trim();null!=value&&value.length>0&&(data[key]=value)}else if("time"==type){var value=($(this).find("input").val()||"").trim();if(null!=value&&value.length>0)try{var times=Ut.gettime(value);data[key]=times}catch(e){alert(e)}}else if("select"==type){var value=$(this).find("select").val();null!=value&&value.length>0&&(data[key]=value)}else if("radio"==type){var name=$(this).find("input[type='radio']").attr("name"),value=$(this).find("input[name='"+name+"']:checked").val();null!=value&&value.length>0&&(data[key]=value)}else if("textarea"==type){var value=$(this).find("textarea").val();null!=value&&value.length>0&&(data[key]=value)}else if("checkbox"==type){var checkret=[];$(this).find("input[type='checkbox']:checked").each(function(){var t=$(this).val();checkret.push(t)}),checkret.length>0&&(data[key]=checkret)}else if("imgup"==type){var value=$(this).find("input").val(),cvalue=$(this).find("input").data("cvalue");if(null!=cvalue){var obj={};if("string"==typeof cvalue)try{obj=eval(data)}catch(e){}else obj=cvalue;data[key]=obj}else null!=value&&value.length>0&&(data[key]=value)}else if("zlist"==type){var array=zform.getZlist($(this),dtype);array.length>0&&(data[key]=array)}else if("dynlist"==type){var array=zform.getDynlist($(this));array.length>0&&(data[key]=array)}}),data},getZlist:function(t,e){var n=[];return $(t).find(".z-list .zlist-item").each(function(){var t=$(this).find("input").val();Ut.Null(e)||"number"!=e||(t=Number(t)||null),Ut.Null(t)||n.push(t)}),n},getDynlist:function(el){var retarray=[];return $(el).find(".dyn-list .dyn-item").each(function(){var map={},haskey=!1;$(this).find("input").each(function(){var key=$(this).attr("key"),value=$(this).val(),cvalue=$(this).data("cvalue");if(null!=cvalue){var obj={};if("string"==typeof cvalue)try{obj=eval(cvalue)}catch(e){}else obj=cvalue;haskey=!0,obj instanceof Array?obj.length>0&&(map=obj[0]):map=obj}else null!=key&&null!=value&&value.length>0&&(map[key]=value,haskey=!0)}),haskey&&retarray.push(map)}),retarray},cform:function(t,e){"function"==typeof e&&(tmpfun=e),cform.cform(t)},eform:function(t,e,n){"function"==typeof n&&(tmpfun=n),cform.eform(t,e)},resize:function(){$(".zform-cover .z-form").removeAttr("style"),$(window).resize();var t=$(".zform-cover").find(".form").height(),e=$(".zform-cover").find(".z-form").height();e-t>70&&$(".zform-cover .z-form").css({height:t+70})}};return zform}(),window.cform=function(){function clone(t){function e(){}e.prototype=t;var n=new e;for(var i in n)"object"==typeof n[i]&&(n[i]=clone(n[i]));return n}var instance,cform={cform:function(t){var e=_this.getSinleton(),n=$(e).find(".form");$(n).empty();for(var i in t){var a=t[i];if(null!=a){var r=a.type;if("text"==r){var a=_this._getText(t[i],i);$(n).append(a)}else if("radio"==r){var a=_this._getRadio(t[i],i);$(n).append(a)}else if("checkbox"==r){var a=_this._getCheckbox(t[i],i);$(n).append(a)}else if("select"==r){var a=_this._getSlect(t[i],i);$(n).append(a)}else if("textarea"==r){var a=_this._getTextArea(t[i],i);$(n).append(a)}else if("zlist"==r){var a=_this._getList(t[i],i);$(n).append(a)}else if("dynlist"==r){var a=_this._getDynlist(t[i],i);$(n).append(a)}else if("imgup"==r){var a=_this._getImgUp(t[i],i);$(n).append(a)}else if("time"==r){var a=_this._getTime(t[i],i);$(n).append(a)}}}var o=zen("div.item.save-wrap>div.btn.btn-default.cancel+div.btn.btn-success.save");$(o).find(".cancel").html("取消"),$(o).find(".save").html("保存"),$(n).append(o),$(e).show(),setTimeout(function(){zform.resize()},1)},eform:function(el,data,fun){var tmpdata={};$(el).find("td").each(function(){var key=$(this).data("key"),value=$(this).attr("data-value"),forbid=$(this).data("forbid");if(null!=key&&key.length>0){!data[key]||null!=value&&0!=value.length?!data[key]||"text"!=data[key].type&&"textarea"!=data[key].type||null==value||(value=$(this).attr("data-value")):("text"==data[key].type||"textarea"==data[key].type)&&(value=($(this).html()||"").trim());for(var tmpkey in data)if(tmpkey==key){if(tmpdata[key]=clone(data[key]),/^\[/gi.test(value))try{tmpdata[key].value=eval(value)}catch(e){console.log("td数据转换出错",el)}else if(/###/gi.test(value)){var array=value.split("###");tmpdata[key].value=array}else tmpdata[key].value=value;null!=forbid&&forbid&&(tmpdata[key].forbid=!0);break}}}),cform.cform(tmpdata)},_getText:function(t,e){if(null!=t&&null!=e){var n=t.name,i=t.value,a=t.forbid,r=zen("div.item>label");return $(r).attr("data-ftype","text"),$(r).attr("data-fkey",e),$(r).find("label").html(n+"："),$(r).append($("<input type='text' value='"+(i||"")+"'/>")),a&&$(r).find("input").attr("disabled","true"),$(r)}},_getImgUp:function(t,e){if(null!=t&&null!=e){var n=t.name,i=t.value,a=t.forbid,r=zen("div.item>label");$(r).attr("data-ftype","text"),$(r).attr("data-fkey",e),$(r).find("label").html(n+"：");var o=$("<input type='text' value='"+(i||"")+"' class='zy-imgup'/>");return $(r).append(o),a&&$(r).find("input").attr("disabled","true"),ImgUp.wrapImgUp(o),ImgUp.bindImgUp($(o).parent().find(".zyadmin-upicon")),$(r)}},_getRadio:function(t,e){if(null!=t&&null!=e){var n=t.check,i=t.value,a=zen("div.item.check-item>label");$(a).attr("data-ftype","radio"),$(a).attr("data-fkey",e);for(var r in n){var o=n[r],l=o.name,s=o.value,p=$("<label>"+l+"：</label>");if(i==s)var d=$("<input type='radio' name='"+e+"' value='"+s+"' checked/>");else var d=$("<input type='radio' name='"+e+"' value='"+s+"'/>");$(a).append(p),$(a).append(d)}return $(a)}},_getCheckbox:function(t,e){if(null!=t&&null!=e){var n=t.check,i=t.value;"string"==typeof i&&(i=JSON.parse(i));var a=zen("div.item.check-item>label");$(a).attr("data-ftype","checkbox"),$(a).attr("data-fkey",e);for(var r in n){var o=n[r],l=o.name,s=o.value,p=$("<label>"+l+"：</label>"),d=$("<input type='checkbox' value='"+s+"'/>");for(var c in i)i[c]==s&&d.attr("checked","true");$(a).append(p),$(a).append(d)}return $(a)}},_getSlect:function(t,e){if(null!=t&&null!=e){var n=t.select,i=t.value,a=t.name,r=zen("div.item.select-item>label");$(r).attr("data-ftype","select"),$(r).attr("data-fkey",e);var o=$("<select></select>");$(r).find("label").html(a+"：");for(var l in n){var s=n[l],a=s.name,p=s.value,d=$("<option value='"+p+"'>"+a+"</option>");i===p&&d.attr("selected","true"),$(o).append(d)}return $(r).append(o),$(r)}},_getTextArea:function(t,e){if(null!=t&&null!=e){var n=t.name,i=t.value,a=zen("div.item>label");return $(a).attr("data-ftype","textarea"),$(a).attr("data-fkey",e),$(a).find("label").html(n+"："),$(a).append($("<textarea>"+(i||"")+"</textarea>")),$(a)}},_getList:function(t,e){if(null!=t&&null!=e){var n=t.name,i=(t.list,t.value),a=t.dtype,r=zen("div.item>label+div.z-list");$(r).attr("data-ftype","zlist"),$(r).attr("data-fkey",e),$(r).find("label").html(n+"：");var o=zen("span.op-btn.add-zlist>i.iconfont.icon-add");$(r).append(o);var l=$(r).find(".z-list"),s=zen("div.zlist-item.list-tmp>span.op-btn.del-zlist+span.op-btn.up-zlist");$(s).find(".del-zlist").append(zen("i.iconfont.icon-del")),$(s).find(".up-zlist").append(zen("i.iconfont.icon-up")),$(r).append(s);var p=$($("<input type='text'>"));$(s).append(p);for(var d in i){var c=zen("div.zlist-item>span.op-btn.del-zlist+span.op-btn.up-zlist"),f=i[d],p=$($("<input type='text'   value='"+f+"'>"));$(c).append(p),$(c).find(".del-zlist").append(zen("i.iconfont.icon-del")),$(c).find(".up-zlist").append(zen("i.iconfont.icon-up")),l.append(c)}return null!=a&&"number"==a&&r.attr("dtype","number"),r}},_getDynlist:function(t,e){if(null!=t&&null!=e){var n=t.name,i=t.list,a=t.value,r=t.imgup+""=="true";if(null!=i&&i.length>0){var o=zen("div.item>label+div.dyn-list");$(o).attr("data-ftype","dynlist"),$(o).attr("data-fkey",e),$(o).find("label").html(n+"：");var l=zen("span.op-btn.add-dyn>i.iconfont.icon-add");$(o).append(l);var s=$(o).find(".dyn-list"),p=zen("div.dyn-item.dyn-tmp>span.op-btn.del-dyn+span.op-btn.up-dyn");$(p).find(".del-dyn").append(zen("i.iconfont.icon-del")),$(p).find(".up-dyn").append(zen("i.iconfont.icon-up")),$(o).append(p);for(var d in i){var n=i[d].name,c=i[d].key,f=$("<label>"+n+"：</label>"),u=$($("<input type='text' key='"+c+"'>"));$(p).append(f),$(p).append(u),r&&u.addClass("zy-imgup")}for(var m in a){var v=zen("div.dyn-item>span.op-btn.del-dyn+span.op-btn.up-dyn"),t=a[m];for(var h in t){var f=$("<label>"+h+"：</label>");t[h].value=t[h].value||"";var u=$($("<input type='text' key='"+t[h].key+"'  value='"+t[h].value+"'>"));if($(v).append(f),$(v).append(u),r){u.addClass("zy-imgup"),ImgUp.wrapImgUp(u),ImgUp.bindImgUp($(u).parent().find(".zyadmin-upicon"));var g=t[h].cvalue;null!=g&&u.attr("data-cvalue",JSON.stringify(g))}}$(v).find(".del-dyn").append(zen("i.iconfont.icon-del")),$(v).find(".up-dyn").append(zen("i.iconfont.icon-up")),s.append(v)}return o}}},_getTime:function(t,e){if(null!=t&&null!=e){var n=t.name,i=t.value,a=t.forbid,r=zen("div.item>label");$(r).attr("data-ftype","time"),$(r).attr("data-fkey",e),$(r).find("label").html(n+"：");var o=$("<input type='text'/>");try{if(o.datetimepicker(),i+="",!Ut.Null(i)&&13==i.length){var l=Ut.getTimeTostr(i);$(o).val(l)}}catch(s){}return $(r).append(o),a&&$(r).find("input").attr("disabled","true"),$(r)}},getSinleton:function(){function t(){return null==instance&&(instance=new e),instance}function e(){var t=document.createElement("div");return $(t).addClass("zform-cover"),$(t).append($('<div class="bk"></div>')),$(t).append($('<div class="z-form"><div class="close">×</div><div class="form-scroll"><div class="form"></div></div></div>')),$("body").append(t),t}return t()}},_this=cform;return cform}(),$(function(){zform.init()}),window.Zimgmask={init:function(){this.cstyle(),this.initEvent(),this.cpage()},cstyle:function(){var t={".maskimg":{cursor:"pointer",color:"#ba8bdc"},".zmaskpanel":{position:"fixed",width:"100%",top:"0px",bottom:"0px","z-index":"1000",background:"rgba(0,0,0,0.65)",display:" none",".image-info":{position:"absolute",height:"40px",width:"100%",top:"-40px",color:"whitesmoke","font-size":"12px","text-align":"center"," padding-bottom":"0px",".link":{color:"whitesmoke","&:hover":{color:"#ef4545"}}},".mask-image":{position:"fixed",left:"50%",top:"50%",border:"1px solid #000000",".imagescroll":{position:"relative",".img":{"max-width":"100%"}}},".mask-image-close ":{position:"absolute","z-index":"10",height:"30px",width:"30px"," line-height":"150px",overflow:"hidden",background:"#ff6464","border-radius":"50%",right:"-15px",top:"-15px",".zimgclose":{display:"block",height:"30px",width:"30px",overflow:"hidden",cursor:"pointer","text-align":"center","line-height":"26px",opacity:"1",color:"#fff","font-size":"30px"}}}};CssTool.makstyle(t)},cpage:function(){var t=zen("div.zmaskpanel>div.mask-image>div.image-info+div.mask-image-close"),e=$(t).find(".image-info");e.zen("p+a.link"),$(e).find("a").attr("href","").attr("target","_blank");var n=$(t).find(".mask-image");n.zen("div.imagescroll>img"),$(n).find("img").attr("src","");var i=$(t).find(".mask-image-close");i.zen(".zimgclose"),$(i).find(".zimgclose").attr("onclick","jQuery('.zmaskpanel').fadeOut()").html("×"),$("body").append(t)},initEvent:function(){$(".maskimg").on("click",function(){var t=$(this).attr("_link")||$(this).html();Zimgmask.changeImage(t)})},changeImage:function(t){$(".mask-image img").remove();var e=$(window).width()-200,n=$(window).height()-100,i=new Image;i.src=t,i.onload=function(){$(i).addClass("img");var a=i.height.toString()+"*"+i.width;$(".image-info p ").html("图片尺寸："+a).css({margin:"0px"}),$(".image-info a ").attr("href",t).html("图片地址："+t),i.width<=e?($(".mask-image ").css("width",i.width).css("height",i.height).css("margin-left",-i.width/2).css("margin-top",-i.height/2),$(".imagescroll ").css("width",i.width),$(".mask-image img").css("width",i.width).css("height",i.height),i.height>=n&&($(".mask-image ").css("height",n).css("margin-top",-n/2),$(".imagescroll ").css("height",n),$(".imagescroll").css("overflow-y","auto"),$(".imagescroll").css("overflow-x","hidden"))):($(".mask-image ").css("width",e).css("height",i.height).css("margin-left",-e/2).css("margin-top",-i.height/2),$(".imagescroll ").css("width",e),$(".mask-image img").css("width",e).css("height",i.height),i.height>=n&&($(".mask-image ").css("height",n).css("margin-top",-n/2),$(".imagescroll ").css("height",n),$(".imagescroll").css("overflow-y","auto"),$(".imagescroll").css("overflow-x","hidden"))),$(".mask-image .imagescroll").append(i)},i.src=t,$(".zmaskpanel").fadeIn()}},$(function(){Zimgmask.init()}),window.Admins=function(t){var e={navData:{},init:function(){this.load(),this.layout(),this.initEvent()},layout:function(){this.timePicker(),setTimeout(function(){$("#table,#example").length&&$("#table,#example").dataTable({iDisplayLength:100,sScrollX:"100%",sScrollXInner:"100%",aLengthMenu:[100,200,300]}),$("#table10").length&&$("#table10").dataTable({iDisplayLength:10,aLengthMenu:[[10,20,50,100],[10,20,50,100]],sScrollX:"100%",sScrollXInner:"100%"})},500)},timePicker:function(){$(".time").each(function(){var t=$(this).attr("time");if(Ut){var e=Ut.getTimeTostr(t);$(this).html(e)}});try{var t=$("#start-time").attr("start")||Ut.getParam("start"),e=$("#end-time").attr("end")||Ut.getParam("end");if(null!=t){10==t.length&&(t=1e3*Number(t));var t=new Date(Number(t)),n=Ut.getTimeTostr(t);$("#start-time").val(n)}if(null!=e){10==e.length&&(e=1e3*Number(e));var e=new Date(Number(e)),i=Ut.getTimeTostr(e);$("#end-time").val(i)}$(".timepicker").datetimepicker()}catch(a){}},initEvent:function(){$("table").on("click",".trup",function(){var t=$(this).parent().parent(),e=$(t).prev();e.before(t)}),$("table").on("click",".trdown",function(){var t=$(this).parent().parent(),e=$(t).next();e.after(t)}),$("table").on("click",".trdel",function(){var t=$(this).parent().parent();t.remove()}),$(".nav-tabs").on("click","li a",function(){$(this).parent().parent().find(".active").removeClass("active"),$(this).parent().addClass("active");var t=$(this).attr("data-id");$(".nav-content").removeClass("active"),$("#"+t).addClass("active")})},load:function(){if(0==$(".topbar").length)if("undefined"!=typeof AdminPage&&null!=AdminPage)e.cpage(AdminPage),t.Search.cacheData(AdminPage),e.cRightPage();else{var n=window.CONF_URL;Ut.Null(n)&&(n="/zyadmin/link/adminlink"),$.ajax({url:n,type:"get",data:{},dataType:"json",success:function(n){t.navData=n,t.Search.cacheData(n),e.cpage(n),Admins.cRightPage()}})}},cpage:function(t){if(t){var n="",i="",a="";if("undefined"!=typeof AdminConf)n=AdminConf.top,i=AdminConf.tag,a=AdminConf.link;else{var r=e.getCurrentPage(t);n=r.ctop,i=r.ctag,a=r.clink}var o=zen("div.topbar>div.topbar-left.left-home>a>i.fa.fa-home.fa-3x"),l=zen("div.topbar-left");o.append(l),window.HOME_LINK&&o.find("a").attr("href",window.HOME_LINK),$("body").prepend(o),$("#content").wrap(zen("div.main-content>div.content-inner.left-content>div.content-body"));var s=$(".main-content");s.zen("div.left-slide-bar>ul");var p=s.find(".left-slide-bar"),d=$(".content-inner");d.zen("div.inner-slide-bar>div.list");var c=d.find(".inner-slide-bar"),f=null;for(var u in t){var m=t[u],v=m.name,h=m.url,g=$("<div><a href='"+h+"'><span></span></a></div>");g.addClass("topbar-nav-btn"),g.find("a").attr("src",h),g.find("span").html(v),$(l).append(g),v==n&&(f=m,g.addClass("active"));for(var y=zen("div.dropdown-menu"),w=m.tag||[],u=0;u<w.length;u++){for(var b=zen("div.topbar-nav-col>div.col-title+ul"),k=w[u].links||[],z=0;z<k.length;z++){var x=k[z].url,v=k[z].name,C=$("<li ><a href='"+x+"'>"+v+"</a></li>");$(b).find("ul").append(C)}$(b).find(".col-title").html(w[u].name),y.append(b)}g.append(y)}var _=null;if(null!=f&&null!=f.tag)for(var I=0;I<f.tag.length;I++){var U=f.tag[I],S=$("<li><a href='"+U.url+"'>"+U.name+"</a></li>");p.find("ul").append(S),U.name==i&&(S.addClass("active"),_=U)}if(null!=_&&null!=_.links&&_.links.length>0){for(var T=$("<ul></ul>"),A=_.title||v,u=0;u<_.links.length;u++){var P=_.links[u],C=$("<li><a href='"+P.url+"'><div class='link'>"+P.name+"</div></a></li>");T.append(C),P.name==a&&C.find("a").addClass("current")}c.find(".list").append(T),c.append("<div class='title'>"+A+"</div>")}}},getCurrentPage:function(t){var e=window.location.pathname,n=window.location.href,i=window.location.host,a="",r="",o="",l={};for(var s in t){var p=t[s];if(null!=p.tag)for(var d=0;d<p.tag.length;d++){var c=p.tag[d];if(null!=c.links)for(var f=0;f<c.links.length;f++){var u=c.links[f];if(u.url==e||"http://"+i+u.url==n)a=p.name,r=c.name,o=u.name,l.ctop=a,l.ctag=r,l.clink=o;else if(null!=u.item)for(var m in u.item)if(u.item[m]==e||"http://"+i+u.item[m]==n){a=p.name,r=c.name,o=u.name,l.ctop=a,l.ctag=r,l.clink=o;break}}}}return l},cRightPage:function(){if(window.AdminRightPage){var e=zen("div.topbar-right");for(var n in AdminRightPage){var i=zen("a.link"),a=AdminRightPage[n].name,r=AdminRightPage[n].url,o=AdminRightPage[n].cla;$(i).html(a),null!=r&&$(i).attr("href",r),$(i).addClass(o),$(e).append(i)}$(e).append(l),$(".topbar").append($(e))}var l=zen("div.search-panel>input.search-ipt+div.search-result>ul");$(".topbar").append($(l)),t.Search.init()}},n={init:function(){e.init()},cRightPage:function(){e.cRightPage()}};return n}(window.ZA=window.ZA||{}),function(t){var e=!1,n={map:{},init:function(){this.initEvent()},initEvent:function(){$(".search-result").on({mouseover:function(){e=!0},mouseleave:function(){e=!1}}),$(".search-ipt").on("focus",function(){var e=$(this).val()||"";setTimeout(function(){t.Search.showSearch(),t.Search.renderDom(e)},200)}),$(".search-ipt").on("blur",function(){e||t.Search.hideSearch()}),$(".search-ipt").keyup(function(){var e=$(this).val();t.Search.renderDom(e)})},cacheData:function(t){for(var e=0;e<t.length;e++){var n=t[e];if(null!=n){var i=n.name,a=n.link;if(this.map[i]=a,null!=n.tag&&n.tag.length>0)for(var r=0;r<n.tag.length;r++){var o=n.tag[r],i=o.name,a=o.url;if(this.map[i]=a,null!=o.links)for(var l=0;l<o.links.length;l++){var s=o.links[l],i=s.name,a=s.url;this.map[i]=a}}}}console.log(JSON.stringify(this.map))},getSearch:function(t){if(null==t||0==t.length)return[];var e=new RegExp(t),n=[];for(var i in this.map)if(e.test(i)&&!Ut.Null(this.map[i])){var a={};a.name=i,a.link=this.map[i],n.push(a)}return console.log(n),n},renderDom:function(e){var n=t.Search.getSearch(e),i="";if(null!=n&&n.length>0)for(var a=0;a<n.length;a++){var r=n[a],o=r.name,r=r.link;i+="<li><a href='"+r+"' target='_blank'>"+o+"</a></li>"}$(".search-result ul").empty().append($(i))},hideSearch:function(){$(".search-result").hide()},showSearch:function(){$(".search-result").fadeIn()}};t.Search=n}(window.ZA=window.ZA||{}),$(document).ready(function(){Admins.init(),window.zadmin&&zadmin.init()}),window.TPL=window.TPL||{},TPL.tplmap=TPL.tplmap||{},TPL.getTpl=TPL.getTpl||function(t){return TPL.tplmap[t]},function(t){t.tplmap["zadmin-popimg"]='<div class="popimg-panel"><div class="popimg-overlay" style="display: none;"></div><div class="popimg-modal"><i class="popimg-close iconfont icon-close_m"></i><i class="popimg-detail iconfont icon-menu"></i><div class="modal_content"><ul class="popimg-list"></ul><img src="" /></div></div><div class="popimg-switcher-row"><i class="popimg-switcher popimg-prev iconfont icon-left-arrow"></i><i class="popimg-switcher popimg-next iconfont icon-right-arrow"></i></div></div>'}(TPL),window.popimg=function(){var t=null,e=[],n=0,i=null,a={spacing:60,beforeShowDetail:function(){},errorResolve:function(){}},r={init:function(t){a=$.extend(a,t),r.initEvent()},initDom:function(){var t=$(TPL.getTpl("zadmin-popimg"));return $("body").append(t),{overlay:t.find(".popimg-overlay"),modal:t.find(".popimg-modal"),switcher:t.find(".popimg-switcher-row")}},initEvent:function(){$(window).on("resize",function(){r.computePosition()});var t="popimg-modal";$(document).on("click","."+t+" .popimg-close",function(){r.hide()}),$(document).on("click",".popimg-panel .popimg-prev",function(){r.switchImg(-1)}),$(document).on("click",".popimg-panel .popimg-next",function(){r.switchImg(1)}),$(document).on("click","."+t+" .popimg-detail",function(){if($("."+t+".modal_content>.popimg-list").hasClass("popimg-in"))return $("."+t+".modal_content>.popimg-list").removeClass("popimg-in").delay(300).animate({top:"-100%"},200),!1;var i=a.beforeShowDetail()||e[n],r="";for(var o in i)"error"!==o&&(r+="<li>"+o+": "+i[o]+"</li>");$("."+t+".modal_content>.popimg-list").html(r).animate({top:0},400).addClass("popimg-in")}),$(document).on("click",".popimg",function(){var t=$(this).attr("data-imgs"),e=null;if(null!=t&&t.length>0)e=t.split(",");else{var n=$(this).html();null!=n&&n.length>0&&/(http[s]?|ftp):\/\/[^\/\.]+?\..+(\w|\/)$/i.test(n)&&(e=n)}null!=e&&e.length>0&&r.showImage(e)})},resetDom:function(){t.modal.removeClass("animate-out animate-in"),t.overlay.removeAttr("style").hide(),t.switcher.hide().find("*").removeAttr("style"),$("body").removeClass("popimg-show"),$(".modal_content>.popimg-list",t.modal).removeAttr("style").removeClass("popimg-in")},loadImg:function(t){var i=$.Deferred(),a=new Image;return a.src=t,a.onload=function(){e[n].width=a.width,e[n].height=a.height,e[n].aspect_ratio=a.width/a.height,e[n].error=!1,r.computePosition(),i.resolve()},a.onerror=function(){i.reject()},i},hide:function(){t.overlay.animate({opacity:0},100,function(){$(this).hide()}),$("body").removeClass("popimg-show"),t.modal.addClass("animate-out").delay(400).removeClass("animate-in"),setTimeout(function(){r.resetDom()},800)},showImage:function(i){if(null===t&&(t=r.getInstance()),void 0===i)return!1;var a=Object.prototype.toString.call(i).slice(8,-1),o=Object.prototype.toString.call(i[0]).slice(8,-1);r.resetDom(),e=[],n=0,r.settleData[a+o](i,function(){t.overlay.show(0,function(){$("body").addClass("popimg-show")}),e.length>1&&(t.switcher.fadeIn(),r.switchImg(0)),r.settleImage()})},switchImg:function(a){return i?!1:(t.modal.removeClass("animate-in").addClass("fade-out"),void(i=setTimeout(function(){n+=a,0>=n?(t.switcher.find(".popimg-prev").animate({left:"-100%"},200),t.switcher.find(".popimg-next").animate({right:0},200)):n>=e.length-1?(t.switcher.find(".popimg-next").animate({right:"-100%"},200),t.switcher.find(".popimg-prev").animate({left:0},200)):(t.switcher.find(".popimg-prev").animate({left:0},200),t.switcher.find(".popimg-next").animate({right:0},200)),$(".modal_content>.popimg-list",t.modal).removeAttr("style").removeClass("popimg-in"),r.settleImage(),i=null
},250)))},settleData:{StringString:function(t,n){e.push({src:t}),n()},ObjectUndefined:function(t,n){e.push(t),n()},ArrayString:function(t,n){for(var i=0,a=t.length;a>i;i++)e.push({src:t[i]});console.log(e),n()},ArrayObject:function(t,n){for(var i=0,a=t.length;a>i;i++)e.push(t[i]);n()}},settleImage:function(){r.loadImg(e[n].src).then(function(){t.modal.show(0).removeClass("fade-out").addClass("animate-in"),$(".modal_content>img",t.modal).remove(),$(".modal_content",t.modal).append('<img src="'+e[n].src+'"/>')},function(){var t=a.errorResolve();t||(e[n].width=360,e[n].height=240,e[n].aspect_ratio=1.5,e[n].error=!0,r.computePosition())})},computePosition:function(){var i=$(window).width(),r=$(window).height(),o=Math.min(i-2*a.spacing,e[n].width),l=Math.min(r-2*a.spacing,e[n].height);o/l<e[n].aspect_ratio&&(l=o/e[n].aspect_ratio),o/l>e[n].aspect_ratio&&(o=l*e[n].aspect_ratio),t.modal.css({left:Math.abs(o-i)/2,top:Math.abs(l-r)/2,width:o,height:l})},getInstance:function(){return t?t:t=r.initDom()}};return r.init(),{showImage:r.showImage}}();