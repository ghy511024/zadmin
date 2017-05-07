__inline("plug2.tpl.jsp");
(function () {
    var tmpstr = TPL.getTpl("plug.tpl");
    var tmp = jsptpl(tmpstr);
    var outstr = tmp.render(tmp);
})()
