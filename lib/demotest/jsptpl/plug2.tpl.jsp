<%@page contentType="text/html" pageEncoding="UTF-8"%>

<h1>{{title}}</h1>
<c:forEach items="${list}" var="item">
    <option value ="${item.name}">${item.name}</option>
</c:forEach>
<c:if test="${a='abc'}">haha</c:if>