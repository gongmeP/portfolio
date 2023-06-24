$(function () {
   
    $.ajax({
        url: "./json/banner.json",
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


    var imghtml;
    var ea;

    $.fn._as = function (data) {

        // console.log(data);

        $.each(data.banners, function (a, b) {

            if (b[3] == "yes") {

                imghtml = `<li links="` + b[1] + `" class=b` + a + `><img src="` + b[0] + `"></li>`
                $("#bannerul").append(imghtml);
            }

        });





        var timer = "";
        var node = 0;

        ea = $("#bannerul > li").length;
        console.log(ea);

        var banner_width = $("#bannerul>li").eq(0).width();

        var ul_total_size = banner_width * ea;

        $("#bannerul").css({
            "width": ul_total_size + "px"
        })

        var x = 0;
        while (x < ea) {
            $("#disc").append("<li></li>")
            x++;
        }

        $("#disc > li").eq(0).css({
            "background-color": "white"

        });





        
        var baneerCT = true;
      
        $.fn.banner = function () {

            if (baneerCT == false){
                return;
            }
            baneerCT = false;

            clearTimeout(timer);
         
            $("#bannerul").stop().animate({
                "left": -banner_width + "px"
            }, 400, function () {

                var copy = $("#bannerul > li").eq(0).clone();

                $("#bannerul > li").eq(0).remove();

                $("#bannerul").append(copy);

                $("#bannerul").css({
                    "left": 0
                });


            });

            timer = setTimeout($.fn.banner, 5000);

            
            var n = 0;
            node++;
            if (node >= ea) {
                node = 0;
            }

            while (n < ea) {

                $("#disc > li").eq(n).css({

                    "background-color": "rgba(255, 255, 255, 0.5)"

                });

                n++;

            }

            $("#disc > li").eq(node).css({
                "background-color": "white"
            });

             setTimeout(function () {
                    baneerCT = true;
                }, 400);
        };










       
        $("#banner").bind({
            "mouseenter": function () {

                clearTimeout(timer);
              

            },
            "mouseleave": function () {
                 clearTimeout(timer);
                timer = setTimeout($.fn.banner, 5000)
            }

        });







        

        var dicsCT = true;

        $("#disc>li").bind({

            "mouseenter": function () {
                clearTimeout(timer);
            },

            "click": function () {
                if (dicsCT == false) {
                    return;
                }
                dicsCT = false;

                clearTimeout(timer);

                node = $(this).index();
                console.log(node);

                $("#disc>li").css({
                    "background-color": "rgba(255, 255, 255, 0.5)"
                })
                $("#disc>li").eq(node).css({
                    "background-color": "white"
                })
                $.fn.dischd(node);

                
                setTimeout(function () {
                    dicsCT = true;
                }, 400);
            },

            
            "mouseleave": function () {
                 clearTimeout(timer);
                timer = setTimeout($.fn.banner, 5000)

            }

        })









        $.fn.dischd = function (x) {
            clearTimeout(timer);

            var clsname = ".b" + x;
            console.log(clsname);

            var wic = Math.ceil($("#bannerul>" + clsname).offset().left);
            // console.log(wic);
            var wic2 = Math.ceil($("#bannerul").offset().left);
            // console.log(wic2);

            var total_wic = wic - wic2;
            console.log(total_wic);

            wicnode = Number(String(total_wic).substr(0, 1));
            console.log(wicnode);

            $("#bannerul").stop().animate({

                "left": -total_wic + "px"
            }, 400, function () {
                var z = 0;

                while (z < wicnode) {
                    var fcopy = $("#bannerul > li").eq(0).clone();
                    $("#bannerul > li").eq(0).remove();
                    $("#bannerul").append(fcopy);

                    z++;

                }
                $("#bannerul").css({
                    "left": "0px"
                });

            });


        };







        var clickCT = true;
        $("#prevban").click(function () {
            if (clickCT == false) {
                return;
            }
            clickCT = false;
            clearTimeout(timer);
            console.log("test");
            node--;
            var last = ea - 1;
            if (node < 0) {
                node = last;
            };

            $("#disc > li").css({
                "background-color": "rgba(255, 255, 255, 0.5)"
            });
            $("#disc > li").eq(node).css({
                "background-color": "white"
            });

            var z = $("#bannerul>li").eq(last).clone();
            $("#bannerul>li").eq(last).remove();
            $("#bannerul").prepend(z);
            $("#bannerul").css({
                "left": -banner_width + "px"
            });
            $("#bannerul").stop().animate({
                "left": "0px"
            }, 400);

            setTimeout(function () {
                clickCT = true;
            }, 400);

        });








        $("#nextban").click(function () {
            if (clickCT == false) {
                return;
            }
            clickCT = false;

            clearTimeout(timer);
            node++;

            if (node >= ea) {
                node = 0;
            }
            $("#bannerul").stop().animate({
                "left": -banner_width + "px"
            }, 400, function () {
                var z = $("#bannerul > li").eq(0).clone();
                $("#bannerul > li").eq(0).remove();
                $("#bannerul").append(z);
                $("#bannerul").css({
                    "left": "0px"
                })


            });

            $("#disc > li").css({
                "background-color": "rgba(255, 255, 255, 0.5)"
            })
            $("#disc > li").eq(node).css({
                "background-color": "white"

            })

            setTimeout(function () {
                clickCT = true;
            }, 400);

        });


        $("#bannerul").on("click", "li", function () {
            var links = $(this).attr("links");
            // console.log(links);
            location.href = links;
        });

        $.fn.banner(5000);
    }


});