<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/notice_write.css?v=3">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=2">
<script type="text/javascript" src="../ckeditor/ckeditor.js?v=3"></script>
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
				<em class="ntw_nemo">■</em> 공지사항 등록페이지
			</div>

	<form action="notice_list_insert.do" method="post" id="ntl_frm">
			<ul class="ntw_ul2">
				<li>공지사항 여부</li>
				<input type="hidden" value="N" name="nt_adm" id="nt_adm2">
				<li><label> <input type="checkbox" id="nt_adm"> 공지출력을 체크할 시 해당 글 내용은 최상단에 노출 되어집니다. </label></li>
			</ul>
			<ul class="ntw_ul2">
				<li>공지사항 제목</li>
				<li><input type="text" class="ntw_input1" name="nt_title"> ※최대 150자 입력가능</li>
			</ul>
			<ul class="ntw_ul2">
				<li>글쓴이</li>
				<li><input type="text" class="ntw_input2" name="nt_name"> ※관리자 이름이 노출 됩니다.</li>
			</ul>
			<ul class="ntw_ul2">
				<li>첨부파일</li>
				<li><input type="file" name="nt_file"> ※첨부파일 최대 용량인 2MB 입니다.</li>
			</ul>
			<ul class="ntw_ul3">
				<li>공지사항</li>
				<li><textarea id="ntw_texts" class="ntw_texts" name="nt_text"></textarea></li>
			</ul>
			
			<input type="hidden" name="view_count" value="1">  

			<div class="ntw_btn1">
				<input type="button" value="공지목록" onclick="notis_listgogo()">
				 <input type="button" value="공지등록" onclick="notis_insertgogo()">
			</div>
	</form>


		</div>
	</section>
</body>
<script type="text/javascript" src="./js/notice_write.js?v=10"></script>
<script type="text/javascript">
var editor = CKEDITOR.replace('ntw_texts');

editor.config.width = '700px';
editor.config.height = '400px';
editor.config.resize_enabled = false;
</script>
</html>