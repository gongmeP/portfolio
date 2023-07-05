
var html = new XMLHttpRequest();
html.onreadystatechange = function() {
	if (html.readyState === XMLHttpRequest.DONE) {
		if (html.status === 200) {
			data = JSON.parse(html.responseText);
			faqgo(data);
		}

	}
}

html.open("POST", "./admin/FAQ_api1.do?", true);
html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
html.send("keys=FAQAPI_ok");




//faq 메뉴 클릭하는곳
function faqlistgogo(lists) {
  console.log(lists);
  var html = new XMLHttpRequest();
  html.onreadystatechange = function() {
    if (html.readyState === XMLHttpRequest.DONE && html.status === 200) {
      var data = JSON.parse(html.responseText);
      faqgo(data);
    }
  };

  html.open("POST", "./admin/FAQ_api1.do?", true);
  html.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  html.send("keys=FAQAPI_ok&faqlist=" + lists);
}







function faqgo(data) {
	let faq_faqs = document.getElementById("faq_faqs");
	  faq_faqs.innerHTML = "";

	
	var x = 0;
	data.datas.forEach(function(a, b) {
		
		let span1 = document.createElement("span");
		span1.className = "faq_Q";
		span1.setAttribute("onclick", "Qgogo('open" + x + "')");
		let em = document.createElement("em");
		let emtext = document.createTextNode("Q.")
		let Qtext = document.createTextNode(a[1]);

		em.append(emtext);
		span1.append(em);
		span1.append(Qtext);
		faq_faqs.append(span1);


		let span2 = document.createElement("span");
		span2.className = "faq_A";
		span2.setAttribute("id", "open" + x + "");

		let subspan1 = document.createElement("span");
		let subspan2 = document.createElement("span");
		let subspan1text = "A.";
		let subspan2text = a[2];

		subspan1.innerHTML = subspan1text;
		subspan2.innerHTML = subspan2text;
		span2.append(subspan1);
		span2.append(subspan2);

		faq_faqs.append(span2);
		x++;
	});

}


function Qgogo(open) {
	let faq_a = document.getElementById(open);
	if (faq_a.style.display == 'block') {

		faq_a.style.height = "0px";
		faq_a.style.transition = 'height 0.3s ease-in-out';
		setTimeout(function() {
			faq_a.style.display = 'none';
		}, 300);

	} else {
		faq_a.style.display = "block";
		faq_a.style.overflow = 'hidden';
		faq_a.style.height = "auto";
		let height = faq_a.clientHeight + 'px';
		faq_a.style.height = '0';
		setTimeout(function() {
			faq_a.style.transition = 'height 0.3s ease-in-out';
			faq_a.style.height = height;
		}, 0);
	}
}





