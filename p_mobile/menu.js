$(function () {


    $.ajax({
        url: "./m_json/qanda.json",
        cashe: false,
        type: "GET",
        dataType: "JSON",

        success: function (data) {

            $.fn._as(data);

        },
        error: function () {
            console.log("통신오류")
        }

    })


    $.fn._as = function (data) {
        var li_div;

        $.each(data, function (a, b) {

            // console.log(b.q_subject);
            // console.log(b.q_date);

            li_div = `<li>
            <div>` + b.q_subject + `</div>
            </li>`;
            $(".p_menu2_ul").append(li_div);
        });

        // <div>` + b.q_date + `</div>



    }

    var cnts = 0;
    var menuCT = true;
    $("#mbtn").click(function () {

       if (menuCT == false) {
            return;
        }
        menuCT = false;
       if (cnts == 0) {
          
           $(".p_menu").stop().animate({
               "right": 10 + "%"
            }, 800);
            $(".bkscreen").css({
                "display":"block"
            });
            $(".bkscreen").stop().animate({
                "opacity": "0.3"
            }, 800, );
            cnts = 1;
        } else if (cnts == 1) {
          

            $(".p_menu").stop().animate({
                "right": 100 + "%"
            }, 800);
            $(".bkscreen").stop().animate({
                
                "opacity": "0"
            }, 800 ,function(){
                $(".bkscreen").css({
                    "display":"none"
                });

            });
    
            cnts = 0;
        }

        setTimeout(function () {
            menuCT = true;
        }, 800);
    })



   
    $("#login_1").click(function () {
              
            $(".lgsp").css({
                "display": "block"
            });
       
            $(".p_menu").stop().animate({
                "right": 100 + "%"
            }, 800);

            cnts = 0;
            
                   
    })

});

function logout1(){
  // AJAX 호출
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "m_logout.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 요청이 성공적으로 완료됨
      console.log(xhr.responseText); // 서버에서 반환한 응답 출력
      // 추가로 처리할 작업 수행
    }
  };
  xhr.send();
    
}