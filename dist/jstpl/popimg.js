
window.TPL = window.TPL || {};
TPL.tplmap = TPL.tplmap || {};
TPL.getTpl = TPL.getTpl || function (_id) {
    return TPL.tplmap[_id];
};

(function (TPL) {
    TPL.tplmap['zadmin-popimg'] = '<div class="popimg-panel"><div class="popimg-overlay" style="display: none;"></div><div class="popimg-modal"><i class="popimg-close iconfont icon-close_m"></i><i class="popimg-detail iconfont icon-menu"></i><div class="modal_content"><ul class="popimg-list"></ul><img src="" /></div></div><div class="popimg-switcher-row"><i class="popimg-switcher popimg-prev">&lt;</i><i class="popimg-switcher popimg-next">&gt;</i></div></div>';
})(TPL);
   