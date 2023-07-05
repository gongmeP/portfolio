
var page = 0; 
var pagesusu = 1; 
var totalpage = 0; 

function pagego(x) {
	var pageSize = 10;
	
	var tototalpage =  Math.ceil(totalpage/pageSize); 
	
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
		page = (tototalpage-1)*10 ;
		pagesusu = tototalpage;
	}
	
	//console.log(pagesusu);
	//console.log(page);
	
	if(pagesusu > tototalpage){
		alert("마지막 페이지 입니다.");
		page = (tototalpage-1)*10
		pagesusu = tototalpage;
		return;
	}
	else if(pagesusu <= 0){
		alert("현재 첫 페이지 입니다.");
		page = 0;
		pagesusu = 1;
		return;
	}else {
		
	
	var ajaxbyedd = document.getElementById("notice_list_main");
	ajaxbyedd.innerHTML = "";


	var pagesoo = document.getElementById("pagesoo");
	pagesoo.innerHTML= ""+pagesusu+"";

	var html = new XMLHttpRequest();
	html.onreadystatechange = function() {
		if (html.readyState === XMLHttpRequest.DONE) {
			if (html.status === 200) {
				var data = JSON.parse(html.responseText);
				notisgo(data);
			}
		}
	}
	html.open("POST", "./notis_api1.do", true);
	html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	html.send("keys=notis_api1_ok&page=" + page + "&pageSize=" + pageSize);
	}
}



noticeajax();
function noticeajax(x) {
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
	html.open("POST", "./notis_api1.do", true);
	html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	html.send("keys=notis_api1_ok&page=" + page + "&pageSize=" + pageSize);

}


function notisgo(data) {
	console.log(data);
	if (data == "") {
		document.getElementById("nogong_gi").style.display = "block";
	} else {

		totalpage = data.totalpage; 
		// ~~ 토탈 페이지 부른거 여기다 여기 !!!!!!!!!!!!!!!!!!!!!
		
		//게시판 숫자 찍을거
		var totalnumber = totalpage;
		
		var mainul = document.getElementById("notice_list_main");

		data.datas.forEach(function(a, b) {
			var inul = document.createElement("ul");
			inul.className = "ntl_ul1";
			

			Object.keys(a).forEach(function(a1, b1) {
				var inli = document.createElement("li");
				var litext = document.createTextNode(a[a1]);

				if (a1 == "0") {
					arr = Number(a1) + 1
					var litext = document.createTextNode("");
					var inputs = document.createElement("input");
					inputs.className = "checkbin";
					inputs.setAttribute("id", a[arr]);
					inputs.setAttribute("name", "delcheck");
					inputs.setAttribute("value", a[arr]);
					inputs.type = "checkbox";
					inli.append(inputs);
					}
					
				if(a1=="1"){
					var litext = document.createTextNode((totalnumber-=1)-(page-1));
				}
				
				if(a1=="2"){
					inli.className = "cucucuser";
					inli.setAttribute("onclick","notiview("+a[1]+")");
				}

				inli.append(litext);
				inul.append(inli);
			});

			mainul.append(inul);
		});
		
		
		
		//Y인 공지 출력하는곳 ---------------------------
			data.datas2.forEach(function(a, b) {
			var inul = document.createElement("ul");
			inul.className = "ntl_ul1 gongji";
			

			Object.keys(a).forEach(function(a1, b1) {
				var inli = document.createElement("li");
				var litext = document.createTextNode(a[a1]);

				if (a1 == "0") {
					arr = Number(a1) + 1
					var litext = document.createTextNode("");
					var inputs = document.createElement("input");
					inputs.className = "checkbin";
					inputs.setAttribute("id", a[arr]);
					inputs.setAttribute("name", "delcheck");
					inputs.setAttribute("value", a[arr]);
					inputs.type = "checkbox";
					inli.append(inputs);
					}
					
				if(a1=="1"){
					var litext = document.createTextNode("공지");
				}
				
				if(a1=="2"){
					inli.className = "cucucuser";
					inli.setAttribute("onclick","notiview("+a[1]+")");
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


function mm_checkall(mamachk) {
	//console.log(mamachk);
	var ckboxall_ea = document.getElementsByName("delcheck").length;

	var x = 0;
	while (x < ckboxall_ea) {
		document.getElementsByName("delcheck")[x].checked = mamachk;

		x++;
	}
}


function noti_del() {
	if (confirm("선택한 데이터를 삭제하시겠습니까?")) {
		notidel_frm.submit();

	}

}

function noti_selgogosing() {
	location.href = "./notice_write.jsp"
}



function notiview(nt_id){
	console.log(nt_id);
	location.href = "./notice_view.do?nt_id="+nt_id;
}
