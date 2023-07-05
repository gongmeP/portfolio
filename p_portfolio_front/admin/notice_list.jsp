<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="app" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/notice_list.css?v=10">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=1">
</head>
<body>
	<header>
		<%@ include file='./admin_header.jsp'%>
	</header>
	<nav>
		<%@ include file='./admin_menu.jsp'%>
	</nav>
	<section style="margin-top: 20px;">
		<div class="notice_list_main">
			<div class="ntl_div1">
				<em class="ntl_nemo">■</em> 공지사항 관리페이지
			</div>
			<ul class="ntl_ul1 bordgogogo">
				<li><label> <input type="checkbox" value="" onclick="mm_checkall(this.checked)">
				</label></li>
				<li>NO</li>
				<li>제목</li>
				<li>글쓴이</li>
				<li>날짜</li>
				<li>조회</li>
			</ul>

		


			<!-- 출력 -->
			<form id="notidel_frm" action="noti_list_del.do" method="get" name="notidel_frm">
			<em id="notice_list_main"> </em>
			</form>
			<!-- 출력 -->


			<ul class="ntl_ul2" style="display: none;" id="nogong_gi">
				<li>등록된 공지 내용이 없습니다.</li>
			</ul>



			<div class="ntl_btn1">
				<input type="button" value="공지등록" onclick="noti_selgogosing()">
				<input type="button" value="공지삭제" onclick="noti_del()"> 
			</div>
			
			<ul class="ntl_page">
			<li onclick="pagego(1)"><<</li>
			<li onclick="pagego(2)"><</li>
			<li id="pagesoo">1</li>
			<li onclick="pagego(3)">></li>
			<li onclick="pagego(4)">>></li>
			</ul> 



		</div>
	</section>
</body>
<script type="text/javascript" src="./js/notice_list.js?v=21"></script>
</html>