
window.TPL = window.TPL || {};
(function (TPL) {
    TPL.tplmap = TPL.tplmap || {};
    TPL.getTpl = TPL.getTpl || function (_id) {
        return this.tplmap[_id];
    }
    TPL.tplmap['plug.tpl'] = '<h1>{{title}}</h1><c:forEach items="${list}" var="item"><option value ="${item.name}">${item.name}</option></c:forEach><c:if test="${a=\'abc\'}">haha</c:if>'
})(TPL);
   