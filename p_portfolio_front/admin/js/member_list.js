var page=0;
memberajax();
function memberajax(){
	
var html = new XMLHttpRequest();
html.onreadystatechange = function() {
	if (html.readyState === XMLHttpRequest.DONE) {
		if (html.status === 200) {
			data = JSON.parse(this.response);
			membersgo(data);
		}
	}
}
html.open("POST", "./memlist1api.do", true);
html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
html.send("keys=memlist_knock3&page=" + page);
}

function splpagesu(page) {
	console.log(page);
	var lis = document.getElementById("ml_output");


	while (lis.firstChild) {
		lis.removeChild(lis.firstChild);
	}


	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState === XMLHttpRequest.DONE) {
			if (html.status === 200) {
				data = JSON.parse(this.response);
				membersgo(data);
			}
		}
	}
	html.open("POST", "./memlist1api.do", true);
	html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	html.send("keys=memlist_knock3&page=" + page);

}


function membersgo(alldata, serch) {

	var lis = document.getElementById("ml_output");
	if (alldata.datas == "") {
		document.getElementById("nomembers").style.display = "block";
		while (lis.firstChild) {
		lis.removeChild(lis.firstChild);
	}
	} else {
		document.getElementById("nomembers").style.display = "none";


      
//검색 들어오는곳 
		if (serch == "검색이야!") {
			
		var pageSize = 10;
		var totalpage = data.serchpage;
		var tototalpage = Math.ceil(totalpage / pageSize);
		console.log(tototalpage);
		let x = 0;
		let pagesu = document.querySelector("#pagesusu");
		pagesu.innerHTML = "";
		while (x < tototalpage) {
			var xx = 10 * x;
			var divs = document.createElement("div");
			var divtext = document.createTextNode(x + 1);

			divs.className = "pagediv";
			divs.setAttribute("onclick", "mm_sch(" + xx + ")");
			divs.append(divtext);
			pagesu.append(divs);

			x++;
		}

	} else {

		var pageSize = 10;
		var totalpage = data.totalpage;
		var tototalpage = Math.ceil(totalpage / pageSize);
		console.log(tototalpage);
		let x = 0;
		let pagesu = document.querySelector("#pagesusu");
		pagesu.innerHTML = "";
		while (x < tototalpage) {
			var xx = 10 * x;
			var divs = document.createElement("div");
			var divtext = document.createTextNode(x + 1);

			divs.className = "pagediv";
			divs.setAttribute("onclick", "splpagesu(" + xx + ")");
			divs.append(divtext);
			pagesu.append(divs);

			x++;
		}

	}
	

	
	// 기존 데이터 삭제
	while (lis.firstChild) {
		lis.removeChild(lis.firstChild);
	}



		console.log(data);

		var lis = document.getElementById("ml_output");
		
		
		
		alldata.datas.forEach(function(a, b) {
			var inul = document.createElement("ul");
			inul.className = "ml_ul1 ml_ul1susu";

			Object.keys(a).forEach(function(a1, b1) {
				var inli = document.createElement("li");
				if (a[a1] != null) {
					var intext = document.createTextNode(a[a1]);

				} else {
					var intext = document.createTextNode("미입력");
				}


				if (a1 == "0") {
					a1 = Number(a1) + 1
					var intext = document.createTextNode("");
					var inputs = document.createElement("input");
					inputs.className = "checkbin";
					inputs.setAttribute("id", a[a1]);
					inputs.setAttribute("name", "delcheck");
					inputs.setAttribute("value", a[a1]);
					inputs.type = "checkbox";
					inli.append(inputs);

				}


				if (a1 == "11") {
					var x = 0;
					
						var divs = document.createElement("div");
						divs.setAttribute("onclick", "divbtn" + x + "(" + a[1] + ")");
						if (x == 0) {
							var divtext = document.createTextNode("수정");
						} 
						divs.append(divtext);
						inli.append(divs);
						
				}
				else {

					inli.append(intext);
				}
				inul.append(inli);
			});
			lis.appendChild(inul);

		});
	}

}

function memberdelete() {
	if (confirm("선택한 회원을 삭제하시겠습니까?")) {
		delfrm.submit();

	}

}


function divbtn0(m_id) {

	var popup = "./mem_update.do?m_id=" + m_id.defaultValue;
	var popupop = "width=550,height=400,scrollbars=yes,resizable=yes";
	window.open(popup, "PopupWindow", popupop);

}




function mm_sch() {
	if(document.querySelector("#selid").value==""){
	alert("검색할 회원정보를 입력하세요");
	memberajax();
		
	}else{
		
	var frm = document.getElementById("mm_sch_frm");
	var frmdd = new FormData(frm);


     frmdd.append("page", page);
     
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState === XMLHttpRequest.DONE) {
			if (html.status === 200) {
				data = JSON.parse(this.response);
				membersgo(data,"검색이야!");
			}
		}
	}

	html.open("POST", "./memlist1api.do", true);
	html.send(frmdd);

	}

}

function chdate(value) {

	const selid = document.querySelector("#selid");
	selid.setAttribute("name", value);


}


function mm_checkall(mamachk) {
	//console.log(mamachk);
	var ckboxall_ea = document.getElementsByName("delcheck").length;

	// console.log(ckboxall_ea);

	var x = 0;
	while (x < ckboxall_ea) {
		document.getElementsByName("delcheck")[x].checked = mamachk;

		x++;
	}
}

