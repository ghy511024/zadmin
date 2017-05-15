
__inline("popimg.tpl");

// 依赖jquery
window.popimg = (function () {
    var dominstance = null,
            imgData = [],
            currentIdx = 0,
            animateTimer = null,
            config = {
                spacing: 60,
                beforeShowDetail: function () {
                },
                errorResolve: function () {
                }
            };

    var popimage = {
        init: function (options) {
            config = $.extend(config, options);
            // 初始化必要的dom结构
//          
            // 绑定相关事件
            popimage.initEvent();
        },
        initDom: function () {
            var dom = $(TPL.getTpl("zadmin-popimg"));
            $('body').append(dom);

            return {
                overlay: dom.find(".popimg-overlay"),
                modal: dom.find(".popimg-modal"),
                switcher: dom.find(".popimg-switcher-row"),
            };
        },
        initEvent: function () {
            // -resize
            $(window).on('resize', function () {
                // 触发图片宽高计算方法
                dominstance && popimage.computePosition();
            });
            var popClass = "popimg-modal";


            $(document).on('click', "." + popClass + " .popimg-close", function (evt) {
                popimage.hide();
            });

            // 切换事件
            $(document).on('click', ".popimg-panel .popimg-prev", function (evt) {
                popimage.switchImg(-1);
            });
            $(document).on('click', ".popimg-panel .popimg-next", function (evt) {
                popimage.switchImg(1);
            });
            // 展示详情
            $(document).on('click', "." + popClass + " .popimg-detail", function (evt) {
                if ( $('.' + popClass + ' .modal_content>.popimg-list').hasClass('popimg-in')) {
                    $('.' + popClass + ' .modal_content>.popimg-list').removeClass('popimg-in').delay(300).animate({top: '-100%'}, 200);
                    return false;
                }
                var data = config.beforeShowDetail() || imgData[currentIdx],
                        tpl = '';
                for (var i in data) {
                    if (i !== 'error') {
                        tpl += '<li>' + i + ': ' + data[i] + '</li>';
                    }
                }
                $('.' + popClass + ' .modal_content>.popimg-list').html(tpl).animate({top: 0}, 400).addClass('popimg-in');
            });

//=========对外提供通用class 绑定事件
            $(document).on('click', ".popimg", function (evt) {
                var imgs = $(this).attr("data-imgs");
                var array = null;
                if (imgs != null && imgs.length > 0) {
                    array = imgs.split(",");
                } else {
                    var value = $(this).html();
                    if (value != null && value.length > 0 && /(http[s]?|ftp):\/\/[^\/\.]+?\..+(\w|\/)$/i.test(value)) {
                        array = value;
                    }
                }
                if (array != null && array.length > 0) {
                    popimage.showImage(array);
                }
            })

        },
        resetDom: function () {
            dominstance.overlay.parent().css('opacity', 1);
            dominstance.modal.removeClass('animate-out animate-in animate-in-delay').hide();
            dominstance.overlay.removeAttr('style').hide();
            dominstance.switcher.hide().find('*').removeAttr('style');
            $('body').removeClass('popimg-show');
            $('.modal_content>.popimg-list', dominstance.modal).removeAttr('style')
                    .removeClass('popimg-in');
        },
        loadImg: function (src) {
            var dfd = $.Deferred();
            var img = new Image();
            dominstance.overlay.siblings('.popimg-loader').show();
            img.src = src;
            img.onload = function () {
                imgData[currentIdx].width = img.width;
                imgData[currentIdx].height = img.height;
                imgData[currentIdx].aspect_ratio = img.width / img.height;
                imgData[currentIdx].error = false;
                popimage.computePosition();
                dominstance.overlay.siblings('.popimg-loader').hide();
                dfd.resolve();
            };
            img.onerror = function () {
                dominstance.overlay.siblings('.popimg-loader').hide();
                dfd.reject();
            };
            return dfd;
        },
        hide: function () {
            // $('body').removeClass('popimg-show');
            // dominstance.modal.addClass('animate-out')
            //         .removeClass('animate-in animate-in-delay');
            dominstance.overlay.parent().animate({opacity: 0}, 300, "swing", function(){
                popimage.resetDom();
            });
        },
        showImage: function (data) {
            // 检查是否已经初始化
            if (dominstance === null) {
                dominstance = popimage.getInstance();
            }
            if (data === undefined) {
                return false;
            }
            // data数据支持字符串、数组（数组元素是字符串、对象）
            var selfType = Object.prototype.toString.call(data).slice(8, -1),
                    itemType = Object.prototype.toString.call(data[0]).slice(8, -1);
            popimage.resetDom();
            imgData = [];
            currentIdx = 0;
            // 策略模式
            popimage.settleData[selfType + itemType](data, function () {
                dominstance.overlay.show(0, function () {
                    $('body').addClass('popimg-show');
                });
                if (imgData.length > 1) {
                    // 显示切换箭头
                    dominstance.switcher.fadeIn();
                    popimage.switchImg(0);
                }
                if(imgData.length === 0){
                    return false;
                }
                popimage.settleImage();
            });
        },
        switchImg: function (space) {
            // 防止快速点击
            if (animateTimer) {
                return false;
            }
            dominstance.modal.removeClass('animate-in-delay animate-in').addClass('fade-out');
            // 保证动画执行完毕
            animateTimer = setTimeout(function () {
                currentIdx = currentIdx + space;
                // 循环切换设置
                // currentIdx = currentIdx >= imgData.length ? 0 : currentIdx;
                // currentIdx = currentIdx < 0 ? imgData.length-1 : currentIdx;
                if (currentIdx <= 0) {
                    dominstance.switcher.find('.popimg-prev').animate({left: '-100%'}, 350);
                    dominstance.switcher.find('.popimg-next').animate({right: 0}, 350);
                } else if (currentIdx >= imgData.length - 1) {
                    dominstance.switcher.find('.popimg-next').animate({right: '-100%'}, 350);
                    dominstance.switcher.find('.popimg-prev').animate({left: 0}, 350);
                } else {
                    dominstance.switcher.find('.popimg-prev').animate({left: 0}, 350);
                    dominstance.switcher.find('.popimg-next').animate({right: 0}, 350);
                }

                $('.modal_content>.popimg-list', dominstance.modal).removeAttr('style')
                        .removeClass('popimg-in');
                popimage.settleImage(space);
                animateTimer = null;
            }, 100);
        },
        settleData: {
            "StringString": function (data, cbk) {
                // 传入单个字符串
                imgData.push({src: data});
                cbk();
            },
            "ObjectUndefined": function (data, cbk) {
                // 传入是一个对象，就认为传入的是图片要展示的信息
                imgData.push(data);
                cbk();
            },
            "ArrayString": function (data, cbk) {
                // 传入的是一个数组，每个数组元素是路径
                for (var i = 0, len = data.length; i < len; i++) {
                    if(data[i].length > 0){
                        imgData.push({src: data[i]});
                    }
                }
                cbk();
            },
            "ArrayUndefined": function (data, cbk) {
                // 传入的是一个数组，每个数组元素是路径
                for (var i = 0, len = data.length; i < len; i++) {
                    if(data[i] && data[i].length > 0){
                        imgData.push({src: data[i]});
                    }
                }
                cbk();
            },
            "ArrayObject": function (data, cbk) {
                // 传入的是一个数组，每个数组元素是路径
                for (var i = 0, len = data.length; i < len; i++) {
                    if(data[i].src && data[i].src.length > 0){
                        imgData.push(data[i]);
                    }
                }
                cbk();
            }

        },
        settleImage: function (space) {
            popimage.loadImg(imgData[currentIdx].src).then(function () {
                dominstance.modal.removeClass('fade-out').show()
                           .delay(500)
                           .queue(function(){
                               $(this).addClass('animate-in');
                               if(!space){
                                   $(this).addClass('animate-in-delay')
                               }
                               $(this).dequeue();
                           }) ;
                $('.modal_content>img', dominstance.modal).remove();
                $('.modal_content', dominstance.modal).append('<img src="' + imgData[currentIdx].src + '"/>');
            }, function () {
                var res = config.errorResolve();
                if (!res) {
                    imgData[currentIdx].width = 360;
                    imgData[currentIdx].height = 240;
                    imgData[currentIdx].aspect_ratio = 9 / 6;
                    imgData[currentIdx].error = true;
                    popimage.computePosition();
                }
            });
        },
        computePosition: function () {
            var w = $(window).width(),
                h = $(window).height(),
                setW = Math.min(w - config.spacing * 2, imgData[currentIdx].width),
                setH = Math.min(h - config.spacing * 2, imgData[currentIdx].height);
            // 防止图片变形
            if (setW / setH < imgData[currentIdx].aspect_ratio) {
                // 宽度被拉伸
                setH = setW / imgData[currentIdx].aspect_ratio;
            }
            if (setW / setH > imgData[currentIdx].aspect_ratio) {
                setW = setH * imgData[currentIdx].aspect_ratio;
            }
            dominstance.modal.css({left: Math.abs(setW - w) / 2,
                top: Math.abs(setH - h) / 2,
                width: setW,
                height: setH
            });
            // 判断切换按钮位置
            if(w - setW <= 400){
                // 设置到图片两侧
                dominstance.switcher.css({'width': setW+100+'px', 'left': '50%', 'margin-left': -(setW+100)/2+'px'});
            }else{
                // 设置到屏幕两侧
                dominstance.switcher.css({'width': '100%', 'left': 0, 'margin-left': 0});
            }
        },
        getInstance: function () {
            return dominstance ? dominstance : dominstance = popimage.initDom();
        }
    };
    popimage.init();
    return {
        showImage: popimage.showImage
    };
})();