<%@page import="java.text.DecimalFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String yaya = ((String)request.getAttribute("m_dong")).split("-")[0];
String yaya2 = ((String)request.getAttribute("m_dong")).split("-")[1];
if (yaya2.equals("0")){
    yaya2 = " - 가동";
}
else if (yaya2.equals("1")){
    yaya2 = " - 나동";
}
else if (yaya2.equals("2")){
    yaya2 = " - 다동";
}
else if (yaya2.equals("3")){
    yaya2 = " - 라동";
}

String money = (String)request.getAttribute("m_money");
int intmoney = Integer.parseInt(money);
DecimalFormat decimalFormat = new DecimalFormat("#,###");
String summoney = decimalFormat.format(intmoney);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/reserve_ck2.css?v=18">
</head>
<body>
<form id="reservdel" method="post" action="./reserve_del.do">
<div class="main">
<p>야영장 예약 정보</p>
<div class="PCGOGOzz">※ 야영장 예약은 PC에서만 신청 가능합니다.</div>
<ul class="ul1">
<li>
<div><img alt="" src="./ico/camping.svg" class="imgs">${m_mt} 야영장</div>
</li>
<li>
<div>야영장 위치</div>
<div><%out.print(yaya+yaya2);%></div>
</li>
<li>
<div></div>
<div>총 금액 : <%=summoney%>원</div>
</li>
<li>
<div><img alt="" src="./ico/report.svg" class="imgs">예약자 정보</div>
</li>
<li>
<div>고객명</div>
<div>${m_name}</div>
</li>
<li>
<div>연락처</div>
<div>${m_tel}</div>
</li>
<li>
<div>인원수</div>
<div>${m_person}명</div>
</li>
<li>
<div>예약번호</div>
<div>${rno}</div>
<input type="hidden" value="${rno}" name="rno">
</li>
<li>
<div>예약일자</div>
<div>${outdate} ~ ${indate}</div>
</li>
<li>
<div><img alt="" src="./ico/pay.svg" class="imgs">결제수단</div>
</li>
<li class="btnlis">
<span class="btnli">
<input type="button" value="무통장 입금" style="display: none" id="M">
<input type="button" value="신용카드" style="display: none" id="S">
<input type="button" value="계좌이체" style="display: none" id="G">
<p id="payok" style="display: none; color: red;">결제완료</p>
</span>
</li>	
<li class="lilast">
</li>
<li class="lastbtnin"> <input type="button" value="예약취소" class="lastbtn" onclick="delete_ok()"> </li>
</ul>
</div>
</form>

</body>
<script>

var msgdata = ${pay};
console.log(msgdata);
if(msgdata == M){
	 document.getElementById("M").style.display = "block";
	 document.getElementById("payok").style.display = "block";
}
else if(msgdata == S){
	document.getElementById("S").style.display = "block";
	document.getElementById("payok").style.display = "block";
}
else if(msgdata == G){
	document.getElementById("G").style.display = "block";
	document.getElementById("payok").style.display = "block";
}
else{
	document.getElementById("payok").style.display = "block";
}

function delete_ok() {
    if (confirm("예약을 취소 하시겠습니까?")) {
       
        //reservdel.submit();
        alert("이력서의 순환을 위해 삭제 버튼을 중지한 상태입니다. 감사합니다 ㅎ");
        
    }
}

window.onresize = function() {
    var w = window.innerWidth;
     if (w < 360) {
    	  alert("해당 페이지는 모바일 전용 입니다.");

    }
};
</script>

</html>