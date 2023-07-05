<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/shop_setup.css?v=3s">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=3">
</head>
<body>
	<header>
		<%@ include file='./admin_header.jsp'%>
	</header>
	<nav>
		<%@ include file='./admin_menu.jsp'%>
	</nav>
	<section style="margin-top: 20px;">
		<div class="shop_setup_main">

			<div class="ss_div1">
				<em class="ss_nemo">■</em> 쇼핑몰 메인 배너관리
			</div>

			<form action="setup_in1.do" method="post" id="setup_frm1">
			
				<ul class="ss__ul1">
					<li>메인 배너 등록</li>
					<li><input type="text" name="banner1" value="${Banner1}"></li>
					<li>배너1</li>
					<li>※ 배너 이미지 URL를 입력하세요</li>

				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="link1" value="${Link1}"></li>
					<li>링크 URL</li>
					<li></li>

				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="banner2" value="${Banner2}"></li>
					<li>배너2</li>
					<li>※ 배너 이미지 URL를 입력하세요</li>

				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="link2" value="${Link2}"></li>
					<li>링크 URL</li>
					<li></li>

				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="banner3" value="${Banner3}"></li>
					<li>배너3</li>
					<li>※ 배너 이미지 URL를 입력하세요</li>

				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="link3" value="${Link3}"></li>
					<li>링크 URL</li>
					<li></li>

				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="banner4" value="${Banner4}"></li>
					<li>배너4</li>
					<li>※ 배너 이미지 URL를 입력하세요</li>

				</ul>
				<ul class="ss__ul1" style="border-bottom: 1px solid black;">
					<li></li>
					<li><input type="text" name="link4" value="${Link4}"></li>
					<li>링크 URL</li>
					<li></li>

				</ul>
				<div class="ss_btn1">
					<input type="button" value="배너변경" onclick="bannerlink1()">
				</div>
			</form>
 <!-- ------------------------------------팝업관리-------------------------------------  -->
 <form action="setup_in2.do" method="post" id="setup_frm2">
				<div class="ss_div1" style="margin-top: 20px; display: inline-block;">
					<em class="ss_nemo">■</em> 쇼핑몰 메인 팝업관리
				</div>

				<ul class="ss__ul1">
					<li>메인 팝업 등록</li>
					<li>
					<input type="text" id="popup_imagego" name="popup_image">
					</li>
					<li>팝업</li>
					<li>※ 팝업 이미지 URL를 입력하세요</li>
				</ul>
				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="popup_link"></li>
					<li>링크URL</li>
					<li></li>
				</ul>
					<ul class="ss__ul1" style="border-bottom: 1px solid black;">
					<li></li>
					<li>
					<label>
					<input type="hidden" name="popup_enabled" id="popup_enabled1" value="N">
					<input type="checkbox" class="ss_popcheck" id="popup_enabled2"> 팝업창 사용 </li>
					</label> 
					<li></li>
					<li></li>
				</ul>
				
				<div class="ss_btn1">
					<input type="button" value="팝업창 변경" onclick="bannerlink2()">
				</div>
				
 </form>
 <!-- ------------------------------------AD배너--------------------------------------  -->
  <form action="setup_in3.do" method="post" id="setup_frm3">
				<div class="ss_div1" style="margin-top: 20px; display: inline-block;">
					<em class="ss_nemo">■</em> 쇼핑몰 AD 배너
				</div>

				<ul class="ss__ul1">
					<li>AD 배너 등록</li>
					<li><input type="text" name="ad_banner1"></li>
					<li>AD 배너1</li>
					<li>※ 배너 이미지 URL를 입력하세요</li>
				</ul>

				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="ad_link1"></li>
					<li>링크 URL</li>
					<li></li>
				</ul>

				<ul class="ss__ul1">
					<li></li>
					<li><input type="text" name="ad_banner2"></li>
					<li>AD 배너2</li>
					<li>※ 배너 이미지 URL를 입력하세요</li>
				</ul>

				<ul class="ss__ul1" style="border-bottom: 1px solid black;">
					<li></li>
					<li><input type="text" name="ad_link2"></li>
					<li>링크 URL</li>
					<li></li>
				</ul>

 <!-- ----------------------------------------------------------------------------  -->
				<div class="ss_btn1">
					<input type="button" value="AD 배너 변경" onclick="bannerlink3()">
				</div>
  </form>

		</div>
	</section>

</body>
<script type="text/javascript" src="./js/shop_setup.js?v=3"></script>
</html>