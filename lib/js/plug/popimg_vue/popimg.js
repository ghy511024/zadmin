/* 
 * To change this license header, choose License Headers in Project Properties.
 * and open the template in the editor.
 */
$(function () {
    $("body").append($(__inline('popimg.html')));
    //
    window.popimg = new Vue({
        el: "#popimg",
        data: {
            message: '页面加载于 ' + new Date(),
            dominstance: null,
            imgData: {},
            config: {
                spacing: 60,
                beforeShowDetail: function(){}
            }
        },
        methods: {
            init: function(options){
                console.log('init');
                this.config = $.extend(this.config, options);
                // 初始化必要的dom结构
                dominstance = this.getInstance();
                // 绑定相关事件
                this.initEvent();
            },
            showImage: function(){
                imgData.src = data;
                // 通过在body上添加类实现显示
                this.dominstance.overlay.show(0, function () {
                    $('body').addClass('pop-show');
                });
                this.dominstance.modal.show(0)
                    .addClass('animate-in');
                this.loadImg(data).then(function(){
                    $('.modal_content>img', dominstance.modal).remove();
                    $('.modal_content', dominstance.modal).append('<img src="'+ imgData.src +'"/>');
                    console.log(imgData);
                }, function(){
                    alert('图片加载失败！');
                });
            },
            hide: function(){

            },
            getInstance: function(){
                return this.dominstance ? this.dominstance: this.dominstance = this.initDom();
            },
            initDom: function(){
                var tpl = __inline('popimg_dom.html'),
                    overlay = $(tpl).find('.overlay'),
                    modal = $(tpl).find('.pop-modal');
                console.log('tpl');
                console.log(tpl);
                $('body').append(overlay);
                $('body').append(modal);
                return {
                    overlay: overlay,
                    modal: modal
                };
            },
            initEvent: function(){
                    var that = this;
                    // -resize
                    $(window).on('resize', function(){
                        // 触发图片宽高计算方法
                        this.computePosition();
                    });
                    // -click
                    $('body').on('click', '.preview-photo', function(evt){
                        var data = $(evt.target).attr('href');
                        // 显示图片
                        that.showImage(data);
                        return false;
                    });
                    // 关闭图片
                    dominstance.overlay.on('click', function(){
                        that.hide();
                    });
                    $('.pop-close', dominstance.modal).on('click', function(evt){
                        that.hide();
                    });
                    // 展示详情
                    $('.pop-detail', dominstance.modal).on('click', function(){
                        if($('.modal_content>.pop-list', dominstance.modal).hasClass('pop-in')){
                            $('.modal_content>.pop-list', dominstance.modal).removeClass('pop-in').delay(200).animate({top: '-100%'}, 200);
                            return false;
                        }
                        var data = config.beforeShowDetail() || imgData,
                            tpl = '';
                        for(var i in data){
                            tpl += '<li>'+i+' :'+data[i]+'</li>';
                        }
                        $('.modal_content>.pop-list', dominstance.modal).html(tpl).animate({top: 0}, 400).addClass('pop-in');
                    });
            }

        },
        ready: function () {
        }
    })
    popimg.init();
})