

function bannerlink1(){
	if (confirm("배너를 변경하시겠습니까?")) {
	setup_frm1.submit();
	}
}


function bannerlink2(){
	
	if(document.getElementById("popup_enabled2").checked==true){
		document.getElementById("popup_enabled1").value="Y";
	}
	
	if (confirm("팝업창을 변경하시겠습니까?")) {
	setup_frm2.submit();
	}
}


function bannerlink3(){
	if (confirm("AD 배너를 변경하시겠습니까?")) {
	setup_frm3.submit();
	}
}

