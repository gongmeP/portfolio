<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/config_form.css?v=8">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=3">

</head>
<body>
	<header>
		<%@ include file='./admin_header.jsp'%>
	</header>
	<nav>
		<%@ include file='./admin_menu.jsp'%>
	</nav>
	<form action="./config_form_update.do" method="post" id="con_frm">
		<section>
			<div class="config_main">
				<input type="hidden" name="m_id" value="<%=userid%>">
				<ul class="config_ul1">
					<li><em style="color: red;">■</em> 홈페이지 가입 환경 설정</li>
					<li>
						<div>홈페이지 제목</div> <input type="text" class="pagename" name="h_name" value="${h_name}">
					</li>
					<li>
						<div>관리자 메일 주소</div> <input type="text" class="adminmail" name="a_mail" value="${a_mail}">
					</li>
					<li>
						<div>포인트 사용 유/무</div> 
						<label class="labelss0"> <input id="point_Y" type="radio" name="point" value="Y"> 포인트 사용</label>
						<label class="labelss0"> <input id="point_N" type="radio" name="point" value="N" checked="checked"> 포인트 미사용</label>
					</li>
					<li>
						<div class="jongdiv">
							<div>회원 가입시 적립금</div>
							<input type="text" class="parsiq" name="reward" value="${reward}"> 점
						</div>
						<div class="jongdiv">
							<div>회원 가입시 권한레벨</div>
							<input type="text" class="parsiq" name="level" value="${level}"> 레벨
						</div>
					</li>
					<li><em style="color: red;">■</em> 홈페이지 기본 환경 설정</li>
					<li>
						<div class="jongdiv">
							<div>회사명</div>
							<input type="text" name="c_name" value="${c_name}">
						</div>
						<div class="jongdiv">
							<div>사업자 등록 번호</div>
							<input type="text" name="c_number" value="${c_number}">
						</div>
					</li>
					<li>
						<div class="jongdiv">
							<div>대표자명</div>
							<input type="text" name="rep_name" value="${rep_name}">
						</div>
						<div class="jongdiv">
							<div>대표전화번호</div>
							<input type="text" name='req_tel' value="${req_tel}">
						</div>
					</li>
					<li>
						<div class="jongdiv">
							<div>통신판매업 신고번호</div>
							<input type="text" name='net_tel' value="${net_tel}">
						</div>
						<div class="jongdiv">
							<div>부가 통신 사업자번호</div>
							<input type="text" name='sub_net_tel' value="${sub_net_tel}">
						</div>
					</li>
					<li>
						<div class="jongdiv">
							<div>사업장 우편번호</div>
							<input type="text" name='c_post_add' value="${c_post_add}">
						</div>
						<div class="jongdiv">
							<div>사업장 주소</div>
							<input type="text" class="adminmail" name='c_add' value="${c_add}">
						</div>
					</li>
					<li>
						<div class="jongdiv">
							<div>정보관리 책임자명</div>
							<input type="text" name='info_name' value="${info_name}">
						</div>
						<div class="jongdiv">
							<div>정보책임자 E-mail</div>
							<input type="text" class="pagename" name='info_email' value="${info_email}">
						</div>
					</li>
					<li><em style="color: red;">■</em> 결제 기본 환경</li>
					<li>
						<div class="jongdiv">
							<div>무통장 은행</div>
							<input type="text" name='moo_bk' value="${moo_bk}">
						</div>
						<div class="jongdiv">
							<div>은행계좌번호</div>
							<input type="text" class="pagename" name='bk_number' value="${bk_number}">
						</div>
					</li>
					<li>
						<div>신용카드 결제 사용</div> 
						<label class="labelss"> <input id="spay_Y" type="radio" name="spay" value="Y">사용</label> 
						<label class="labelss"> <input id="spay_N" type="radio" name="spay" value="N" checked="checked">미사용</label>
						<p>※해당 PG사가 있을 경우 사용으로 변경합니다.</p>
					</li>
					<li>
						<div>휴대폰 결제 사용</div> <label class="labelss">
						<input id="hpay_Y" type="radio" name="hpay" value="Y">사용</label>
						 <label class="labelss"><input id="hpay_N" type="radio" name="hpay" value="N" checked="checked">미사용</label>
						<p>※주문시 휴대푠 결제를 가능하게 할 것인지를 설정합니다.</p>
					</li>
					<li>
						<div>도서상품권 결제 사용</div> 
						<label class="labelss"><input id="bpay_Y" type="radio" name="bpay" value="Y">사용</label> 
						<label lass="labelss"><input id="bpay_N" type="radio" name="bpay" value="N" checked="checked">미사용</label>
						<p>※도서상품권 결제만 적용되며, 그 외에 상품권은 결제 되지 않습니다.</p>
					</li>
					<li>
						<div class="jongdiv">
							<div>결제 최소 포인트</div>
							<input type="text" name="min_point" value="${min_point}">점
						</div>
						<div class="jongdiv">
							<div>결제 최대 포인트</div>
							<input type="text" name="max_point" value="${max_point}">점
						</div>
					</li>
					<li>
						<div>현금 영수증 발급사용</div> 
						<label class="labelss"><input id="resito_Y" type="radio" name="resito" value="Y">사용</label> 
						<label class="labelss"><input id="resito_N" type="radio" name="resito" value="N" checked="checked">미사용</label>
						<p>※현금 영수증 관련 사항은 PG사 가입이 되었을 경우 사용 가능합니다.</p>
					</li>
					<li>
						<div class="jongdiv">
							<div>배송업체명</div>
							<input type="text" name="delivery_company" value="${delivery_company}">
						</div>
						<div class="jongdiv">
							<div>배송비 가격</div>
							<input type="text" name="delivery_price" value="${delivery_price}">
						</div>
					</li>
					<li>
						<div>배송희망일</div> 
						<label class="labelss"><input id="coopangday_Y" type="radio" name="coopangday" value="Y">사용</label>
						<label class="labelss"><input id="coopangday_N" type="radio" name="coopangday" value="N" checked="checked">미사용</label>
						<p>※배송희망일 사용시 사용자가 직접 설정 할 수 있습니다.</p>
					</li>
				</ul>
				<div class="config_btnall">
					<input type="button" value="설정 저장" class="config_btn" onclick="configsave()"> 
					<input type="button" value="저장 취소" class="config_btn" onclick="confignono()">
				</div>
			</div>
		</section>
	</form>
	<footer>
		<%@ include file='./admin_footer.jsp'%>
	</footer>
</body>
<script type="text/javascript" src="./js/config_form.js?v=5"></script>
<script type="text/javascript">
	var m_hu = "${m_hu}";

	if (m_hu == "Y") {
		document.getElementById("m_hu_y").checked = true;
	} else if (m_hu == "N") {
		document.getElementById("m_hu_n").checked = true;
	}

	var point = "${point}";
	var spay = "${spay}";
	var hpay = "${hpay}";
	var bpay = "${bpay}";
	var resito = "${resito}";
	var coopangday = "${coopangday}";

	if (point == "Y") {
		document.getElementById("point_Y").checked = true;
	} else if (point == "N") {
		document.getElementById("point_N").checked = true;
	}

	if (spay == "Y") {
		document.getElementById("spay_Y").checked = true;
	} else if (spay == "N") {
		document.getElementById("spay_N").checked = true;
	}

	if (hpay == "Y") {
		document.getElementById("hpay_Y").checked = true;
	} else if (hpay == "N") {
		document.getElementById("hpay_N").checked = true;
	}

	if (bpay == "Y") {
		document.getElementById("bpay_Y").checked = true;
	} else if (bpay == "N") {
		document.getElementById("bpay_N").checked = true;
	}

	if (resito == "Y") {
		document.getElementById("resito_Y").checked = true;
	} else if (resito == "N") {
		document.getElementById("resito_N").checked = true;
	}

	if (coopangday == "Y") {
		document.getElementById("coopangday_Y").checked = true;
	} else if (coopangday == "N") {
		document.getElementById("coopangday_N").checked = true;
	}
</script>
</html>