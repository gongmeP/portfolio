<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    %>
    
 <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>야영장 예약하기</title>
<link rel="stylesheet" type="text/css" href="./css/default.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/font.css">
<link rel="stylesheet" type="text/css" href="./css/reserve2.css?v=11">
</head>
<body>
<%@ include file="./top2.jsp"%>
<main style="height: auto;">
<form id="f" method="post" action="./part2.do">
<input type="hidden" name="mt" id="mt" value="">
<input type="hidden" name="ya" id="ya" value="">
<div class="main">
<ul class="ulcss">
	<li>야영장 예약하기</li>
</ul>

<ul class="ulcss1">
	<li class="cla">가야산<div class="d1" onclick="gogo('가야산')"><img src='./ico/arrow.svg'></div></li>
	<li class="cla">계룡산<div class="d1" onclick="gogo('계룡산')"><img src='./ico/arrow.svg'></div></li>
	<li class="cla">내장산<div class="d1" onclick="gogo('내장산')"><img src='./ico/arrow.svg'></div></li>
	<li class="cla">덕유산<div class="d1" onclick="gogo('덕유산')"><img src='./ico/arrow.svg'></div></li>
</ul>
<div class="div1" id="div1">
<ul class="ulcss1_ul" id="ulcss1_ul">
	<!--  
	<li>백운동</li>
	<li>삼정</li>
	<li>치인</li>
	-->
</ul>
</div>
<ul class="ulcss1">
	<li class="cla">무등산<div class="d1" onclick="gogo('무등산')"><img src='./ico/arrow.svg'></div></li>
	<li class="cla">설악산<div class="d1" onclick="gogo('설악산')"><img src='./ico/arrow.svg'></div></li>
	<li class="cla">소백산<div class="d1" onclick="gogo('소백산')"><img src='./ico/arrow.svg'></div></li>
	<li class="cla">월악산<div class="d1" onclick="gogo('월악산')"><img src='./ico/arrow.svg'></div></li>
</ul>

<ul class="ulcss2" >
	<li><img src='./ico/report.svg' class="aa"></li>
	<li id="ulcss2">야영장을 선택해 주세요</li>
</ul>

<div class="div2" id="div2">
<ul class="ulcss3">
	<li>입실일자</li>
	<li><input type="date" name="d1"></li>
	<li>퇴실일자</li>
	<li><input type="date" name="d2"></li>
</ul>
<ul class="ulcss4"><input type="button" value="야영장 선택" onclick="goyes()"></ul>
</div>
</div>
</form>
</main>

<%@ include file="./copyri.jsp"%>
</body>
<script src = "./js/reserve2.js?v=3"></script>

</html>