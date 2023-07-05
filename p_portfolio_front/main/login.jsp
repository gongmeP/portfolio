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
<link rel="stylesheet" href="./css/main.css?v=4">
<link rel="stylesheet" href="./default.css">
<link rel="stylesheet" href="./css/login.css?v=6">
<script defer="defer" src="./js/loginjs.js?v=4"></script>
<script defer="defer" src="./static/js/main.2116f717.js"></script>
<link href="./static/css/main.1f8f0d54.css" rel="stylesheet">
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
	     <div class="container">
            <div class="contents">
                <span>
                    HOME ▶ 로그인
                </span>
                <div class="sub_cotents">
                    <span>로그인</span>
                    <div class="member_info">
                        <h3>회원 로그인</h3>
                        <ul>
                            <li>
                                <form action="./member_logingo.do" id="login_frm" method="post" onsubmit="main_logingo(event)">
                                    <div class="member_login_box">
                                        <span>
                                            <input type="text" class="login_input" placeholder="아이디를 입력하세요!" name="m_id" value="admins">
                                        </span>
                                        <span>
                                            <input type="password" class="login_input" placeholder="패스워드를 입력하세요!" name="m_passwd" value="di2qjsdldi!">
                                        </span>
                                        <button type="submit" class="login_btn" title="회원 로그인">로그인</button>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <label class="id_save"><input type="checkbox" id="loginchek"  onclick="idsaves(this.checked)"> 아이디 저장</label>
                            </li>
                        </ul>
                        <h3 class="none"></h3>
                        <ol class="btn_login_box">
                            <li>
                            <input type="button" value="회원가입" class="btn_box1" title="회원가입" onclick="member_join()">
                            </li>
                            <li>
                            <input type="button" value="아이디 찾기" class="btn_box1 reserve1" title="아이디 찾기" onclick="id_search()">
                            </li>
                            <li>
                            <input type="button" value="비밀번호 찾기" class="btn_box1 reserve1" title="비밀번호 찾기" onclick=" pw_search()">
                            </li>
                        </ol>
                        <h3>비회원 로그인</h3>
                        <ul>
                            <li>
                                <form action="#" id="nologin_frm" method="post" onsubmit="main_no_logingo(event)">

                                    <div class="member_login_box">
                                        <span>
                                            <input type="text" class="login_input" placeholder="주문자명" name="no_m_name">
                                        </span>
                                        <span>
                                            <input type="text" class="login_input" placeholder="주문번호" name="no_m_number">
                                        </span>
                                        <button type="submit" class="login_btn reserve1" title="비회원 로그인">확인</button>
                                    </div>
                                </form>
                            </li>
                            <li style="font-size: 12px; height: 40px; line-height: 40px;">
                                ※ 주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
	  </section>
	</main>
	<footer class="foo" id="foo">
	 <%@ include file='./footer.jsp' %>
	</footer>
</body>
</html>