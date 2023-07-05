


function idchk(){
	var idcall = "";
	var _en_su_id = /[a-zA-Z0-9]{5,15}/;
    if(joinform.m_id.value==""){
        alert("아이디를 입력하세요.");
        return;
    }else if (_en_su_id.test(joinform.m_id.value) == false) {
        alert("아이디는 최소5자, 최대 15자의 영문 및 숫자만 입력 가능합니다.");
        return;
    }
     else{
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                var msg = xhr.responseText;
                if(msg == "yes"){
                    alert("사용 가능한 아이디입니다.");
                    joinform.m_id.readOnly = true;
              
                }else if(msg == "no"){
                    alert("사용하실 수 없는 아이디입니다.");
                }else{
                    console.log("중복체크에서 에러남");
                }
            }
        }
        xhr.open("POST","./idchecks.do",true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("m_id=" + joinform.m_id.value);
    }
}

function joingo() {

	var _ckemails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	var _enhan = /[a-zA-zㄱ-하-ㅣ가-힣]/;
	var _enhansu = /[a-zA-zㄱ-하-ㅣ가-힣0-9]/;
	var _en_su_id = /[a-zA-Z0-9]{5,15}/;


	if (joinform.m_id.value == "") {
		alert("아이디를 입력하세요.");
		return;

	} else if (_en_su_id.test(joinform.m_id.value) == false) {
		alert("아이디는 최소5자, 최대 15자의 영문 및 숫자만 입력 가능합니다.");
		return;
	}


	if (joinform.m_passwd.value == "") {
		alert("패스워드를 입력해주세요.");
		return;
	} else if ((joinform.m_passwd.value).length < 5) {
		alert("패스워드는 최소 5자 이상 입력하세요.");
		return;
	} else if (document.getElementById("m_passwd2").value == "") {
		alert("동일한 패스워드를 입력해주세요.");
		return;
	} else if (joinform.m_passwd.value != document.getElementById("m_passwd2").value) {
		alert("패스워드가 다릅니다. 동일한 패스워드를 입력하세요.");
		return;
	}

	if (joinform.m_name.value == "") {
		alert("고객명을 입력하세요.");
		return;
	} else if (_enhan.test(joinform.m_name.value) == false) {
		alert("고객명은 한글,영어만 입력해주세요.");
		return;
	}


	if (joinform.m_email.value == "") {
		alert("이메일을 입력해주세요.")
		return;
	} else if (_ckemails.test(joinform.m_email.value) == false) {
		alert("이메일을 올바르게 입력해주세요.");
		return;
	}



	if (joinform.m_hp1.value == "" || joinform.m_hp2.value == "" || joinform.m_hp3.value == "") {
		alert("연락처를 모두 입력하세요.");
		return;
	}

	if (joinform.buser.value == "") {
		alert("담당자 부서를 선택하세요.");
		return;
	}

	if (joinform.postion.value == "") {
		alert("담당자 직책을 선택하세요.");
		return;
	}
	
	

	joinform.submit();

}

function joinnono(){
	if(confirm("등록을 취소하시겠습니까?")){
		history.go(-1);
	}else{
		
	}
}