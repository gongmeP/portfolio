<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% 
    String[] data = (String[]) request.getAttribute("data");
    String rno = (String) request.getAttribute("rno");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/part3-1.css?v=6">
</head>asd
<%@ include file="./top2.jsp"%>
<body>

<div class="main">
<p>야영장 예약확인</p>
<ul class="ul1">
<li>
<div><img alt="" src="./ico/camping.svg" class="imgs"><%=data[3] %> 야영장</div>
<div><%=data[7] %> ~ <%=data[8] %></div>
</li>
<li>
<div>야영장 위치</div>
<div><%=data[4] %></div>
</li>
<li>
<div></div>
<div>총 금액 : <%=data[5] %>원</div>
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
</li>
<li>
<div><img alt="" src="./ico/pay.svg" class="imgs"> 결제수단</div>
</li>
<li id="a1" style="display: none;" class="btnin">
<input type="button" value="무통장 입금" onclick="a()"  class="aa1">
<div>신한은행 : 102-202306-0606 (국립공원공단)</div>
</li>
<li id="a2" style="display: none;" class="btnin">
<input type="button" value="신용카드" onclick="b()"  class="aa2">
<div style="color: red;">결제완료</div>
</li>
<li id="a3" style="display: none;" class="btnin">
<input type="button" value="계좌이체" onclick="c()"  class="aa3">
<div style="color: red;">입금완료</div>
</li>
<li class="btnlis">
<span class="btnli">
<input type="button" value="무통장 입금" onclick="a()" id="a" class="bin">
<input type="button" value="신용카드" onclick="b()" id="b" class="bin">
<input type="button" value="계좌이체" onclick="c()" id="c" class="bin">
</span>
</li>   
<li class="lilast" style="display: none;">
<div>신한은행 : 102-202306-0606 (국립공원공단)</div>
<div>
<input type="text" placeholder="입금자명 을 입력하세요.">
</div>
</li>
<li class="lastbtnin"> <input type="button" value="결제선택" class="lastbtn" onclick="paygo()">

<form id="fmss" method="post">
<input type="button" value="예약완료" class="lbt" style="display: none;" onclick="paygogo()">
<input type="button" value="예약취소" class="lbt" style="display: none;"  onclick="del()">
<input type="hidden" value="" name="pay"> 
<input type="hidden" value="<%=rno%>" name="rno">
</form>
 </li>
</ul>
</div>
<%@ include file="./copyri.jsp"%>
</body>

<script type="text/javascript" src="./js/part3-1.js?v=1">

</script>
</html>