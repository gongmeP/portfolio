<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
HttpSession sec = request.getSession();
String userid = (String) session.getAttribute("userid");
String nm = (String) session.getAttribute("usernm");
%>
<link rel="stylesheet" type="text/css" href="./css/admin_header.css?v=3">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=1">

<div class="top_main">
	<div class="top_img">ADMINSTRATOR ADD</div>
	<ul class="userlog">
		<li><%=nm%> 관리자</li>
		<li onclick="updates()">[개인정보 수정]</li>
		<li onclick="logout()">[로그아웃]</li>
	</ul>
</div>

<script type="text/javascript" src="./js/admin_header.js?v=2">

</script>
