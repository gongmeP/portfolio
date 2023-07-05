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
<link rel="stylesheet" href="./default.css?v=2">
<script defer="defer" src="./static/js/main.2116f717.js"></script>
<link href="./static/css/main.1f8f0d54.css" rel="stylesheet">


<link rel="stylesheet" href="./css/agree.css?v=7"> 
</head>
<body id="main_all">
	<header class="header_css">
		<%@ include file='./header.jsp'%>
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
						<em>01. 약관동의</em> <img alt="" src="./mall_img/ico/step.png"> 
						<em style="color: gray;">02. 정보입력</em> <img src="./mall_img/ico/step.png"> 
						<em style="color: gray;">03. 가입완료</em></span>
					</div>
					
					<div class="agree_check">
					<span>약관동의</span>
					<label>
					 <input type="checkbox" onclick="agg_allck(this.checked)"><em>베스트샵의 모든 약관을 확인하고 전체 동의합니다.</em> 
					 <em style="font-size: 11px; display: inline; fon">(전체동의, 선택항목도 포함됩니다.)</em>
					</label>
					<label class="ag_chk1">
					 <input type="checkbox" id="ag_ck1"><em style="font-weight: bold; display: inline;">(필수)</em> 이용약관 <a style="text-decoration: underline;">전체보기 ></a>
					</label>
					<div class="agtext1" id="agtext1"></div>
					
					<label class="ag_chk1" >
					 <input type="checkbox" id="ag_ck2"><em style="font-weight: bold; display: inline;">(필수)</em> 개인정보 수집 및 이용 <a style="text-decoration: underline;">전체보기 ></a>
					</label>
					<div class="agtext1" id="agtext2"></div>
					
					<div class="agg_btnwi">
					<input type="button" class="agg_btn" value="다음단계" onclick="agg_btn1()">
					
					</div>
					
					
					</div>

				</div>
			</div>
		</section>
	</main>
	<footer class="foo" id="foo">
		<%@ include file='./footer.jsp'%>
	</footer>
	<script type="text/javascript" src="./js/agree.js?v=5"></script>
</body>
</html>