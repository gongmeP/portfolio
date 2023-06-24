


function a() {
	document.getElementById("a").style.backgroundColor = "black";
	document.getElementById("a").style.color = "white";

	document.getElementById("b").style.backgroundColor = "white";
	document.getElementById("b").style.color = "black";

	document.getElementById("c").style.backgroundColor = "white";
	document.getElementById("c").style.color = "black";

	document.getElementsByClassName("lilast")[0].style.display = "block";
	document.getElementsByClassName("lilast")[0].style.display = "flex";
	fmss.pay.value = "M"

}

function b() {
	document.getElementById("a").style.backgroundColor = "white";
	document.getElementById("a").style.color = "black";

	document.getElementById("b").style.backgroundColor = "black";
	document.getElementById("b").style.color = "white";

	document.getElementById("c").style.backgroundColor = "white";
	document.getElementById("c").style.color = "black";

	document.getElementsByClassName("lilast")[0].style.display = "none";
	
	fmss.pay.value = "S"
}
function c() {
	document.getElementById("a").style.backgroundColor = "white";
	document.getElementById("a").style.color = "black";

	document.getElementById("b").style.backgroundColor = "white";
	document.getElementById("b").style.color = "black";

	document.getElementById("c").style.backgroundColor = "black";
	document.getElementById("c").style.color = "white";

	document.getElementsByClassName("lilast")[0].style.display = "none";
	fmss.pay.value = "G"
}


function paygo() {
	document.getElementsByClassName("btnlis")[0].style.display = "none";
	document.getElementsByClassName("lilast")[0].style.display = "none";
	document.getElementsByClassName("lastbtn")[0].style.display = "none";
	
	document.getElementsByClassName("lbt")[0].style.display = "block";
	document.getElementsByClassName("lbt")[1].style.display = "block";
	document.getElementsByClassName("lastbtnin")[0].style.display = "flex";
	

	if ((document.getElementById("a").style.backgroundColor == "black")) {
		document.getElementById("a1").style.display = "block";
		document.getElementById("a1").style.display = "flex";
		document.getElementsByClassName("aa1")[0].style.backgroundColor = "black";
		document.getElementsByClassName("aa1")[0].style.color = "white";
		
	}
	if (document.getElementById("b").style.backgroundColor == "black") {
		document.getElementById("a2").style.display = "block";
		document.getElementById("a2").style.display = "flex";
		document.getElementsByClassName("aa2")[0].style.backgroundColor = "black";
		document.getElementsByClassName("aa2")[0].style.color = "white";
		
	}  if (document.getElementById("c").style.backgroundColor == "black") {
		document.getElementById("a3").style.display = "block";
		document.getElementById("a3").style.display = "flex";
		document.getElementsByClassName("aa3")[0].style.backgroundColor = "black";
		document.getElementsByClassName("aa3")[0].style.color = "white";
	}

}




function paygogo(){
	fmss.action = "./update.do";
	fmss.submit();
}

function del(){
	fmss.action = "./deleteok.do";
	fmss.submit();
}