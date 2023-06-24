<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
HttpSession sec = request.getSession();
String nm = (String) session.getAttribute("usernm");
String logout = "로그아웃";
%>

<link rel="stylesheet" type="text/css" href="./css/top.css?v=8">
<link rel="stylesheet" type="text/css" href="./css/font.css?v=1">


<header class="top_header">
	<div class="logodiv"></div>
	<!-- 로고 -->
	<ul class="top_ulcss1">
		<li onclick="abbb()">이용안내</li>
		<li onclick="reserve_go()">예약하기</li>
		<li onclick="location.href='./reserve_ck.jsp'">예약확인</li>
		<li onclick="abb()">마이페이지</li>
		<li onclick="abb2()">그린포인트</li>
	</ul>
	<form action="reserve2sess.do" method="post" id="frm">
		<input type="hidden" value="<%=nm%>" name="m_id">
	</form>

	<ul class="top_ulcss2">
		<li id="login1"><img src="./ico/person.svg" class="ico"><input
			type="button" value="로그인" onclick="login_go()"></li>
		<li id="login2"><img src="./ico/group.svg" class="ico"><input
			type="button" value="회원가입" onclick="join_go()"></li>
		<li id="loginbaner0" style="display: none;"><img
			src="./ico/person.svg" class="ico">
			<div><%=nm%>님 환영합니다.
			</div></li>
		<li id="loginbaner1" style="display: none;"><input type="button"
			value="<%=logout%>" onclick="logout()"></li>
	</ul>
</header>

<script type="text/javascript" src="./js/top2.js?v=6"></script>

<script type="text/javascript">
	var name = "<%=nm%>";
	console.log(name);
	if (name != "null") {
		document.getElementById("loginbaner0").style.display = "flex";
		document.getElementById("loginbaner1").style.display = "flex";

		document.getElementById("login1").style.display = "none";
		document.getElementById("login2").style.display = "none";
	

	} else {
		document.getElementById("loginbaner0").style.display = "none";
		document.getElementById("loginbaner1").style.display = "none";

		document.getElementById("login1").style.display = "flex";
		document.getElementById("login2").style.display = "flex";
		
		
	}
	
	function abbb() {
		alert("서비스 준비중 입니다.");
	}
	function abb() {
		alert("서비스 준비중 입니다.");
	}
	function abb2() {
		alert("서비스 준비중 입니다.");
	}
</script>

