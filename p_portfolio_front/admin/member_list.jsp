<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/member_list.css?v=13">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=7">
</head>
<body>
<header>
<%@ include file='./admin_header.jsp' %>
</header>
<nav>
<%@ include file='./admin_menu.jsp' %>
</nav>
<section>
<div class="member_list_main">
<div class="ml_div"><em class="ml_nemo">■ </em>회원관리</div>
<form action="./memlist1api.do" method="post" id="mm_sch_frm" onsubmit="event.preventDefault(); mm_sch();">
  <input type="hidden" name="keys" value="memlist_knock3">
  <div class="ml_div2"> 
    <select onchange="chdate(this.value)">
      <option value="m_id" id="sel_id">아이디</option>
      <option value="m_name" id="sel_nm">고객명</option>
      <option value="m_Ptel" id="sel_tel">휴대폰</option>
    </select>
    <input type="text" id="selid" name="m_id">
    <input type="submit" value="검색">
  </div>
</form>
<ul class="ml_ul1">
<li><input type="checkbox" id="checkall" onclick="mm_checkall(this.checked)"> </li>
<li>아이디</li> 
<li>고객명</li> 
<li>휴대폰</li> 
<li>전화번호</li> 
<li>레벨</li> 
<li>포인트</li> 
<li>최종접속</li> 
<li>가입일</li> 
<li>메일수신</li> 
<li>SMS 수신</li> 
<li>관리</li> 
</ul>
<ul class="ml_ul2" >
<li style="display: none; border: 1px solid black; border-top: 0px;" id="nomembers">등록된 회원이 없습니다.</li>


<!-- 출력 -->
<form id="delfrm" action="del_member.do" method="get" name="delfrm">
<input type="hidden" name="m_id">
<li id="ml_output">



</li>
<!-- 출력 -->
</form>

</ul>
<div class="pagedivmain" id="pagesusu" >
<div></div>
</div>


<input type="button" value="선택삭제" class="ml_btn1" onclick="memberdelete()">
</div>
</section>
<script type="text/javascript" src="./js/member_list.js?v=10"></script>
</body>
</html>