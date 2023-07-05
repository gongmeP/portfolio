function nomalsetting(userid){
	
	console.log(userid);
	location.href="./config_form_update.do?m_id="+userid;
	
	
}

function memberlistgo(){
	location.href="./member_list.jsp";
}

function noti_gogo(){
	location.href="./notice_list.jsp";
}

function shop_gogo(){
	location.href="./setup_in1_select.do";
}

function product_gogo(){
	location.href="./shop_product_list.jsp";
}

function noservice1(){
	alert("서비스 준비중 입니다.");
}

function noservice2(){
	alert("서비스 준비중 입니다.");
}