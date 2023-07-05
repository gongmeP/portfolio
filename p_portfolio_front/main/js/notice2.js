
var page = 0;
var pagesusu = 1;
var totalpage = 0;

function pagego(x) {
	var pageSize = 10;

	var tototalpage = Math.ceil(totalpage / pageSize);

	console.log(tototalpage);
	if (x == 1) {
		page = 0;
		pagesusu = 1;
	} else if (x == 2) {
		page -= 10;
		pagesusu -= 1;
	} else if (x == 3) {
		page += 10;
		pagesusu += 1;
	} else if (x == 4) {
		page = (tototalpage - 1) * 10;
		pagesusu = tototalpage;
	}

	//console.log(pagesusu);
	//console.log(page);

	if (pagesusu > tototalpage) {
		alert("마지막 페이지 입니다.");
		page = (tototalpage - 1) * 10
		pagesusu = tototalpage;
		return;
	}
	else if (pagesusu <= 0) {
		alert("현재 첫 페이지 입니다.");
		page = 0;
		pagesusu = 1;
		return;
	} else {


		var ajaxbyedd = document.getElementById("notice_list_main");
		ajaxbyedd.innerHTML = "";


		var pagesoo = document.getElementById("pagesoo");
		pagesoo.innerHTML = "" + pagesusu + "";





		var frm = document.getElementById("noti_sch_frm");
		if (frm !== "") {

			var frmdd = new FormData(frm);


			frmdd.append("page", page);
			frmdd.append("pageSize", pageSize);
			frmdd.append("notice", "notice");

			serch = "검색이야!"
			var html = new XMLHttpRequest();
			html.onreadystatechange = function() {
				if (html.readyState === XMLHttpRequest.DONE) {
					if (html.status === 200) {
						data = JSON.parse(this.response);
						notisgo(data, serch);

					}
				}
			}

			html.open("POST", "./admin/notis_api1.do", true);
			html.send(frmdd);

		} else {

			var html = new XMLHttpRequest();
			html.onreadystatechange = function() {
				if (html.readyState === XMLHttpRequest.DONE) {
					if (html.status === 200) {
						var data = JSON.parse(html.responseText);
						notisgo(data);
					}
				}
			}
			html.open("POST", "./admin/notis_api1.do", true);
			html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			html.send("keys=notis_api1_ok&page=" + page + "&pageSize=" + pageSize + "&notice=notice");
		}

	}





}



noticeajax();
function noticeajax(x) {
	
		var pagesoo = document.getElementById("pagesoo");
		pagesoo.innerHTML = "" + pagesusu + "";
	serch = "";
	var page = 0;
	var pageSize = 10;
	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState === XMLHttpRequest.DONE) {
			if (html.status === 200) {
				data = JSON.parse(this.response);
				//setTimeout(notisgo, 500, data)
				notisgo(data);
			}
		}
	}
	html.open("POST", "./admin/notis_api1.do", true);
	html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	html.send("keys=notis_api1_ok&page=" + page + "&pageSize=" + pageSize + "&notice=notice");

}


function notisgo(data, serch) {
	console.log(data);
	if (data == "") {
		document.getElementById("nogong_gi").style.display = "block";
	} else {

		totalpage = data.totalpage;
		// ~~ 토탈 페이지 부른거 여기다 여기 !!!!!!!!!!!!!!!!!!!!!
		//게시판 숫자 찍을거
		var totalnumber = totalpage;
		var mainul = document.getElementById("notice_list_main");
		mainul.innerHTML = "";

		if (serch == "검색이야!") {
				var pagesoo = document.getElementById("pagesoo");
		pagesoo.innerHTML = "" + pagesusu + "";

			data.datas.forEach(function(a, b) {
				var inul = document.createElement("ul");
				inul.className = "noti_ul1";
				Object.keys(a).forEach(function(a1, b1) {
					var inli = document.createElement("li");
					var litext = document.createTextNode(a[a1]);
					if (a1 == "0") {
						var litext = document.createTextNode((totalnumber -= 1) - (page - 1));

					}
					if (a1 == "1") {
						inli.className = "cucucuser";
						inli.setAttribute("onclick", "notiview(" + a[1] + ")");
					}
					inli.append(litext);
					inul.append(inli);
				});
				mainul.append(inul);
			});
		} else {
			serch = "";
			data.datas.forEach(function(a, b) {
				var inul = document.createElement("ul");
				inul.className = "noti_ul1";
				Object.keys(a).forEach(function(a1, b1) {
					var inli = document.createElement("li");
					var litext = document.createTextNode(a[a1]);
					if (a1 == "0") {
						var litext = document.createTextNode((totalnumber -= 1) - (page - 1));
					}
					if (a1 == "1") {
						inli.className = "cucucuser";
						inli.setAttribute("onclick", "notiview(" + a[1] + ")");
					}
					inli.append(litext);
					inul.append(inli);
				});
				mainul.append(inul);
			});

		}




		//Y인 공지 출력하는곳 ---------------------------
		data.datas2.forEach(function(a, b) {
			var inul = document.createElement("ul");
			inul.className = "noti_ul1 gongji2";


			Object.keys(a).forEach(function(a1, b1) {
				var inli = document.createElement("li");
				var litext = document.createTextNode(a[a1]);

				if (a1 == "0") {
					var litext = document.createTextNode("중요");
				}



				if (a1 == "1") {
					inli.className = "cucucuser";
					inli.setAttribute("onclick", "notiview(" + a[1] + ")");
				}


				inli.append(litext);
				inul.append(inli);
			});

			mainul.prepend(inul);
		});
	}

}


function chdate(value) {
	const selid = document.querySelector("#selid");
	selid.setAttribute("name", value);
}


var serch = "";
function noti_sch() {
	if (document.querySelector("#selid").value == "") {
		alert("검색할 제목을 입력하세요.");
		page = 0;
		pageSize=10;
	location.href="./notice2.jsp";
		

	} else {
			var pagesoo = document.getElementById("pagesoo");
		pagesoo.innerHTML = "" + pagesusu + "";

		var frm = document.getElementById("noti_sch_frm");
		var frmdd = new FormData(frm);
		var page = 0;
		var pageSize = 10;


		frmdd.append("page", page);
		frmdd.append("pageSize", pageSize);
		frmdd.append("notice", "notice");

		serch = "검색이야!"
		var html = new XMLHttpRequest();
		html.onreadystatechange = function() {
			if (html.readyState === XMLHttpRequest.DONE) {
				if (html.status === 200) {
					data = JSON.parse(this.response);
					notisgo(data, serch);

				}
			}
		}

		html.open("POST", "./admin/notis_api1.do", true);
		html.send(frmdd);

	}
}


