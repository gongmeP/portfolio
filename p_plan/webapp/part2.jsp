<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.ArrayList"%>
<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
ArrayList<String> ar = (ArrayList<String>)request.getAttribute("info");
ArrayList<String> ok = (ArrayList<String>)request.getAttribute("da");
String sno = (String)request.getAttribute("sno");

%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=1">
<link rel="stylesheet" type="text/css" href="./css/part2.css?v=3">

<body>
<%@ include file="./top2.jsp"%>
<section class="main22">
<p class="p1">야영장 예약하기</p>
<div id="a"></div>
<form id="f" class="frm">
<ul>
<li><img alt="" src="./ico/camping.svg" class="imgs"><%=ar.get(2) %> <%=ar.get(3) %> 야영장<div><%=ar.get(4) %> ~ <%=ar.get(5) %></div></li>
<li><label><input type='radio' name='m_dong' value="<%=ar.get(3) %>-0"><%=ar.get(3) %> - 가 동</label><span id=s0 class="bbb">완료</span></li>
<li><label><input type='radio' name='m_dong' value="<%=ar.get(3) %>-1"><%=ar.get(3) %> - 나 동</label><span id=s1 class="bbb">완료</span></li>
<li><label><input type='radio' name='m_dong' value="<%=ar.get(3) %>-2"><%=ar.get(3) %> - 다 동</label><span id=s2 class="bbb">완료</span></li>
<li><label><input type='radio' name='m_dong' value="<%=ar.get(3) %>-3"><%=ar.get(3) %> - 라 동</label><span id=s3 class="bbb">완료</span></li>
<li> <div id="money"></div></li>
</ul>
<ul>
<li><img alt="" src="./ico/report.svg" class="imgs">예약자 정보</li>
<li><div>고객명</div><input type="text" name="m_name" value="<%=ar.get(0) %>" readonly="readonly" title="고객명은 수정불가합니다."></li>
<li><div>연락처</div><input type="text" name="m_tel" value="<%=ar.get(1) %>" onkeyup="this.value=this.value.replace(/[^0-9]/g,'')" maxlength="11"></li>
<li id="ll"><span style="background-color:white; color:black; width:400px;"><div style="width:55px;">인원수</div>
<select name="m_person">
<option> </option>
</select></span>
</li>
</ul>
<input type="hidden" name="rno" value="<%=sno%>">
<input type="hidden" name="m_mt" value="<%=ar.get(2) %> <%=ar.get(3) %>">
<input type="hidden" name="m_money" value="">
<input type="hidden" name="indate" value="<%=ar.get(4)%>">
<input type="hidden" name="outdate" value="<%=ar.get(5)%>">
<input type="button" value="예약선택" onclick="gogogogo()"
style="width:250px; height:70px; margin-top:60px; background-color:black; color:white; margin:0 auto;"
>
</form>
</section>
</body>
<%@ include file="./copyri.jsp"%>
<script>

var day1 = Math.floor(new Date("<%=ar.get(4)%>").getTime() / 1000 / 3600 / 24);
var day2 = Math.floor(new Date("<%=ar.get(5)%>").getTime() / 1000/3600/24);


var sumday = (day2-day1);
if(sumday == 0){
	sumday = 1;
}

date()
function date(){
   var x0 = "<%=ok.get(0)%>";
   var x1 = "<%=ok.get(1)%>";
   var x2 = "<%=ok.get(2)%>";
   var x3 = "<%=ok.get(3)%>";
   
   var w = 0;
   while(w<=3){
         if(eval("x"+w)!="x"){
          f.m_dong[w].onclick = function() {
              alert("사용 불가합니다.");
              return false;
          };
         document.getElementById("s"+w).style.display = "block";
      }
      w++;      
   }   
}


abc();
function abc(){
  var data;
  
  function win(){
      if(window.XMLHttpRequest){
          return new XMLHttpRequest();
      }
  }
  function file(){
      if(data.readyState==XMLHttpRequest.DONE && data.status==200){
          print_data(JSON.parse(this.response));
      }
  }
  data = win();
  data.onreadystatechange = file;
  data.open("GET","./json/campsite.json",true);
  data.send();
}

function print_data(m){
   var mmm = "";
   var mno = "";
   var back = "";
    m.camp.forEach(function(a,b,c){
           Object.keys(m.camp[b]).forEach(function(a1,b1,c1){
      if(m.camp[b].camp_name=="<%=ar.get(2) %>"){
          Object.keys(m.camp[b][a1]).forEach(function(a2,b2,c2){
             if(m.camp[b].camp_part[a2]=="<%=ar.get(3)%>"){
               mmm = (m.camp[b].camp_money[a2])*sumday;
               mno = m.camp[b].camp_person[a2];   
               back = m.camp[b].camp_image[a2];
             }   
         })      }           })       })
       
         
   document.getElementById("money").innerText = "총 금액 : "+mmm.toLocaleString()+"원";
    document.getElementById("a").style.backgroundImage = "url('"+back+"')";
    f.m_money.value = mmm;
    var w = 0;
    while(w<Number(mno)){
      f.m_person.innerHTML += "<option value='"+(w+1)+"'>"+(w+1)+"</option>"
       w++;
    } 
        
}

function gogogogo(){
   f.method="post";
   f.action="./part3.do"
   f.submit();
}



</script>
</html>