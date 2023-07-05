
const join_back = () => {

	if (confirm("입력하신 내용은 모두 삭제 됩니다. 회원가입을 취소 하시겠습니까?")) {
		location.href = "./index.jsp";
	}

}

const join_event = (chk) => {
	if (chk == true) {

		document.querySelector("#event2").value = "Y";

	} else {
		document.querySelector("#event2").value = "N";
	}


}
const join_sms = (chk) => {
	if (chk == true) {

		document.querySelector("#sms2").value = "Y";

	} else {
		document.querySelector("#sms2").value = "N";
	}
}

function joingogo() {
	var join_mail = document.getElementById("join_mail").value;
	var join_mailtext = document.getElementById("join_mailtext");
	console.log("test");

	if (join_mail !== "") {
		var text = join_mailtext.value.split("@");

		var text2 = text[0] += "@" + join_mail;
		join_mailtext.value = text2;
	} else {
		join_mailtext.value = "";

	}
}

//주소 api
const addrs = () => {
	new daum.Postcode({
		oncomplete: function(data) {
			document.querySelector("#add1").value = data.zonecode;
			document.querySelector("#add2").value = data.address;
			console.log(data);
		}
	}).open();
}


function tel1() { }//문자열방지용
function tel2() { }


const join_gogo = () => {
	var addrall = document.querySelector("#add1").value
		+ document.querySelector("#add2").value
		+ document.querySelector("#add3").value;
	document.querySelector("#addrall").value = addrall;

	if (join_frm.m_id.value == "") {
		alert("아이디를 입력하세요.");
		return;
	}
	else if(idchh == false){
		alert("아이디 중복체크를 진행해주세요.");
		return;
	}
	

	if (join_frm.m_passwd.value == "") {
		alert("비밀번호를 입력하세요.");
		return;
	} else if (document.querySelector("#join_pass2").value == "") {
		alert("확인 비밀번호를 입력하세요.")
		return;

	} else if (join_frm.m_passwd.value !== document.querySelector("#join_pass2").value) {
		alert("입력하신 비밀번호와 확인 비밀번호가 일치하지 않습니다.")
		return;
	}

	if (join_frm.m_Ptel.value == "") {
		alert("휴대폰 번호를 입력하세요.")
		return;
	}
	if (join_frm.m_email.value == "") {
		alert("이메일을 입력하세요.");
		return;
	}


	if (document.querySelector("#add1").value == "") {
		alert("우편번호 검색을 진행해주세요.");
		return;
	} else if (document.querySelector("#add2").value == "") {
		alert("우편번호 검색을 진행해주세요.");
		return;
	} else if (document.querySelector("#add3").value == "") {
		alert("나머지 상세 주소를 입력하세요.");
		return;
	}

	if (confirm("입력하신 정보로 회원가입을 진행하시겠습니까?")) {
		join_frm.submit();

	}


}

var idchh = false;
const join_idchk = ()=>{
	 let m_id = document.querySelector("#m_id").value;
	// console.log(m_id);
	   var idck = new XMLHttpRequest();
        idck.onreadystatechange = function(){
            if(idck.readyState == XMLHttpRequest.DONE && idck.status == 200){
                var msg = idck.responseText;
                if(msg == "yes"){
                    alert("사용 가능한 아이디 입니다.");
                    join_frm.m_id.readOnly = true;
                    idchh = true;
              
                }else if(msg == "no"){
                    alert("사용하실 수 없는 아이디 입니다.");
                }else{
					console.log(msg);
                    console.log("join에 중복체크 에러남");
                }
            }
        }
        idck.open("POST","./member_idcheck.do",true);
        idck.setRequestHeader("content-type","application/x-www-form-urlencoded");
        idck.send("m_id=" + m_id);
}





