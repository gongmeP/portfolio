
var page = 0;
splajax(page);
function splajax(page) {

	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState === XMLHttpRequest.DONE) {
			if (html.status === 200) {
				data = JSON.parse(this.response);
				productgo(data);
			}
		}
	}
	html.open("POST", "./pd_api1.do", true);
	html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	html.send("keys=pd_knock4&page=" + page);

}

function splpagesu(page) {
	var lis = document.getElementById("ml_output");


	while (lis.firstChild) {
		lis.removeChild(lis.firstChild);
	}


	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState === XMLHttpRequest.DONE) {
			if (html.status === 200) {
				data = JSON.parse(this.response);
				productgo(data);
			}
		}
	}
	html.open("POST", "./pd_api1.do", true);
	html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	html.send("keys=pd_knock4&page=" + page);

}


function productgo(alldata, serch) {
	   var lis = document.getElementById("ml_output");

	if (alldata.datas == "") {
		document.getElementById("nomembers").style.display = "block";
		while (lis.firstChild) {
		lis.removeChild(lis.firstChild);
	}
	} else {
		document.getElementById("nomembers").style.display = "none";


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
			divs.setAttribute("onclick", "spl_sch(" + xx + ")");
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



	while (lis.firstChild) {
		lis.removeChild(lis.firstChild);
	}



		console.log(data);

		var lis = document.getElementById("ml_output");

		alldata.datas.forEach(function(a, b) {
			var inul = document.createElement("ul");
			inul.className = "spl_ul1 spl_ul1susu";

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

				if (a1 == "2") {

					var intext = document.createTextNode("");
					var inputs = document.createElement("img");
					inputs.className = "pro_imgs";
					inputs.setAttribute("id", a[a1]);
					inputs.setAttribute("src", a[a1]);
					inli.append(inputs);

				}

				if (a1 == "10") {

					var divs = document.createElement("div");
					divs.setAttribute("onclick", "divbtn(" + a[1] + ")");
					var divtext = document.createTextNode("수정");
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

function productdelete() {
	if (confirm("해당 상품 삭제시 데이터는 복구 되지않습니다. 삭제 하시겠습니까?")) {
		product_del.submit();

	}

}


//function divbtn0(m_id) {
//var popup = "./mem_update.do?m_id=" + m_id.defaultValue;
//var popupop = "width=550,height=400,scrollbars=yes,resizable=yes";
//window.open(popup, "PopupWindow", popupop);

//}



//검색 하는 부분
function spl_sch() {

		
		var frm = document.getElementById("spl_sch_frm");
		var frmdd = new FormData(frm);


		frmdd.append("page", page);

		var html = new XMLHttpRequest();
		html.onreadystatechange = function() {
			if (html.readyState === XMLHttpRequest.DONE) {
				if (html.status === 200) {
					data = JSON.parse(this.response);
					productgo(data, "검색이야!");
				}
			}
		}

		html.open("POST", "./pd_api1.do", true);
		html.send(frmdd);
	
}




function spl_checkall(mamachk) {
	var ckboxall_ea = document.getElementsByName("delcheck").length;
	var x = 0;
	while (x < ckboxall_ea) {
		document.getElementsByName("delcheck")[x].checked = mamachk;
		x++;
	}
}


function productingo() {
	location.href = "./shop_product_write.jsp";
}

function chdate(value) {
	const selid = document.querySelector("#selid");
	selid.setAttribute("name", value);
}



