var uri = window.location.search;
var checkbtn = ""; //아이디 중복체크 유/무
if (uri == "") {
    alert("올바른 접근이 아닙니다.");
    history.go(-1);
} else {
    var agree2 = uri.split("&m_agree2=");
    join.m_agree2.value = agree2[1];
    var agree1 = agree2[0].split("?m_agree1=");
    join.m_agree1.value = agree1[1];
}
//아이디 중복체크
function memberid_ck() {
        var sign;
        function ajax() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            };
        };
        function postdata() {
            if (sign.readyState == XMLHttpRequest.DONE && sign.status == 200) {
                var call = this.response;
                if (call == "ok") {
                    alert("사용가능한 아이디 입니다.");
                    join.m_userid.readOnly = true;
                    checkbtn = "ok";
                } else if (call == "cancel") {
                    alert("해당 아이디는 사용하실 수 없습니다.");
                    join.m_userid.value = "";
                } else {
                    console.log("통신오류 발생!!");
                };
            };
        };
        sign = ajax();
        sign.onreadystatechange = postdata;
        sign.open("POST", "./id_check.php", true);
        sign.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        sign.send("m_userid=" + join.m_userid.value);
    };
//이메일 선택부분
function mail_input(m) {
    //indexOf : -1 해당 없을 경우 그 외에 숫자는 해당 문자가 있음
    var m_usermail = join.m_usermail.value;
    var indexof = m_usermail.indexOf("@");
    var mselect = document.getElementById("mselect");
    if (m_usermail == "" || m == "") {
        join.m_usermail.focus();
        mselect.value = "";
        join.m_usermail.value = "";
    } else {
        if (indexof == -1) {
            join.m_usermail.value = m_usermail + "@" + mselect.value;
        } else {
            var sp = m_usermail.split("@")[0];
            join.m_usermail.value = sp + "@" + mselect.value;
        };
    };
};
function nomember() {
    alert("회원가입을 취소 하셨습니다.");
    location.href = "http://pjk5002.dothome.co.kr/portfolio/ocn/";
};
var _en_su_id = /[a-zA-Z0-9]{5,15}/;
var _ckemails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var _enhan = /[a-zA-zㄱ-하-ㅣ가-힣]/;
var _enhansu = /[a-zA-zㄱ-하-ㅣ가-힣0-9]/;
var _tel = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

//회원가입 버튼
function member_fn() {
    var checkpw = document.getElementById("checkpw");
    if (join.m_userid.value == "") {
        alert("아이디를 입력하세요");
        focussHS(join.m_userid);
    } else if (_en_su_id.test(join.m_userid.value) == false) {
        alert("아이디는 최소5자, 최대 15자의 영문 및 숫자만 입력 가능합니다.");
        focussHS(join.m_userid);
    } else if (checkbtn == "") {
        alert("아이디 중복체크를 하셔야 합니다.");
    } else {
        if (join.m_userpw.value == "") {
            alert("패스워드를 입력해주세요.");
            focussHS(join.m_userpw);
        } else if ((join.m_userpw.value).length < 6) {
            alert("패스워드는 최소 6자리 이상 입력해주세요.");
            focussHS(join.m_userpw);
        } else if ((checkpw.value).length < 6) {
            alert("동일한 패스워드 최소 6자리 이상 입력해주세요.");
            focussHS(checkpw);
        } else if (join.m_userpw.value != checkpw.value) {
            alert("동일한 패스워드를 입력해주세요.");
            focussHS(checkpw);
        } else {
            if (join.m_usernm.value == "") {
                alert("고객명을 입력해주세요.");
                focussHS(join.m_usernm);
            } else if (_enhan.test(join.m_usernm.value) == false) {
                alert("고객명은 한글 및 영문만 입력 가능합니다.");
                focussHS(join.m_usernm);
            } else {
                if (join.m_usermail.value == "") {
                    alert("이메일을 입력해주세요.")
                    focussHS(join.m_usermail);
                } else if (_ckemails.test(join.m_usermail.value) == false) {
                    alert("이메일을 형식에 맞게 입력해주세요.");
                    focussHS(join.m_usermail);
                } else {
                    if (join.m_usertel.value == "") {
                        alert("연락처를 입력해주세요.");
                        focussHS(join.m_usertel);
                    } else if (_tel.test(join.m_usertel.value) == false) {
                        alert("연락처를 '-' 제외하고 정확히 입력해주세요");
                        focussHS(join.m_usertel);
                    } else {
                        if (join.m_post.value == "" || join.m_road.value == "") {
                            alert("우편번호 및 주소를 검색하여 등록해주세요.")
                           
                        } else if (join.m_addr.value == "") {
                            alert("지번 및 상세 주소를 입력해주세요.")
                            focussHS(join.m_addr);
                        } else {
                            join.submit();
                        };

                    };
                };
            };
        };

    };
    
   
};

function focussHS(x) {
    x.focus();
};

$(() => {
    $("#addpost").postcodifyPopUp();
});