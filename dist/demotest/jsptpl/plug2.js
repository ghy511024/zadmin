
window.TPL = window.TPL || {};
(function (TPL) {
    TPL.tplmap = TPL.tplmap || {};
    TPL.getTpl = TPL.getTpl || function (_id) {
        return this.tplmap[_id];
    }
    TPL.tplmap['plug2.tpl'] = '<h1>{{title}}</h1><c:forEach items="${list}" var="item"><option value ="${item.name}">${item.name}</option></c:forEach><c:if test="${a=\'abc\'}">haha</c:if>'
})(TPL);
   ;
(function () {
    var tmpstr = TPL.getTpl("plug.tpl");
    var tmp = jsptpl(tmpstr);
    var outstr = tmp.render(tmp);
})()
