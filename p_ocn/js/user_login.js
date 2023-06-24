var _en_su_id2 = /[a-zA-Z0-9]{5,15}/;

function idsaves(saves) {
    console.log(saves);
    if (saves == false) {
        localStorage.setItem("loginid", null);
    };

};

function loging() {
    if (user_logins.user_id.value == "") {
        alert("아이디를 입력하세요")
         focussHS(join.user_id);
        return false;
    } else if (_en_su_id2.test(user_logins.user_id.value) == false) {
        alert("아이디는 최소5자, 최대 15자의 영문 및 숫자만 입력 가능합니다.");
        focussHS(join.user_id);
        return false;
    } else {
        if (user_logins.user_pw.value == "") {
            alert("패스워드를 입력해주세요.");
            focussHS(join.user_pw);
            return false;
        } else if ((user_logins.user_pw.value).length < 6) {
            alert("패스워드는 최소 6자리 이상 입력해주세요.");
            focussHS(join.user_pw);
            return false;
        } else {
            if (document.getElementById("loginchek").checked == true) {
                localStorage.setItem("loginid", user_logins.user_id.value);
                return;
            };
        };
    };
};
var saveid = localStorage.getItem("loginid");
if (saveid != "null") {
    user_logins.user_id.value = saveid;
    document.getElementById("loginchek").checked = true;
};

function focussHS(x) {
    x.focus();
};