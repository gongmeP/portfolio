const agreeText = function(url){
	const xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.send();
	return xhr.response;	
}
document.getElementById("agree1").innerText = agreeText("./agree/agree_info1.txt");
document.getElementById("agree2").innerText = agreeText("./agree/agree_info2.txt");

   var idcall = "";
function idchk(){
   var _en_su_id = /[a-zA-Z0-9]{5,15}/;
    if(f.m_id.value==""){
        alert("아이디를 입력하세요.");
        return;
    }else if (_en_su_id.test(f.m_id.value) == false) {
        alert("아이디는 최소5자, 최대 15자의 영문 및 숫자만 입력 가능합니다.");
        return;
    }
     else{ //아이디 중복체크
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
                var msg = xhr.responseText;
                if(msg == "yes"){
                    alert("사용 가능한 아이디입니다.");
                    f.m_id.readOnly = true;
                    idcall="ok";
              
                }else if(msg == "no"){
                    alert("사용하실 수 없는 아이디입니다.");
                }else{
                    console.log("중복체크에서 에러남");
                }
            }
        }
        xhr.open("POST","./idcheck.do",true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("m_id=" + f.m_id.value);
    }
}

var emailck = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi;
var telck = /^0[0-9]{10}$/;


function gogo(){
	var che1 = document.getElementsByClassName("che1")[0];
	var che2 = document.getElementsByClassName("che1")[1];
	if(che1.checked==false || che2.checked==false){
		alert("이용약관을 모두 체크해주세요");
		return;
	}
	else if(idcall==""){
		alert("아이디를 중복체크해주세요");
	}
	else if(f.m_passwd.value==""){
		alert("패스워드를 입력해주세요");
	}
	else if((f.m_passwd.value).length <9) {
		alert("패스워드는 최소 9자 이상 입력하세요");
	}
	else if (document.getElementById("m_passwd2").value == "") {
      alert("동일한 패스워드를 입력해주세요.");
	}
	else if (f.m_passwd.value != document.getElementById("m_passwd2").value) {
     alert("패스워드가 다릅니다. 동일한 패스워드를 입력하세요.");
    }
    else if(f.m_name.value==""){
		alert("고객명을 입력해주세요");
	}
	else if(f.m_tel.value==""){
		alert("연락처를 입력해주세요");
	}
	else if(!telck.test(f.m_tel.value)){
		alert("연락처형식이 올바르지 않습니다.");
	}
	else if(f.m_email.value==""){
		alert("이메일을 입력해주세요");
	}
    else if(!emailck.test(f.m_email.value)){
		alert("이메일형식이 올바르지 않습니다.")
	}
	else{
	f.submit();
	}
}