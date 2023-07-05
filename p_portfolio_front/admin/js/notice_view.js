if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

function notis_view_update() {
	if (confirm("공지를 수정 하시겠습니까?")) {
		ntl_frm.submit();
	}

}

function notis_view_del(nt_id) {

	if (confirm("공지를 삭제 하시겠습니까?")) {
		location.href = "noti_list_del2.do?nt_id=" + nt_id;
	}
}


	function notilistgo() {

		if (confirm("공지목록으로 돌아가시겠습니까? (수정한 내용은 저장되지 않습니다.)")){
			location.href = "notice_list.jsp";
		}
	}