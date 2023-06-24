$(()=>{
    $("#jox").click(function(){
       
        $(".jj").css({
            "display":"none" 
        })
    

    $(".bkscreen").css({
        "opacity": "0",
        "display":"none"
        });
    })
});



var Rmcall = "";
var _en_su_id = /[a-zA-Z0-9]{5,15}/;
var _ckemails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var _enhan = /[a-zA-zㄱ-하-ㅣ가-힣]/;
var _enhansu = /[a-zA-zㄱ-하-ㅣ가-힣0-9]/;
var _tel = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

const memberid_ck = () =>{
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
                Rmcall = this.response;
                if(Rmcall == "idok"){
                    alert("사용 가능한 아이디입니다.");
                    joinform.m_id.readOnly = true;
              
                }else if(Rmcall == "idno"){
                    alert("사용하실 수 없는 아이디입니다.");
                }else{
                    console.log("통신오류-중복체크");
                }
            }
        }
        xhr.open("POST","./id_search.php",true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send("m_id=" + joinform.m_id.value);
    }
}


function sesc(){
    var no = 6;
    var sesmain = document.getElementById("sesmain");
    var x = 0;
    var code = "";
    while(x<no){
        var rd = 0;
        rd = Math.floor(Math.random() * 10);
        code += rd;
        x++;
    }
    console.log(code);
    document.getElementById("codes123").value = code;
  
    
    setTimeout(times, 1000);
}
var clearTimes;
var tiemx = 10;

function times(){
var codetime = document.getElementById("codetime");
// console.log(tiemx);
tiemx--;

codetime.innerText = "("+(tiemx+1)+")";
if (tiemx === -1) {
    clearTimeout(clearTimes);
    sesc();
    tiemx = 10;
    return;
  }
  setTimeout(times, 1000);
}

function joina(){

    if(joinform.agree1.checked==false || joinform.agree2.checked==false || joinform.agree3.checked==false){
        alert("전체 약관에 동의 해주세요.");
        return;
    }

    if(joinform.m_id.value==""){
        alert("아이디를 입력하세요.");
        return;
        
    }else if (_en_su_id.test(joinform.m_id.value) == false) {
        alert("아이디는 최소5자, 최대 15자의 영문 및 숫자만 입력 가능합니다.");
        return;
    } else if (Rmcall == "") {
        alert("아이디 중복체크를 하셔야 합니다.");
        return;
    } 
    
    if(joinform.m_name.value == ""){
        alert("고객명을 입력하세요.");
        return;
    }else if(_enhan.test(joinform.m_name.value) == false){
        alert("고객명은 한글,영어만 입력해주세요.");
        return;
    }
    

    if(joinform.m_passwd.value == ""){
        alert("패스워드를 입력해주세요.");
        return;
    } else if ((joinform.m_passwd.value).length < 5){
        alert("패스워드는 최소 5자 이상 입력하세요.");
        return;
    } else if (document.getElementById("m_passwd2").value=="") {
        alert("동일한 패스워드를 입력해주세요.");
        return;
    } else if (joinform.m_passwd.value != document.getElementById("m_passwd2").value) {
        alert("패스워드가 다릅니다. 동일한 패스워드를 입력하세요.");
        return;
    } 


    if(joinform.m_hp.value == ""){
       alert("연락처를 입력하세요.");
       return;
    }else if(_tel.test(joinform.m_hp.value) == false ){
        alert("연락처는 '-' 미포함 하여 정확하게 입력해주세요.");
        return;
    }


    if (joinform.m_email.value == "") {
        alert("이메일을 입력해주세요.")
        return;
    } else if (_ckemails.test(joinform.m_email.value) == false) {
        alert("이메일을 형식에 맞게 입력해주세요.");
        return;
    } 

    

    if (joinform.m_email.value == "") {
        alert("이메일을 입력해주세요.")
        return;
    } else if (_ckemails.test(joinform.m_email.value) == false) {
        alert("이메일을 형식에 맞게 입력해주세요.");
        return;
    } 

    if(document.getElementById("ses").value == ""){
        alert("보안코드를 6자리를 입력하세요.");
    }else if(document.getElementById("ses").value != document.getElementById("codes123").value){
        alert("보안코드가 틀렸습니다.");
    }




    joinform.submit();
  
}



function allck(onoff){


var joincheck = document.getElementsByClassName("joincheck");
var chea = joincheck.length;
var x=0;



    while(x < chea){
        joincheck[x].checked = onoff;

        
        x++;
    }


}

function focussHS(x) {
    x.focus();
    
};

