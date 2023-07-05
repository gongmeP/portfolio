var code = "";
var length = 6;

while (code.length < length) {
	var randomcode = Math.floor(Math.random() * 10);
	var susu = code.includes(randomcode);

	if (!susu) {
		code += randomcode;
	}
}

document.getElementById("pd_code").value = code;



function pd_pri2() {
	let pd_pri = document.getElementById("pd_pri").value;
	let pd_rate = document.getElementById("pd_rate").value;
	let sum = pd_pri - (pd_pri * (pd_rate / 100));
	if (pd_rate == "0") {
		document.getElementById("pd_s_pri").value = "0";
	} else {
		var totalsum = Math.round(sum).toString().slice(0, -1) + "0";

		document.getElementById("pd_s_pri").value = totalsum;
	}

}

function pd_rate2() {
	let pd_pri = document.getElementById("pd_pri").value;
	let pd_rate = document.getElementById("pd_rate").value;
	let sum = pd_pri - (pd_pri * (pd_rate / 100));
	if (pd_rate == "0") {
		document.getElementById("pd_s_pri").value = "0";
	} else {
		var totalsum = Math.round(sum).toString().slice(0, -1) + "0";

		document.getElementById("pd_s_pri").value = totalsum;
	}

}



function product_insertgo() {

	if (confirm("상품을 등록 하시겠습니까?")) {

	} else {
		return;
	}
	var f1 = document.querySelector("#pd_img1").files.length == 0;

	if (codech == false) {
		alert("상품코드 중복확인을 해주세요")
		return;
	}

	if (f1 == true) {
		alert('첫번째 상품 대표 이미지는 최소한 1개 이상의 파일을 첨부해야 합니다.');
		return;
	}
	if (pd_frm.pd_text1.value == "") {
		alert('상품명 및 상품 부가 설명을 입력해주세요');
		return;
	}
	if (pd_frm.pd_pri.value == "") {
		alert('판매하실 가격을 입력해주세요');
		return;
	}
	if (pd_frm.pd_rate.value == "") {
		alert('할인율을 입력하세요. (0% 일 경우 0으로 입력해주세요)');
		return;
	}

	if (pd_frm.pd_rate.value == "") {
		alert('할인율을 입력하세요. (0% 일 경우 0으로 입력해주세요)');
		return;
	}

	pd_frm.submit();
}

let codech = false;
const code_check = () => {
	let code = document.querySelector("#pd_code").value;

	var codeck = new XMLHttpRequest();
	codeck.onreadystatechange = function() {
		if (codeck.readyState == XMLHttpRequest.DONE && codeck.status == 200) {
			var msg = codeck.responseText;
			if (msg == "yes") {
				alert("사용 가능한 상품코드 입니다.");
				pd_frm.pd_code.readOnly = true;
				codech = true;

			} else if (msg == "no") {
				alert("사용하실 수 없는 상품코드 입니다.");
			} else {
				console.log("코드중복체크 에러남");
			}
		}
	}
	codeck.open("POST", "./pd_codeck.do", true);
	codeck.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	codeck.send("code=" + code);


}

const product_listssgo =() => {
	location.href="./shop_product_list.jsp";
}









