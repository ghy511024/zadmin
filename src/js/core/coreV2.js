/**
 * 章鱼tv 后端 渲染核心模块
 * @hongyu
 * @qq：249398279
 * @version v3.0
 * */

__inline("nav/headnav.tpl");
window.Admins = (function (ZA) {
    var admin = {
        navData: {},
        init: function () {
            this.load();
            this.layout();
            this.initEvent();
        },
        layout: function () {
            this.timePicker();
            //延时加载==========datatable===============
            setTimeout(function () {
                $('#table,#example').length && $('#table,#example').dataTable({
                    "iDisplayLength": 100,
                    "sScrollX": "100%",
                    "sScrollXInner": "100%",
                    "aLengthMenu": [100, 200, 300]});
                $('#table10').length && $('#table10').dataTable({
                    "iDisplayLength": 10,
                    "aLengthMenu": [[10, 20, 50, 100], [10, 20, 50, 100]],
                    "sScrollX": "100%",
                    "sScrollXInner": "100%"
                });
                if ($('#zytable').length) {
                    var data = {
                        "iDisplayLength": 100
                    }
                    var hidepage = $('#zytable').attr("hidepage");
                    var len = Number($('#zytable').attr("len")) || 100;
                    if (hidepage == "true") {
                        data["paging"] = false
                    }
                    data["iDisplayLength"] = len
                    $('#zytable').dataTable(data);
                }

            }, 300)
        },
        timePicker: function () {
            $(".time").each(function () {
                var time = $(this).attr("time");
                if (Ut) {
                    var str = Ut.getTimeTostr(time)
                    $(this).html(str);
                }
            })
            try {
                var start = $("#start-time").attr("start") || Ut.getParam("start");
                var end = $("#end-time").attr("end") || Ut.getParam("end");
                if (start != null) {
                    if (start.length == 10) {
                        start = Number(start) * 1000
                    }
                    var start = new Date(Number(start));
                    var str = Ut.getTimeTostr(start)
                    $("#start-time").val(str);
                }
                if (end != null) {
                    if (end.length == 10) {
                        end = Number(end) * 1000
                    }
                    var end = new Date(Number(end));
                    var str2 = Ut.getTimeTostr(end)
                    $("#end-time").val(str2);
                }
                $(".timepicker").datetimepicker();
            }
            catch (e) {

            }
        },
        initEvent: function () {
            $("table").on("click", ".trup", function () {
                var parent = $(this).parent().parent();
                var brother = $(parent).prev();
                brother.before(parent);
            });
            $("table").on("click", ".trdown", function () {
                var parent = $(this).parent().parent();
                var brother = $(parent).next();
                brother.after(parent);
            });
            $("table").on("click", ".trdel", function () {
                var parent = $(this).parent().parent();
                parent.remove();
            });
            $(".nav-tabs").on("click", "li a", function () {
                $(this).parent().parent().find(".active").removeClass("active");
                $(this).parent().addClass("active");
                var _id = $(this).attr("data-id");
                $(".nav-content").removeClass("active");
                $("#" + _id).addClass("active");
            })

            $(document).on("click", ".expand", function () {
                $(".leftnav-wrap").toggleClass("show")
            })
        },
        load: function () {
            if ($(".topbar").length == 0) {
                if ((typeof AdminPage != "undefined") && AdminPage != null) {
//                    admin.cpage(AdminPage);
                    ZA.Search.cacheData(AdminPage);


                } else {
                    var url = window.CONF_URL;
                    if (Ut.Null(url)) {
                        url = "/zyadmin/link/adminlink";
                    }
                    $.ajax({
                        url: url,
                        type: "get",
                        data: ({}),
                        dataType: "json",
                        success: function (ret) {
                            ZA.navData = ret;
                            ZA.Search.cacheData(ret);
                            var data = {}
                            var cpage = admin.getCurrentPage(ret)

                            data.headnav = ret; // 全部数据
                            data.ctop = cpage["ctop"];// 当前top
                            data.ctag = cpage["ctag"];// 当前ctag
                            data.clink = cpage["clink"]; // 当前link

                            data.tagnav = cpage["tagnav"];// 左侧导航数据
                            data.linknav = cpage["linknav"];// 左侧导航数据
                            data.homelink = window.HOME_LINK;
                            var headstr = TPL.getTpl("admin-head");
                            var headtmp = new jsptpl(headstr);
                            var headstr_out = headtmp.render(data)

                            var leftnavstr = TPL.getTpl("admin-leftnav");
                            var leftnavtmp = new jsptpl(leftnavstr);
                            var leftnavstr_out = leftnavtmp.render(data)
                            $("body").append($(headstr_out));
                            $("body").append($(leftnavstr_out));
                            ZA.Search.init();//搜索组件初始化
                        }
                    })
                }
            }
        },
        getCurrentPage: function (data) {
            var pathname = window.location.pathname;
            var href = window.location.href;
            var host = window.location.host;
            var ctop = ""
            var ctag = "";
            var clink = "";
            var ret = {};
            for (var i in data) {
                var topdata = data[i]
                if (topdata["tag"] == null) {
                    continue;
                }
                for (var n = 0; n < topdata["tag"].length; n++) {
                    var tagdata = topdata["tag"][n]
                    if (tagdata["links"] == null) {
                        continue;
                    }
                    for (var m = 0; m < tagdata["links"].length; m++) {
                        var linkitem = tagdata["links"][m]
                        if (linkitem["url"] == pathname || "http://" + host + linkitem["url"] == href) {
                            ctop = topdata["name"];
                            ctag = tagdata["name"];
                            clink = linkitem["name"];
                            ret["ctop"] = ctop
                            ret["ctag"] = ctag
                            ret["tagnav"] = topdata["tag"]
                            ret["linknav"] = tagdata["links"]
                            ret["clink"] = clink
                        }
                        else {
                            if (linkitem["item"] != null) {
                                for (var j in linkitem["item"]) {
                                    if (linkitem["item"][j] == pathname || "http://" + host + linkitem["item"][j] == href) {
                                        ctop = topdata["name"];
                                        ctag = tagdata["name"];
                                        clink = linkitem["name"];
                                        ret["tagnav"] = topdata["tag"]
                                        ret["linknav"] = tagdata["links"]
                                        ret["ctop"] = ctop
                                        ret["ctag"] = ctag
                                        ret["clink"] = clink
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return ret;
        },
    }
    var ret = {
        init: function () {
            admin.init();
        },
        cRightPage: function () {
            admin.cRightPage();
        }
    }
    return ret;
})(window.ZA = window.ZA || {});
/**
 * 搜索模块
 * */
(function (ZA) {
    var hover_link = false;
    var Search = {
        map: {},
        init: function () {
            this.initEvent();
        },
        initEvent: function () {
            $(".search-result").on({"mouseover": function () {
                    hover_link = true;
                }, mouseleave: function () {
                    hover_link = false;
                }})
            $(".search-ipt").on("focus", function () {
                var value = $(this).val() || "";
//                if (value.length > 0) {
                setTimeout(function () {
                    ZA.Search.showSearch();
                    ZA.Search.renderDom(value);
                }, 200)
            })
            $(".search-ipt").on("blur", function () {
                if (!hover_link) {
                    ZA.Search.hideSearch();
                }
            })
            $(".search-ipt").keyup(function () {
                var value = $(this).val();
                ZA.Search.renderDom(value);
            })
        },
        cacheData: function (data) {
//            ZA.navData = ZA.navData || [];
            for (var i = 0; i < data.length; i++) {
                // 第一层遍历
                var navobj = data[i];
                if (navobj != null) {
                    var name = navobj["name"];
                    var url = navobj["link"];
                    this.map[name] = url;
                    // 第二层 tag 遍历
                    if (navobj.tag != null && navobj.tag.length > 0) {
                        for (var j = 0; j < navobj.tag.length; j++) {
                            var tagobj = navobj.tag[j];
                            var name = tagobj["name"];
                            var url = tagobj["url"];
                            this.map[name] = url;
                            // 第三层遍历
                            if (tagobj.links != null) {
                                for (var m = 0; m < tagobj.links.length; m++) {
                                    var link = tagobj.links[m];
                                    var name = link["name"];
                                    var url = link["url"];
                                    this.map[name] = url;
                                }
                            }
                        }
                    }
                }
            }
        },
        getSearch: function (skey) {
            if (skey == null || skey.length == 0) {
                return [];
            }
            var reg = new RegExp(skey);
            var ret = [];
            for (var key in this.map) {
                if (reg.test(key) && !Ut.Null(this.map[key])) {
                    var obj = {};
                    obj["name"] = key
                    obj["link"] = this.map[key]
                    ret.push(obj);
                }
            }
            return ret;
        },
        renderDom: function (value) {
            var ret = ZA.Search.getSearch(value);
            var str = "";
            if (ret != null && ret.length > 0) {
                for (var i = 0; i < ret.length; i++) {
                    var link = ret[i];
                    var name = link["name"];
                    var link = link["link"];
                    str += "<li><a href='" + link + "' target='_blank'>" + name + "</a></li>";
                }
            }
            $(".search-result ul").empty().append($(str))
        },
        hideSearch: function () {
            $(".search-result").hide();
        },
        showSearch: function () {
            $(".search-result").fadeIn();
        }
    }
    ZA.Search = Search;
})(window.ZA = window.ZA || {});
$(document).ready(function () {
    Admins.init();
    if (window.zadmin) {
        zadmin.init();
    }
})