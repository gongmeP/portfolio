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


<link rel="stylesheet" href="./css/notice2.css?v=10">
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
			<div class="notice2_container">
				<div class="notice2_contents">
					<span> HOME ▶ NOTICE </span>

					<div class="notice2_gogo">
						<span>NOTICE</span>

					</div>
					
			<ul class="noti_ul1 bordgogogo2">
				
				<li>NO</li>
				<li>제목</li>
				<li>글쓴이</li>
				<li>날짜</li>
				<li>조회</li>
			</ul>
					
			<!-- 출력 -->
			<form id="notidel_frm" name="notidel_frm">
			<em id="notice_list_main"> </em>
			</form>
			<!-- 출력 -->


			<ul class="noti_ul2" style="display: none;" id="nogong_gi">
				<li>등록된 공지 내용이 없습니다.</li>
			</ul>
			
			
			<ul class="noti_page">
			<li onclick="pagego(1)"><<</li>
			<li onclick="pagego(2)"><</li>
			<li id="pagesoo" class="notice_pagesoo">1</li>
			<li onclick="pagego(3)">></li>
			<li onclick="pagego(4)">>></li>
			</ul> 
			
		<form action="/admin/notis_api1.do?" method="post" id="noti_sch_frm" onsubmit="event.preventDefault(); noti_sch();">
        <input type="hidden" name="keys" value="notis_api1_ok">
        <div class="notice_div2"> 
        <input type="text" id="selid" name="noti_name" placeholder="검색할 제목을 입력하세요.">
        <input type="submit" value="검색">
        </div> 
        </form>
					
                
                 
                 </div>

				</div>

			</div>
		</section>
	</main>
	<footer class="foo" id="foo">
		<%@ include file='./footer.jsp'%>
	</footer>
	<script type="text/javascript" src="./js/notice2.js?v=15"></script>
</body>
</html>