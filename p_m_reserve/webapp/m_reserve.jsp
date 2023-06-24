<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예약확인</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/reserve_ck.css?v=7">
</head>
<body>
<form id="reserveck" method="post" action="./reserve_ck.do">
<div class="main">
<p>야영장 예약확인</p>
<div class="PCGOGOzz">※ 야영장 예약은 PC에서만 신청 가능합니다.</div>

<ul>
	<li>
		<div class="ul_div1"></div>
		<img alt="" src="./ico/report.svg" class="imgs">
		예약자 정보
	</li>
	<li>
		<div>예약번호</div>
		<div><input type="text" name="rno" placeholder="예약번호 8자리 입력" maxlength="8" value="35867143"></div>
	</li>
</ul>
<div class="btnback">
<input type="button" value="예약확인" class="btn" onclick="reserve_ckgo()">
</div>
</div>
</form>

</body>
<script>
function reserve_ckgo(){
	if(reserveck.rno.value==""){
		alert("예약번호 8자리를 입력해주세요");
		return;
	}
	reserveck.submit();
}


window.onresize = function() {
    var w = window.innerWidth;
     if (w < 360) {
    	  alert("해당 페이지는 모바일 전용 입니다.");

    }
};
</script>
</html>