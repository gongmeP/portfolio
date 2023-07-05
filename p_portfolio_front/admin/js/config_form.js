



function configsave() {
	if (confirm("홈페이지 설정을 저장 하시겠습니까?")) {

		if (con_frm.h_name.value == "") {
			alert("홈페이지 제목을 설정 하세요.");
			con_frm.h_name.focus();
			return;
		}

		if (con_frm.a_mail.value == "") {
			alert("관리자 메일 주소를 설정 하세요.");
			con_frm.a_mail.focus();
			return;
		}

		if (con_frm.reward.value == "") {
			alert("회원 가입시 적립금을 설정 하세요.(0점 일 경우 0 입력)");
			con_frm.reward.focus();
			return;
		}

		if (con_frm.level.value == "") {
			alert("회원 가입시 권한레벨을 설정 하세요.");
			con_frm.level.focus();
			return;
		}

		if (con_frm.c_name.value == "") {
			alert("회사명을 설정 하세요.");
			con_frm.c_name.focus();
			return;
		}

		if (con_frm.c_number.value == "") {
			alert("사업자 등록 번호를 설정 하세요.");
			con_frm.c_number.focus();
			return;
		}

		if (con_frm.rep_name.value == "") {
			alert("대표자명을 설정 하세요.");
			con_frm.rep_name.focus();
			return;
		}

		if (con_frm.req_tel.value == "") {
			alert("대표전화번호를 설정 하세요.");
			con_frm.req_tel.focus();
			return;
		}

		if (con_frm.net_tel.value == "") {
			alert("통신판매업 신고번호를 설정 하세요.");
			con_frm.net_tel.focus();
			return;
		}

		if (con_frm.sub_net_tel.value == "") {
			alert("부가 통신 사업자번호를 설정 하세요.");
			con_frm.sub_net_tel.focus();
			return;
		}

		if (con_frm.c_post_add.value == "") {
			alert("사업장 우편번호를 설정 하세요.");
			con_frm.c_post_add.focus();
			return;
		}

		if (con_frm.c_add.value == "") {
			alert("사업장 주소를 설정 하세요.");
			con_frm.c_add.focus();
			return;
		}

		if (con_frm.info_name.value == "") {
			alert("정보관리 책임자명을 설정 하세요.");
			con_frm.info_name.focus();
			return;
		}

		if (con_frm.info_email.value == "") {
			alert("정보책임자 E-mail을 설정 하세요");
			con_frm.info_email.focus();
			return;
		}

		if (con_frm.moo_bk.value == "") {
			alert("이체될 무통장 은행명을 설정 하세요");
			con_frm.moo_bk.focus();
			return;
		}

		if (con_frm.bk_number.value == "") {
			alert("은행계좌번호를 설정 하세요");
			con_frm.bk_number.focus();
			return;
		}

		if (con_frm.min_point.value == "") {
			alert("결제 최소 포인트를 설정 하세요");
			con_frm.min_point.focus();
			return;
		}

		if (con_frm.max_point.value == "") {
			alert("결제 최대 포인트를 설정 하세요");
			con_frm.max_point.focus();
			return;
		}

		if (con_frm.delivery_company.value == "") {
			alert("배송 업체명을 설정 하세요");
			con_frm.delivery_company.focus();
			return;
		}

		if (con_frm.delivery_price.value == "") {
			alert("배송비를 설정 하세요");
			con_frm.delivery_price.focus();
			return;
		}


		con_frm.submit();
	}
}

function confignono() {

	if (confirm("홈페이지 설정을 취소 하시겠습니까?")) {

		location.href = './admin_main.jsp';

	}


}