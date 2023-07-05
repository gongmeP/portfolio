agree_text();

function agree_text() {
  
    var opentext = new XMLHttpRequest();
    opentext.open("GET", "./agreement/agree1.txt", false);
    opentext.send();
    document.getElementById("agtext1").innerText = opentext.response;
    var opentext = new XMLHttpRequest();
    opentext.open("GET", "./agreement/agree2.txt", false);
    opentext.send();
    document.getElementById("agtext2").innerText = opentext.response;
};

function agg_allck(allck){
	
	document.getElementById("ag_ck1").checked=allck;
	document.getElementById("ag_ck2").checked=allck;
}

function agg_btn1(){
	if(document.getElementById("ag_ck1").checked==false || document.getElementById("ag_ck2").checked==false){
		
	alert("이용약관 및 개인정보 수집에 동의하셔야만 회원가입이 가능합니다.");
	return;
	}
	
	location.href="./join.jsp";
}