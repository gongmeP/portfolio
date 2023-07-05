<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>메인화면</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/main1.css?v=1">
</head>
<body>
<section>
<form action="./login.do" id="fm" method="post" onsubmit="mainlogin(event)">
<div class="main1_1"> 
<div class="login1">
<div class="img1">
ADMINSTRATOR ADD
</div>

<ul>
<li> <input type="text" placeholder="관리자 아이디를 입력하세요." name="m_id" value="pjk5001"> </li>
<li> <input type="submit" value="MASTER LOGIN"> </li>
<li> <input type="password" placeholder="관리자 패스워드를 입력하세요." name="m_passwd" value="di2qjsdldi!"> </li>

</ul>
<p>*본 사이트는 관리자 외에는 접근을 금합니다. 페이지 접근에 대한 접속 정보는 모두 기록 됩니다.</p>
  
  <ul class="ul2">
  <li onclick="addgogo()">신규 관리자 등록 요청</li>
  <li>아이디/패스워드 찾기</li>
  </ul>
</div>

</div>
</form>

</section>
</body>
<script type="text/javascript" src="./js/main1.js?v=2" defer="defer"></script>
</html>