<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="title" content="합리적인 쇼핑몰 [BEST SHOP]" />
<meta name="description" content="합리적인 쇼핑몰 [BEST SHOP]" />
<meta name="publisher" content="Park_JaeKyun" />
<meta name="robots" content="index,follow" />
<meta name="keywords" content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:card" content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:description"
	content="채소,과일,수산물,베이커리,우유,간식,간편식,냉장고,주방용품" />
<meta name="twitter:title" content="합리적인 쇼핑몰 [BEST SHOP]" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:site_name" content="합리적인 쇼핑몰 [BEST SHOP]" />
<meta property="og:type" content="website" />
<meta property="og:author" content="Park_JaeKyun" />
<meta property="og:url" content="http://pjk5002.cafe24.com/portfolio">
<meta property="og:img" content="./bs_logo.png">
<meta property="al:ios:url"
	content="http://pjk5002.cafe24.com/portfolio">
<meta property="al:android:url"
	content="http://pjk5002.cafe24.com/portfolio">
<meta property="al:web:url"
	content="http://pjk5002.cafe24.com/portfolio">
<link rel="icon" href="./bs_logo.png" size="256x256" />
<link rel="icon" href="./bs_logo.png" size="100x100" />
<link rel="icon" href="./bs_logo.png" size="64x64" />
<link rel="icon" href="./bs_logo.png" size="32x32" />
<link rel="icon" href="./bs_logo.png" size="16x16" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="manifest" href="./manifest.json" />
<link rel="stylesheet" href="./css/main.css?v=3">
<link rel="stylesheet" href="./default.css">
<script defer="defer" src="./static/js/main.2116f717.js"></script>
<link href="./static/css/main.1f8f0d54.css" rel="stylesheet">

<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<link rel="stylesheet" href="./css/join.css?v=15"> 
</head>
<body id="main_all">
	<header class="header_css">
		  <%@ include file='./header.jsp' %>
	</header>
	<nav class="nav_css">
		<div id="menu1"></div>
	</nav>
	<main class="main_css">
	  <section>
	 	<div class="agree_container">
				<div  class="agree_contents">
					<span> HOME ▶ 회원가입 ▶ 약관동의 </span>
					
					<div class="agree_gogo">
						<span>회원가입</span>
						<span> 
						<em style="color: gray;">01. 약관동의</em> <img alt="" src="./mall_img/ico/step.png"> 
						<em>02. 정보입력</em> <img src="./mall_img/ico/step.png"> 
						<em style="color: gray;">03. 가입완료</em></span>
					</div>
					
					
					<form action="./member_insertgo.do" method="post" id="join_frm">
					<div class="join_in">
					
					<span>기본정보 <em class="gongji">※ 모든정보는 필수 항목이므로 반드시 입력 하셔야합니다.</em> </span>
					<input type="hidden" name="m_level" value="1">
					<input type="hidden" name="m_hu" value="N">
					<input type="hidden" name="m_point" value="1000">
					
					<ul class="join_ul1">
					<li>아이디</li>
					<li>
					<input type="text" name="m_id" id="m_id">
					<button type="button" class="join_idchk" onclick="join_idchk()">중복체크</button>
					</li>
					</ul>
					
					<ul class="join_ul1">
					<li>비밀번호</li>
					<li>
					<input type="password" name="m_passwd">
					</li>
					</ul>
					
					<ul class="join_ul1">
					<li>비밀번호 확인</li>
					<li>
					<input type="password" id="join_pass2">
					</li>
					</ul>
					
					<ul class="join_ul1">
					<li>이름</li>
					<li>
					<input type="text" name="m_name">
					</li>
					</ul>
					
					<ul class="join_ul1 join_email">
					<li>이메일</li>
					<li>
					<input type="text" name="m_email" id="join_mailtext" placeholder="이메일 형식에 맞게 입력하세요.">
					<select id="join_mail" onchange="joingogo()">
					<option value="">직접입력</option>
					<option value="hanmail.net">hanmail.net</option>
					<option value="naver.com">naver.com</option>
					<option value="gmail.com">gmail.com</option>
					<option value="Hotmail.com">Hotmail.com</option>
					<option value="daum.net">daum.net</option>
					<option value="nate.com">nate.com</option>
				
				
					</select>
					<label>
					<input type="checkbox" class="join_ck1" id="event1" value="N" onclick="join_event(this.checked)">정보/이벤트 메일 수신에 동의합니다.
					<input type="hidden" name="event" value="N" id="event2" name="event">
					
					</label>
					</li>
					</ul>
					
					<ul class="join_ul1 join_tel">
					<li>휴대폰번호</li>
					<li>
					<input placeholder="- 없이 입력하세요." type="text" class="join_home_tel" name="m_Ptel" maxlength="11" onkeyup="tel2(this.value=this.value.replace(/[^0-9]/g,''))">
					<label class="join_ck_label">
					<input type="checkbox" class="join_ck1" id="sms1" value="N" onclick="join_sms(this.checked)">정보/이벤트 SMS 수신에 동의합니다.
					<input type="hidden" value="N" id="sms2" name="sms">
					
					</label>
					</li>
					</ul>
					
					<ul class="join_ul1">
					<li>전화번호</li>
					<li>
					
					<input name="m_Htel" placeholder="- 없이 입력하세요." type="text" class="join_home_tel" maxlength="11"  onkeyup="tel1(this.value=this.value.replace(/[^0-9]/g,''))">
					</li>
					</ul>
					
					<ul class="join_ul1 join_add">
					<li>주소</li>
					<li>
					<input type="text" id="add1">
					<button type="button" onclick="addrs()">우편번호검색</button>
					<input type="text" id="add2"> 
					<input type="text" id="add3">
					<input type="hidden" value="" name="m_addr" id="addrall">
					</li>
					</ul>
					<div class="join_btnall">
					<button type="button" class="join_btn" onclick="join_back()">취소</button>
					<button type="button" class="join_btn" onclick="join_gogo()">회원가입</button>
					</div>
					</div>
					</form>
					</div>
				
					</div>
	  </section>
	</main>
	<footer class="foo" id="foo">
	 <%@ include file='./footer.jsp' %>
	</footer>
	<script type="text/javascript" src="./js/join.js?v=9"></script>
</body>
</html>