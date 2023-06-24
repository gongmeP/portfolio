function corplink(corpnum) {
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=" + corpnum, "", "width=500 height=500");

}

$(function () {
    $.ajax({
        url: "./json/notice.json",
        cashe: false,
        type: "GET",
        dataType: "JSON",

        success: function (notidata) {

            $.fn.notice(notidata);

        },
        error: function () {
            console.log("통신오류")
        }

    });


    $.fn.notice = function (notidata) {
        var li;

        console.log(notidata);
        $.each(notidata.notice, function (a, b) {

            li = `<li>` + b[0] + `</li>`


            // console.log(a);
            $("#roll").append(li);
        });


        var liea = $("#roll > li").length;
        // console.log(liea);


        var lihei = $("#roll > li").height()
        // console.log(lihei);

        var totalhei = liea * lihei;
        // console.log(totalhei);

        $.fn._roll = function () {
            $("#roll").stop().animate({
                "top": -lihei + "px"
            }, 500, function () {
                var fastli = $("#roll > li").eq(0).clone();
                $("#roll > li").eq(0).remove();
                $("#roll").append(fastli);
                $("#roll").css({
                    "top": 0
                });
            });

            rolltime = setTimeout($.fn._roll, 2000);

        }

        var rolltime = setTimeout($.fn._roll, 2000);


    }


    $.ajax({
        url: "./json/pullmenu.json",
        cashe: false,
        type: "GET",
        dataType: "JSON",

        success: function (pulldata) {

            $.fn.pull(pulldata);

        },
        error: function () {
            console.log("통신오류")
        }

    });

    $.fn.pull = function (pulldatas) {
        // console.log(pulldatas[0]);
        var li1;
        var li2;


        $.each(pulldatas[0].brand, function (a, b) {
            li1 = `<li>` + b + `</li>`

            // console.log(b);
            $("#sucorp2").append(li1)
        })

        $.each(pulldatas[0].subsidi, function (a2, b2) {
            li2 = `<li>` + b2 + `</li>`

            // console.log(b2);
            $("#sucorp1").append(li2)
        })

    

        $("#corp1").click(function () {


            $("#sucorp1").stop().slideToggle(400);

        });

        $("#corp2").click(function () {


            $("#sucorp2").stop().slideToggle(400);

        });
    };
});