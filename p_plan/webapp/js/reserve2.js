var aa;
function gogo(z){
	var st = document.getElementsByClassName("d1");
	var cla = document.getElementsByClassName("cla");
	var div1 = document.getElementById("div1");
	div1.style.display = "block";
	
	
	
	aa=z;
	var data;
    function win(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
    }
    function file(){
        if(data.readyState==XMLHttpRequest.DONE && data.status==200){
            open(JSON.parse(this.response));
        }
    }
    data = win();
    data.onreadystatechange = file;
    data.open("GET","./json/campsite.json",true);
    data.send();
}

var node = 0;
function open(data){
   data.camp.forEach(function(a,b){
	  console.log(b);
      var ul = document.getElementById("ulcss1_ul");
      var html_li = document.createElement("li");
      var html_ul = document.createElement("ul");

      if(aa == a.camp_name){
		node=b;
         console.log(a.camp_part.length);
      
          switch(a.camp_part.length){
              case 1 :         
                  ul.innerHTML = `<li onclick="camp('`+a.camp_part[0]+`')">`+a.camp_part[0]+`</li>`;
              break;
      
              case 2 :
                  ul.innerHTML = `<li onclick="camp('`+a.camp_part[0]+`')">`+a.camp_part[0]+`</li>
                               <li onclick="camp('`+a.camp_part[1]+`')">`+a.camp_part[1]+`</li>`;
              break;
      
              case 3 :
                  ul.innerHTML = `<li onclick="camp('`+a.camp_part[0]+`')">`+a.camp_part[0]+`</li>
                               <li onclick="camp('`+a.camp_part[1]+`')">`+a.camp_part[1]+`</li>
                               <li onclick="camp('`+a.camp_part[2]+`')">`+a.camp_part[2]+`</li>`;
              break;
      
            case 4 :
                  ul.innerHTML = `<li onclick="camp('`+a.camp_part[0]+`')">`+a.camp_part[0]+`</li>
                               <li onclick="camp('`+a.camp_part[1]+`')">`+a.camp_part[1]+`</li>
                               <li onclick="camp('`+a.camp_part[2]+`')">`+a.camp_part[2]+`</li>
                               <li onclick="camp('`+a.camp_part[3]+`')">`+a.camp_part[3]+`</li>`;
              break;
             
          }
      }
   });
   
	var cla = document.getElementsByClassName("cla");
	var bb = 0;
	console.log(node);
var bb = 0;
while (bb < node) {
  cla[bb].style.backgroundColor = "#ffffff";
  cla[bb].style.color = "black";
  bb++;
}

for (var x = 0; x < cla.length; x++) {
  if (x != node) {
    cla[x].style.backgroundColor = ""; 
    cla[x].style.color = ""; 
  }
}

cla[node].style.backgroundColor = "#666666";
cla[node].style.color = "#000000";
	
	

	
}

function camp(a){
	console.log(a);
	
	var ulcss2 = document.getElementById("ulcss2");
	var div2 = document.getElementById("div2");
	ulcss2.innerHTML = `<p class="ab">`+ aa+" "+  a +`</p>야영장을 선택하였습니다.`;
	div2.style.display = "block";
	var mt = document.getElementById("mt");
	var ya = document.getElementById("ya");
	mt.value=aa;
	ya.value=a;
}
function goyes(){
	if(f.d1.value>f.d2.value){
		alert("올바른 날짜를 입력하세요");
		f.d1.value="";
		f.d2.value="";
	}
	else{
	f.submit();
	}
	
}

function logout(){
	location.href='./logoutgo.do';
}