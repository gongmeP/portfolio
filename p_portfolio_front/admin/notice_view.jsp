<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/notice_write.css?v=5">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=2">
<script type="text/javascript" src="../ckeditor/ckeditor.js"></script>
<style type="text/css">
.ntw_texts {
	width: 700px;
	height: 540px;
}
</style>
</head>
<body>
	<header>
		<%@ include file='./admin_header.jsp'%>
	</header>
	<nav>
		<%@ include file='./admin_menu.jsp'%>
	</nav>
	<section style="margin-top: 20px;">
		<div class="notice_write_main">
			<div class="ntw_div1">
				<em class="ntw_nemo">■</em> 공지사항 VIEW 페이지
			</div>

	<form action="notice_view.do" method="get" id="ntl_frm">
	<input type="hidden" value="${nt_id}" name="nt_id">
			<ul class="ntw_ul2">
				<li>공지일자</li>
				<li>${created_at}</li>
			</ul>
			<ul class="ntw_ul2">
				<li>공지사항 제목</li>
			   <li><input type="text" value="${nt_title}" class="ntw_input1" name="nt_title"></li>
			</ul>
			<ul class="ntw_ul2">
				<li>글쓴이</li>
				<li>${nt_name}</li>
			</ul>
			<ul class="ntw_ul2">
				<li>첨부파일</li>
				<li>${nt_file}</li>
			</ul>
			<ul class="ntw_ul3">
				<li>공지사항</li>
				<li><textarea id="ntw_texts" class="ntw_texts" name="nt_text">${nt_text}</textarea></li>
			</ul>
			
			<input type="hidden" name="view_count" value="1">  
			
			

			<div class="ntw_btn1" style="width: 500px;">
				<input type="button" value="공지목록" onclick="notilistgo()" style="background-color: rgb(27, 25, 25)">
				 <input type="button" value="공지수정" onclick="notis_view_update(${nt_id})" style="background-color: rgb(20, 4, 91)">
				  <input type="button" value="공지삭제" onclick="notis_view_del(${nt_id})"style="background-color: rgb(81, 61, 61)" >
			</div>
	</form>


		</div>
	</section>
</body>
<script type="text/javascript" src="./js/notice_view.js?v=6"></script>

</html>