function login() {

	if (frm.m_id.value == "") {
		alert('아이디를 입력해주세요');
		return false;
	}
	else if (frm.m_passwd.value == "") {
		alert('패스워드를 입력해주세요.');
		return false;
	}
	else if (frm.m_passwd.value.length < 9) {
		alert('패스워드는 최소 9자 이상 입력해야 합니다.');
		return false;
	}

	else {

		return;
	}
}


function joingo() {
	location.href = './join.html';
	var a = Number(a)
}
