<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="./css/default.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/font.css?v=2">
<link rel="stylesheet" type="text/css" href="./css/index.css?v=9">

<script src="./js/index.js?v=4"></script>
</head>
<body>

<form id="frm" onsubmit="return login()" method="post" action="./login.do">
<section class="main_sc">
<p class="title_login">로그인</p>
<ul class="main_ulcss">
	<li>간편로그인은 회원가입 후 최초 1회 연동이 필요합니다.</li>
	
	<li><input type="text" placeholder="아이디를 입력하세요" name="m_id" value="pjkadmin"></li>
	
	<li><input type="password" placeholder="비밀번호 대,소문자 구분 9~15자로 입력하세요" maxlength="15" name="m_passwd" value="di2qjsdldi!"></li>
	
	<li><input type="submit" value="로그인"></li>
	
	<li>
		<ul class="search_ulcss">
			<li>휴먼계정복구</li>
			<li>아이디 찾기</li>
			<li>비밀번호 찾기</li>
		</ul>
	</li>
	
	<li class="li_login">
	<ul class="uls_login2">
	<li>  <div class="center-line"></div></li>
	<li>간편로그인</li>
	<li>  <div class="center-line"></div></li>
	</ul>
	</li>
	
	<li class="liwudth_80">
		<ul class="login_ulcss">
			<li><img src="./ico/icon-ipin.png" class="img_size"></li>
			<li><img src="./ico/icon-kakao.png" class="img_size"></li>
			<li><img src="./ico/icon-naver.png" class="img_size"></li>
			<li><img src="./ico/icon-phone.png" class="img_size"></li>
		</ul>
	</li>
	
	<li><input type="button" value="회원가입" onclick="joingo()"></li>
</ul>

</section>
</form>
</body>
<script type="text/javascript">
window.onresize = function() {
    var w = window.innerWidth;
     if (w < 360) {
    	  alert("해당 페이지는 모바일 전용 입니다.");

    }
};
</script>
</html>