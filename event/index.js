function corp(no) {
    // 공정거래위원회 api 서버와 동기화함
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=" + no, "", "width=500 height=500");

}

function reocn() {
    location.href = "http://www.cgv.co.kr";

}

function event_() {
    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var t_num = document.getElementById("t_num");
    var chks = document.getElementById("chks");

    if (user.value == "") {
        alert("이름을 입력해주세요.");
    } else if (isNaN(user.value) == false) {
        alert("이름을 문자열로 입력해주세요.");
    } else {
        if (email.value == "") {
            alert("이메일을 입력해주세요.");
        } else {
            if (tel.value == "") {
                alert("휴대폰 번호를 입력해주세요.");
            } else if (isNaN(tel.value) == true) {
                alert("휴대폰 번호를 숫자만 입력해주세요.");
            } else if (tel.value.length < 10) {
                alert("휴대폰 번호는 최소 10자리 입니다.");
            } else {
                if (t_num.value == "") {
                    alert("티켓 번호를 입력해주세요.");

                } else if (isNaN(t_num.value) == true) {
                    alert("티켓 번호를 숫자만 입력해주세요.");

                } else if (t_num.value.length != 8) {
                    alert("티켓 번호는 8자리 입니다.");

                } else {
                    if (chks.checked == false) {
                        alert("이용약관에 동의해주세요.");

                    } else {
                        alert("이벤트 참여가 완료되었습니다.");
                        main_form.submit();
                    }
                }
            }
        }
    }


}