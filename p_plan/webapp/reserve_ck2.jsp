<%@page import="java.text.DecimalFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% 
    
    String[] data = (String[]) request.getAttribute("data");
    String rno = (String) request.getAttribute("rno");
    String yaya = data[4].split("-")[0];
    String yaya2 = data[4].split("-")[1];
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
    

    String money = data[5];
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
<link rel="stylesheet" type="text/css" href="./css/reserve_ck2.css?v=8">
</head>
<%@ include file="./top2.jsp"%>
<body>
<form id="f" method="post" action="./deleteok.do">
<div class="main">
<p>야영장 예약하기</p>
<ul class="ul1">
<li>
<div><img alt="" src="./ico/camping.svg" class="imgs"><%=data[3] %> 야영장</div>
<div><%=data[8] %> ~ <%=data[7] %></div>
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
<div><%=data[1] %></div>
</li>
<li>
<div>연락처</div>
<div><%=data[2] %></div>
</li>
<li>
<div>인원수</div>
<div><%=data[6] %> 명</div>
</li>
<li>
<div>예약번호</div>
<div><%=data[9] %></div>
<input type="hidden" value="<%=data[9] %>" name="rno">
</li>
<li>
<div><img alt="" src="./ico/pay.svg" class="imgs">결제수단</div>
</li>
<li class="btnlis">
<span class="btnli">
<input type="button" value="무통장 입금" style="display: none" id="M">
<input type="button" value="신용카드" style="display: none" id="S">
<input type="button" value="계좌이체" style="display: none" id="G">
<p id="payok" style="display: none">결제완료</p>
</span>
</li>	
<li class="lilast">
</li>
<li class="lastbtnin"> <input type="button" value="예약취소" class="lastbtn" onclick="delete_ok()"> </li>
</ul>
</div>
</form>

</body>
<%@ include file="./copyri.jsp"%>
<script>

var msgdata = <%=data[11]%>;
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
	f.submit();
}
</script>

</html>