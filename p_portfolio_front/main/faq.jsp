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


<link rel="stylesheet" href="./css/faq.css?v=4">
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
			<div class="faq_container">
				<div class="faq_contents">
					<span> HOME ▶ FAQ </span>

					<div class="faq_gogo">
						<span>FAQ</span>

					</div>
					
					<ul class="faq_menu_ul">
					<li onclick="faqlistgogo('전체')">전체</li>
					<li onclick="faqlistgogo('상품구매')">상품구매</li>
					<li onclick="faqlistgogo('상품배송')">상품배송</li>
					<li onclick="faqlistgogo('상품반품')">상품반품</li>
					<li onclick="faqlistgogo('개인정보변경')">개인정보변경</li>
					<li onclick="faqlistgogo('회원가입/탈퇴')">회원가입/탈퇴</li>
					
					</ul>
                 
                 
                 <div class="faq_faqs" id="faq_faqs">
                 
                 
                 
                 </div>

				</div>

			</div>
		</section>
	</main>
	<footer class="foo" id="foo">
		<%@ include file='./footer.jsp'%>
	</footer>
	<script type="text/javascript" src="./js/faq.js?v=8"></script>
</body>
</html>