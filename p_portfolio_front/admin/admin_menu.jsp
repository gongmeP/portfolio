<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
String userId = (String) session.getAttribute("userid");
%>
<link rel="stylesheet" type="text/css" href="./css/admin_menu.css?v=3">
<div class="menu_main">
	<ul class="menu_ul1">
		<!-- 헤더 세션 들어옴 -->
		<li onclick="nomalsetting('<%=userId%>')">쇼핑몰 기본설정</li>
		<li onclick="memberlistgo()">회원관리</li>
		<li onclick="noti_gogo()">공지사항</li>
		<li onclick="shop_gogo()">쇼핑몰관리</li>
		<li onclick="product_gogo()">상품리스트</li>
		<li  onclick="noservice1()">주문내역</li>
		<li  onclick="noservice2()">매츌내역</li>
	</ul>
</div>

<script type="text/javascript" src="./js/admin_menu.js?v=10"></script>
