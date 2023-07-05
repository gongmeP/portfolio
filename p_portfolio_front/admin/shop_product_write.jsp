<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="../ckeditor/ckeditor.js?v=8"></script>
<link rel="stylesheet" type="text/css" href="./css/shop_product_write.css?v=10">
<link rel="stylesheet" type="text/css" href="./css/def.css?v=5">
</head>
<body>
	<header>
		<%@ include file='./admin_header.jsp'%>
	</header>
	<nav>
		<%@ include file='./admin_menu.jsp'%>
	</nav>
	<section style="margin-top: 20px;">

		<div class="spw_main">

			<div class="spw_div1">
				<em class="spw_nemo">■</em> 상품 등록 페이지
			</div>
			<form action="pd_insert.do" method="post" id="pd_frm" enctype="multipart/form-data">
			
				<ul class="ssw_ul1">
					<li>대메뉴 카테고리</li>
					<li><select name="pd_mainca">
					<option value="기획상품">기획상품</option>
					<option value="이벤트 상품">이벤트 상품</option>
					<option value="무료배송상품">무료배송상품</option>
					<option value="베스트 상품">베스트 상품</option>
					<option value="이주의 핫딜">이주의 핫딜</option>
					</select>
					</li>
					
				</ul>
				<ul class="ssw_ul1">
					<li>소메뉴 카테고리</li>
					<li><select name="pd_subca">
					<option value="채소/과일/농수산물">채소/과일/농수산물</option>
					<option value="간식/간편음식">간식/간편음식</option>
					<option value="베이커리/우유">베이커리/우유</option>
					<option value="냉장고/김치냉장고">냉장고/김치냉장고</option>
					<option value="주방용품/생활가전">주방용품/생활가전</option>
					<option value="컴퓨터/스마트폰">컴퓨터/스마트폰</option>
					<option value="공기청정기">공기청정기</option>
					</select>
					</li>
					
				</ul>
				<ul class="ssw_ul1">
					<li>상품코드</li>
					<li><input type="text" value="" name="pd_code" id="pd_code" maxlength="6"></li>
					<li><input type="button" value="중복확인" onclick="code_check()"></li>
					<li>※ 상품코드는 절대 중복되지 않도록 합니다.</li>
					
				</ul>
				
				<ul class="ssw_ul1">
					<li>상품명</li>
					<li><input type="text" name="pd_name"></li>
					<li>※ 상품명은 최대 100자까지만 적용할 수 있습니다.</li>
					
				</ul>
				<ul class="ssw_ul1">
					<li>상품 부가설명</li>
					<li><input type="text" name="pd_text1"></li>
					<li>※ 상품 부가설명은 최대 200자까지만 적용할 수 있습니다.</li>
					
				</ul>
				
					<ul class="ssw_ul1">
					<li>판매가격</li>
					<li><input type="text"  placeholder="0" maxlength="7" name="pd_pri" onkeyup="pd_pri2(this.value=this.value.replace(/[^0-9]/g,''))" id="pd_pri"></li>
					<li>원</li>
					<li>※ , 없이 숫자만 입력하세요 최대 7자리</li>
					
				</ul>
				
				
					<ul class="ssw_ul1">
					<li>할인율</li>
					<li><input value="0" type="text" placeholder="0" maxlength="2" name="pd_rate" id="pd_rate" onkeyup="pd_rate2(this.value=this.value.replace(/[^0-9]/g,''))"></li>
					<li>%</li>
					<li>※숫자만 입력하세요.</li>
					
				</ul>
				
				<ul class="ssw_ul1">
					<li>할인가격</li>
					<li><input type="text" placeholder="0" name="pd_s_pri" id="pd_s_pri" readonly="readonly" value="0"></li>
					<li>원</li>
					<li>※ 할인율이 0%일 경우 할인 가격은 0으로 처리 합니다.</li>
					
				</ul>
				
				
				<ul class="ssw_ul1">
					<li>상품재고</li>
					<li><input type="text"  placeholder="0" maxlength="4" name="pd_stock"></li>
					<li>EA</li>
					<li>※ 숫자만 입력하세요. 재고가 0일 경우 soldout이 됩니다.</li>
				</ul>
				
					<ul class="ssw_ul1">
					<li>판매 유/무</li>
					<li class="rid1">
					<label>
					<input type="radio" value="Y" name="open_on_off">판매시작
					
					</label>
					<label >
					<input type="radio" value="N" name="open_on_off" checked="checked">판매종료
					
					</label>
					</li>
				</ul>
				
					<ul class="ssw_ul1">
					<li>조기 품절</li>
					<li class="rid1">
					<label>
					<input type="radio" value="Y" name="sold_on_off">사용
					
					</label>
					<label >
					<input type="radio" value="N" name="sold_on_off" checked="checked">미사용
					
					</label>
					</li>
				</ul>
				
				
				<ul class="ssw_ul1 ssw_ulimg">
					<li class="ssw_liimg">상품 대표 이미지</li>
					<li class="ssw_liimg_div">
					<div><input type="file" name="file1" id="pd_img1"> </div>
					<div>※ 상품 대표이미지 이며, 이미지 용량은 2MB 까지 입니다.</div>
					<div><input type="file" name="file2" id="pd_img2"> </div>
					<div>※ 추가 이미지 이며, 이미지 용량은 2MB 까지 입니다.</div>
					<div><input type="file" name="file3" id="pd_img3"> </div>
					<div>※ 추가 이미지 이며, 이미지 용량은 2MB 까지 입니다.</div>
					</li>
				</ul>
				
				
				<ul class="ssw_ul1 ssw_litext">
					<li class="ssw_litext">상품 상세설명</li>
					<li class="ssw_litext_ta">
					<textarea class="ssw_li" id="spw_texta" name="pd_dt_text"></textarea>
					</li>
			
				</ul>
				

				<div class="spw_btn1">
					<input type="button" value="상품리스트" onclick="product_listssgo()">
					<input type="button" value="상품등록" onclick="product_insertgo()">
				</div>
			</form>


		</div>
	</section>

</body>
<script type="text/javascript" src="./js/shop_product_write.js?v=16"></script>
<script type="text/javascript">

var editor = CKEDITOR.replace('spw_texta');

editor.config.width = '830px';
editor.config.height = '270px';
editor.config.resize_enabled = false;
editor.config.filebrowserUploadUrl = "./imageupload.do";
</script>


 
</html>