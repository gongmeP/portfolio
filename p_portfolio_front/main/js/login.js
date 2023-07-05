
// 로그인쪽
const main_logingo = (e) =>{
    e.preventDefault();
    if(login_frm.m_id.value == ""){
    alert("아이디 및 비밀번호를 모두 입력해 주세요");
     return;
    }

    if(login_frm.m_passwd.value == ""){
        alert("아이디 및 비밀번호를 모두 입력해 주세요");
        return;
    }

    login_frm.submit();
}


//비로긴쪽
const main_no_logingo = (e) =>{
    e.preventDefault();
    if(nologin_frm.no_m_name.value == ""){
    alert("주문자명을 입력하세요");
     return;
    }

    if(nologin_frm.no_m_number.value == ""){
        alert("주문번호를 입력하세요");
        return;
    }

    nologin_frm.submit();
}






const member_join = ()=>{
location.href="./member_join.jsp";
}


const id_search = ()=>{
    alert("서비스 준비중 입니다.");
    // location.href="./id_search.jsp";
    }

    
const pw_search = ()=>{
    alert("서비스 준비중 입니다.");
    // location.href="./pw_search.jsp";
    }
    
