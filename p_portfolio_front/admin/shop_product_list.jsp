<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/shop_product_list.css?v=13">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=2">
</head>
<body>
<header>
<%@ include file='./admin_header.jsp' %>
</header>
<nav>
<%@ include file='./admin_menu.jsp' %>
</nav>
<section>
<div class="shop_list_main">
<div class="spl_div"><em class="spl_nemo">■ </em>상품관리 페이지</div>
<form action="./pd_api1.do" method="post" id="spl_sch_frm" onsubmit="event.preventDefault(); spl_sch();">
  <input type="hidden" name="keys" value="pd_knock4">
  <div class="spl_div2"> 
    <select onchange="chdate(this.value)">
      <option value="pd_name" id="pd_name">상품명</option>
      <option value="pd_code" id="pd_code">상품코드</option>
     
    </select>
    <input type="text" id="selid" name="pd_name">
    <input type="submit" value="검색">
  </div>
</form>
<ul class="spl_ul1">
<li><input type="checkbox" id="checkall" onclick="spl_checkall(this.checked)"> </li>
<li>상품코드</li> 
<li>이미지</li> 
<li>상품명</li> 
<li>대 카테고리</li> 
<li>판매가격</li> 
<li>할인가격</li> 
<li>할인율</li> 
<li>재고현황</li> 
<li>판매 유/무</li> 
<li>관리</li> 
</ul>
<ul class="ml_ul2" >
<li style="display: none" id="nomembers">등록된 상품이 없습니다.</li>


<!-- 출력 -->
<form id="product_del" action="product_del.do" method="get" name="product_del">
<input type="hidden" name="m_id">
<li id="ml_output">



</li>
<!-- 출력 -->
</form>

</ul>
<div class="pagedivmain" id="pagesusu" >
<div></div>
</div>


<input type="button" value="선택삭제" class="ml_btn1" onclick="productdelete()">
<input type="button" value="상품등록" class="ml_btn2" onclick="productingo()">
</div>
</section>
<script type="text/javascript" src="./js/shop_product_list.js?v=15"></script>
</body>
</html>