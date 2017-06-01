<%@page contentType="text/html" pageEncoding="UTF-8"%>
<tmplate name="admin-head">
    <div class="topbar">
        <div class="topbar-left left-home">
            <a href="${homelink}">
                <i class="fa fa-home fa-3x">
                </i>
            </a>
        </div>
        <div class="topbar-left">
            <c:forEach items="${headnav}" var="nav">
                <div class="topbar-nav-btn">
                    <a href="${nav.url}" src="#">
                        <span>${nav.name}</span>
                    </a>
                    <div class="dropdown-menu">
                        <c:forEach items="${nav.tag}" var="tag">
                            <div class="topbar-nav-col">
                                <div class="col-title">
                                    ${tag.name}
                                </div>
                                <ul>
                                    <c:forEach items="${tag.links}" var="link">
                                        <li>
                                            <a href="${link.url}">${link.name}</a>
                                        </li>
                                    </c:forEach>
                                </ul>
                            </div>

                        </c:forEach>
                    </div>
                </div>
            </c:forEach>
        </div>
        <div class="search-panel">
            <input class="search-ipt">
            <div class="search-result">
                <ul>
                </ul>
            </div>
        </div>
    </div>
</tmplate>

<tmplate name="admin-leftnav">
    <div class="leftnav-wrap" >
        <div class="left-slide-bar">
            <ul>
                <c:forEach items="${tagnav}" var="nav"> 
                    <li class="<c:if test='${nav.name==window.ctag}'>active</c:if>">
                        <a href="${nav.url}">${nav.name}</a>
                    </li>
                </c:forEach>
            </ul>
        </div>
        <div class="left-slide-bar slide-right">
            <div class="list" >
                <ul>
                    <c:forEach items="${linknav}" var="link"> 
                        <li class="<c:if test='${link.name==window.clink}'>active</c:if>">
                            <a href="${link.url}"><div class="link">${link.name}</div></a>
                        </li>
                    </c:forEach>
                </ul>
            </div>
            <div class="expand">
                <span class="b1"></span>
                <span class="b2"></span>
            </div>
        </div>
</tmplate>
