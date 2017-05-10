
__inline("popimg.tpl");

// 依赖jquery
window.popimg = (function () {
    var dominstance = null,
        imgData = {},
        config = {
            spacing: 60,
            beforeShowDetail: function () {},
            errorResolve: function() {}
        };

    var popimage = {
        init: function (options) {
            config = $.extend(config, options);
            // 初始化必要的dom结构
            dominstance = popimage.getInstance();
            // 绑定相关事件
            popimage.initEvent();
        },
        initDom: function () {
            var dom = $(TPL.getTpl("zadmin-popimg"));
            $('body').append(dom);

            return {
                overlay: dom.find(".popimg-overlay"),
                modal: dom.find(".popimg-modal")
            };
        },
        initEvent: function () {
            // -resize
            $(window).on('resize', function () {
                // 触发图片宽高计算方法
                popimage.computePosition();
            });
            // -click
            $('body').on('click', '.preview-photo', function (evt) {
                var data = $(evt.target).attr('data-href');
                // 显示图片
                popimage.showImage(data);
                return false;
            });
            // 关闭图片
            dominstance.overlay.on('click', function () {
                popimage.hide();
            });
            $('.popimg-close', dominstance.modal).on('click', function (evt) {
                popimage.hide();
            });
            // 展示详情
            $('.popimg-detail', dominstance.modal).on('click', function () {
                if ($('.modal_content>.popimg-list', dominstance.modal).hasClass('popimg-in')) {
                    $('.modal_content>.popimg-list', dominstance.modal).removeClass('popimg-in').delay(300).animate({top: '-100%'}, 200);
                    return false;
                }
                var data = config.beforeShowDetail() || imgData,
                    tpl = '';
                for (var i in data) {
                    if(i !== 'error'){
                        tpl += '<li>' + i + ' :' + data[i] + '</li>';
                    }
                }
                $('.modal_content>.popimg-list', dominstance.modal).html(tpl).animate({top: 0}, 400).addClass('popimg-in');
            });
        },
        resetDom: function () {
            dominstance.modal.removeClass('animate-out animate-in');
            $('body').removeClass('popimg-show');
            $('.modal_content>.popimg-list', dominstance.modal).removeAttr('style')
                                                               .removeClass('popimg-in');
        },
        loadImg: function () {
            var dfd = $.Deferred();
            var img = new Image();
            img.src = imgData.src;
            img.onload = function () {
                imgData.width = img.width;
                imgData.height = img.height;
                imgData.aspect_ratio = img.width / img.height;
                imgData.error = false;
                popimage.computePosition();
                dfd.resolve();
            }
            img.onerror = function () {
                dfd.reject();
            }
            return dfd;
        },
        hide: function () {
            dominstance.overlay.hide(500, function () {
                $('body').removeClass('popimg-show');
            });
            dominstance.modal.addClass('animate-out').delay(300)
                    .removeClass('animate-in');

            setTimeout(function () {
                popimage.resetDom();
            }, 500);
        },
        showImage: function (data) {
            // 检查是否已经初始化
            if(dominstance === null){
                popimage.init();
            }
            // 判断数据
            if(typeof data === "undefined"){
                // 检查数据时候传入
                return false;
            }
            popimage.resetDom();

            imgData.src = data;
            // 通过在body上添加类实现显示

            dominstance.overlay.show(0, function () {
                $('body').addClass('popimg-show');
            });
            dominstance.modal.show(0)
                    .addClass('animate-in');
            popimage.loadImg(data).then(function () {
                $('.modal_content>img', dominstance.modal).remove();
                $('.modal_content', dominstance.modal).append('<img src="' + imgData.src + '"/>');
            }, function () {
                var res = config.errorResolve();
                if(!res){
                    console.warn('图片加载失败！');
                    imgData.width = 360;
                    imgData.height = 240;
                    imgData.aspect_ratio = 9/6;
                    imgData.error = true;
                    popimage.computePosition();
                }
            });
        },
        computePosition: function () {
            var w = $(window).width(),
                h = $(window).height(),
                setW = Math.min(w - config.spacing * 2, imgData.width),
                setH = Math.min(h - config.spacing * 2, imgData.height);
            // 防止图片变形
            if (setW / setH < imgData.aspect_ratio) {
                // 宽度被拉伸
                setH = setW / imgData.aspect_ratio;
            }
            if (setW / setH > imgData.aspect_ratio) {
                setW = setH * imgData.aspect_ratio;
            }
            dominstance.modal.css({left: Math.abs(setW - w) / 2,
                top: Math.abs(setH - h) / 2,
                width: setW,
                height: setH});
        },
        getInstance: function () {
            return dominstance ? dominstance : dominstance = popimage.initDom();
        }
    };
    
    return {
        showImage: popimage.showImage
    };
})();