<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="./css/admin_list.css?v=8">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=2">


<div class="list_main">
<ul class="list_ul1">
<li> <em>■</em> 신규등록 관리자</li>
<li>
<ul class="list_ul2">
<li>NO</li>
<li>관리자명</li>
<li>아이디</li>
<li>전화번호</li>
<li>이메일</li>
<li>담당부서</li>
<li>담당직책</li>
<li>가입일자</li>
<li>승인여부</li>
</ul>
</li>
<li class="li3" style="display: none" id="nonew">신규 등록된 관리자가 없습니다.</li>

<!-- 미승인 관리자 출력하는곳 -->

<li id="datalis">

</li>

<!-- 미승인 관리자 출력하는곳 -->



</ul>
</div>

<script type="text/javascript" src="./js/admin_list.js?v=9"></script>