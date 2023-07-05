function notis_insertgogo() {

	var YN = document.getElementById("nt_adm").checked;
	console.log(YN)
	if (YN == true) {

		document.getElementById("nt_adm2").value = "Y";

	}

	if (ntl_frm.nt_title.value == "") {
		alert("공지사항 제목을 입력하세요.");
		return;
	}
	if (ntl_frm.nt_name.value == "") {
		alert("글쓴이를 입력하세요.");
		return;
	}
	if (CKEDITOR.instances.ntw_texts.getData().trim() === "") {
		alert("공지 내용을 입력하세요.");
		return;
	}

	ntl_frm.submit();

}

function notis_listgogo() {


	location.href = "./notice_list.jsp";

}