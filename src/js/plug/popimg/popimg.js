
__inline("popimg.tpl");

// 依赖jquery
window.popimg = (function () {
    var dominstance = null,
        imgData = [],
        currentIdx = 0,
        animateTimer = null,
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
                modal: dom.find(".popimg-modal"),
                switcher: dom.find(".popimg-switcher-row"),
            };
        },
        initEvent: function () {
            // -resize
            $(window).on('resize', function () {
                // 触发图片宽高计算方法
                popimage.computePosition();
            });
            // -click
            // $('body').on('click', '.preview-photo', function (evt) {
            //     var data = $(evt.target).attr('data-href');
            //     // 显示图片
            //     popimage.showImage(data);
            //     return false;
            // });
            // 关闭图片
            // dominstance.overlay.on('click', function () {
            //     popimage.hide();
            // });
            $('.popimg-close', dominstance.modal).on('click', function (evt) {
                popimage.hide();
            });

            // 切换事件
            dominstance.switcher.on('click', '.popimg-prev', function(){
                popimage.switchImg(-1);
            });
            dominstance.switcher.on('click', '.popimg-next', function(){
                popimage.switchImg(1);
            });
            // 展示详情
            $('.popimg-detail', dominstance.modal).on('click', function () {
                if ($('.modal_content>.popimg-list', dominstance.modal).hasClass('popimg-in')) {
                    $('.modal_content>.popimg-list', dominstance.modal).removeClass('popimg-in').delay(300).animate({top: '-100%'}, 200);
                    return false;
                }
                var data = config.beforeShowDetail() || imgData[currentIdx],
                    tpl = '';
                for (var i in data) {
                    if(i !== 'error'){
                        tpl += '<li>' + i + ': ' + data[i] + '</li>';
                    }
                }
                $('.modal_content>.popimg-list', dominstance.modal).html(tpl).animate({top: 0}, 400).addClass('popimg-in');
            });

        },
        resetDom: function () {
            dominstance.modal.removeClass('animate-out animate-in');
            dominstance.overlay.removeAttr('style').hide();
            dominstance.switcher.hide().find('*').removeAttr('style');
            $('body').removeClass('popimg-show');
            $('.modal_content>.popimg-list', dominstance.modal).removeAttr('style')
                                                               .removeClass('popimg-in');
        },
        loadImg: function (src) {
            var dfd = $.Deferred();
            var img = new Image();
            img.src = src;
            img.onload = function () {
                imgData[currentIdx].width = img.width;
                imgData[currentIdx].height = img.height;
                imgData[currentIdx].aspect_ratio = img.width / img.height;
                imgData[currentIdx].error = false;
                popimage.computePosition();
                dfd.resolve();
            };
            img.onerror = function () {
                dfd.reject();
            };
            return dfd;
        },
        hide: function () {
            dominstance.overlay.animate({opacity: 0}, 100, function(){
                $(this).hide();
            });
            $('body').removeClass('popimg-show');
            dominstance.modal.addClass('animate-out').delay(400)
                    .removeClass('animate-in');

            setTimeout(function () {
                popimage.resetDom();
            }, 800);
        },
        showImage: function (data) {
            // 检查是否已经初始化
            if(dominstance === null){
                popimage.init();
            }
            if(data === undefined){ return false; }
            // data数据支持字符串、数组（数组元素是字符串、对象）
            var selfType = Object.prototype.toString.call(data).slice(8, -1),
                itemType = Object.prototype.toString.call(data[0]).slice(8, -1);
            popimage.resetDom();
            imgData = [];
            currentIdx = 0;
            // 策略模式
            popimage.settleData[selfType+itemType](data, function(){
                dominstance.overlay.show(0, function () {
                    $('body').addClass('popimg-show');
                });
                if(imgData.length > 1){
                    // 显示切换箭头
                    dominstance.switcher.fadeIn();
                    popimage.switchImg(0);
                }
                popimage.settleImage();
            });
            // 通过在body上添加类实现显示
        },
        switchImg: function(space){
            // 防止快速点击
            if(animateTimer){
                return false;
            }
            dominstance.modal.removeClass('animate-in').addClass('fade-out');
            // 保证动画执行完毕
            animateTimer = setTimeout(function(){
                currentIdx = currentIdx + space;
                // 循环切换设置
                // currentIdx = currentIdx >= imgData.length ? 0 : currentIdx;
                // currentIdx = currentIdx < 0 ? imgData.length-1 : currentIdx;
                if(currentIdx <= 0){
                    dominstance.switcher.find('.popimg-prev').animate({left: '-100%'}, 200);
                    dominstance.switcher.find('.popimg-next').animate({right: 0}, 200);
                }else if(currentIdx >= imgData.length-1){
                    dominstance.switcher.find('.popimg-next').animate({right: '-100%'}, 200);
                    dominstance.switcher.find('.popimg-prev').animate({left: 0}, 200);
                }else{
                    dominstance.switcher.find('.popimg-prev').animate({left: 0}, 200);
                    dominstance.switcher.find('.popimg-next').animate({right: 0}, 200);
                }

                $('.modal_content>.popimg-list', dominstance.modal).removeAttr('style')
                    .removeClass('popimg-in');
                popimage.settleImage();
                animateTimer = null;
            }, 250);
        },
        settleData: {
            "StringString": function(data, cbk){
                // 传入单个字符串
                imgData.push({src:data});
                cbk();
            },
            "ObjectUndefined": function(data, cbk){
                // 传入是一个对象，就认为传入的是图片要展示的信息
                imgData.push(data);
                cbk();
            },
            "ArrayString": function(data, cbk){
                // 传入的是一个数组，每个数组元素是路径
                for(var i = 0, len = data.length; i < len; i++){
                    imgData.push({src: data[i]});
                }
                console.log(imgData);
                cbk();
            },
            "ArrayObject": function(data, cbk){
                // 传入的是一个数组，每个数组元素是路径
                for(var i = 0, len = data.length; i < len; i++){
                    imgData.push(data[i]);
                }
                cbk();
            }

        },
        settleImage: function(){
            popimage.loadImg(imgData[currentIdx].src).then(function () {
                dominstance.modal.show(0).removeClass('fade-out').addClass('animate-in');
                $('.modal_content>img', dominstance.modal).remove();
                $('.modal_content', dominstance.modal).append('<img src="' + imgData[currentIdx].src + '"/>');
            }, function () {
                var res = config.errorResolve();
                if(!res){
                    imgData[currentIdx].width = 360;
                    imgData[currentIdx].height = 240;
                    imgData[currentIdx].aspect_ratio = 9/6;
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
        },
        getInstance: function () {
            return dominstance ? dominstance : dominstance = popimage.initDom();
        }
    };


    return {
        showImage: popimage.showImage
    };
})();