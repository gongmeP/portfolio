
// 로그인쪽
const main_logingo = (e) => {
	e.preventDefault();
	if (login_frm.m_id.value == "") {
		alert("아이디 및 비밀번호를 모두 입력해 주세요");
		return;
	}

	if (login_frm.m_passwd.value == "") {
		alert("아이디 및 비밀번호를 모두 입력해 주세요");
		return;
	}


	if (document.querySelector("#loginchek").checked == false) {
		localStorage.setItem("m_id", null);
	} else if (document.querySelector("#loginchek").checked == true) {
		localStorage.setItem("m_id", login_frm.m_id.value);
	}
	

	login_frm.submit();
}


//비로긴쪽
const main_no_logingo = (e) => {
	e.preventDefault();
	if (nologin_frm.no_m_name.value == "") {
		alert("주문자명을 입력하세요");
		return;
	}

	if (nologin_frm.no_m_number.value == "") {
		alert("주문번호를 입력하세요");
		return;
	}

	nologin_frm.submit();
}



var saveid = localStorage.getItem("m_id");
if (saveid != "null") {
	login_frm.m_id.value = saveid;
	document.getElementById("loginchek").checked = true;
};


function idsaves(saves) {

	if (saves == false) {
		localStorage.setItem("m_id", null);
	} else if (saves == true) {
		localStorage.setItem("m_id", login_frm.m_id.value);
	}

};



const member_join = () => {
	location.href = "./agree.jsp";
}


const id_search = () => {
	alert("서비스 준비중 입니다.");
	// location.href="./id_search.jsp";
}


const pw_search = () => {
	alert("서비스 준비중 입니다.");
	// location.href="./pw_search.jsp";
}


