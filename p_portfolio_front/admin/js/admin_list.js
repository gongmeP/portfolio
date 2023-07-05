
var html = new XMLHttpRequest();
html.onreadystatechange = function() {
	if (html.readyState === XMLHttpRequest.DONE) {
		if (html.status === 200) {
			data = JSON.parse(this.response);
			noadmin(data);
		}

	}
}

html.open("GET", "./adminapi.do?keys=admin_knock2", true);
html.send();



function noadmin(alldata) {

if(alldata == ""){
	document.getElementById("nonew").style.display="block";
}else{

	var lis = document.getElementById("datalis");

	alldata.forEach(function(a, b) {
		var inul = document.createElement("ul");
		inul.className = "list_data_ul";
			//var input = document.createElement("input");
			//input.type="hidden";
			//input.setAttribute("name", "midx");
			//input.setAttribute("value", a[0]);
			//lis.appendChild(input);

		Object.keys(a).forEach(function(a1, b1) {
			var inli = document.createElement("li");
			var intext = document.createTextNode(a[a1]);
			
		

			if (a1 == "7") {
				var date = a[a1].split(" ")[0];
				intext = document.createTextNode(date);
			}

			if (a1 == "8") {
				var x = 0;
				while (x <= 1) {
					var divs = document.createElement("div");
					divs.setAttribute("onclick", "divbtn" + x + "("+a[0]+")");
					if(x==0){
						var divtext = document.createTextNode("승인");
					}else {
						var divtext = document.createTextNode("비승인");
					}
				    divs.append(divtext);
					inli.append(divs);
					x++;
				}
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


function divbtn0(no){
	console.log(no);
	if(confirm("관리자 승인을 진행하시겠습니까?")){
	location.href="./add_update.do?midx="+no;
	}else{
		alert("관리자 승인이 취소되었습니다.");
	}
}


function divbtn1(no){
	console.log(no);
	if(confirm("관리자 승인을 거부하시겠습니까?")){
	location.href="./add_update2.do?midx="+no;
	}
	
}



	

