<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/member_modify.css?v=6">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=3">
</head>
<body>
<form action="mem_update2.do" method="post" id="mm_frm">
<div class="member_modify_main">
<ul class="mm_ul1">
<li class="mm_li1">[고객정보 수정]</li>
<li>
<div>아이디</div>
<div id="m_id_id" >${m_id}</div>
<input type="hidden" name="m_id" value="${m_id}">
</li>
<li>
<div>고객명</div>
<div>${m_name}</div>
</li>
<li>
<div>레벨</div>
<input type="text" value="${m_level}" class="mm_lvinput" name="m_level">
</li>
<li>
<div>포인트</div>
<input type="text" value="${m_point}" class="mm_lvinput" name="m_point">
</li>
<li>
  <div>휴면상태</div>
  <label>
    <input type="radio" name="m_hu" value="Y" id="m_hu_y"> 적용
  </label>
  <label>
    <input type="radio" name="m_hu" value="N" id="m_hu_n"> 미적용
  </label>
</li>
<li>
<div>탈퇴일자</div>
<div>${m_byedate}</div>
</li>

</ul>
<div class="mm_btn1">
<input type="button" value="정보수정" onclick="membersoojung2('${m_id}')">
<input type="button" value="창닫기 " onclick="mm_close()">
</div>


</div>
</form>
</body>
<script type="text/javascript" src="./js/member_modify.js?v=5"></script>
<script type="text/javascript">
  var m_hu = "${m_hu}";
  
  if (m_hu == "Y") {
    document.getElementById("m_hu_y").checked = true;
  } else if (m_hu == "N") {
    document.getElementById("m_hu_n").checked = true;
  }
</script>
</html>