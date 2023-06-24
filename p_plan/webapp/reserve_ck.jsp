<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예약확인</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=3">
<link rel="stylesheet" type="text/css" href="./css/reserve_ck.css?v=7">
</head>
<body>
<%@ include file="./top2.jsp"%>
<form id="f" method="post" action="./reserve_ck.do">
<div class="main">
<p>야영장 예약하기</p>


<ul>
	<li>
		<div class="ul_div1"></div>
		<img alt="" src="./ico/report.svg" class="imgs">
		예약자 정보
	</li>
	<li>
		<div>예약번호</div>
		<div><input type="text" name="rno"></div>
	</li>
</ul>
<div class="btnback">
<input type="button" value="예약확인" class="btn" onclick="reserve_ckgo()">
</div>
</div>
</form>
<%@ include file="./copyri.jsp"%>
</body>
<script>
function reserve_ckgo(){
	f.submit();
}
</script>
</html>