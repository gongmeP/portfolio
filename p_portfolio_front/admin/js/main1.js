

function mainlogin(e){
	e.preventDefault();
	var _enhansu = /[a-zA-zㄱ-하-ㅣ가-힣0-9]/;

	
	if(fm.m_id.value == ""){
		alert("아이디를 입력하세요");
		return;
	}else if(_enhansu.test(fm.m_id.value)==false){
		alert("특수문자는 입력 할 수 없습니다.");
		return;
	}
	
	if(fm.m_passwd.value == ""){
		alert("비밀번호를 입력해주세요.");
		return;
	}
	
	
	fm.submit();
	
}

function addgogo(){
	
	location.href="./add_master.html";
}