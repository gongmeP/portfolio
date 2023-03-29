$(function () {



    var data;
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

        console.log(data);

        $.each(data.banners, function (a, b) {



            if (b[3] == "yes") {

                imghtml = `<li links="` + b[1] + `" class=b` + a + `><img src="` + b[0] + `"></li>`
                $("#bannerul").append(imghtml);
            }



            // console.log(b[1]);

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



        $.fn.banner = function () {


            clearTimeout(timer);

            // console.log("test");

            $("#bannerul").stop().animate({
                "left": -banner_width + "px"
            }, 1000, function () {

                var copy = $("#bannerul > li").eq(0).clone();

                $("#bannerul > li").eq(0).remove();

                $("#bannerul").append(copy);

                $("#bannerul").css({
                    "left": 0
                });


            });

            timer = setTimeout($.fn.banner, 2000);


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
        };

        $("#banner").bind({
            "mouseenter": function () {

                clearTimeout(timer);
                timer = "";

            },

            "mouseleave": function () {

                $.fn.banner();
            }

        });

        $("#disc>li").bind({

            "click": function () {
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


            },
            "mouseleave": function () {
                clearTimeout(timer);
                timer = setTimeout($.fn.banner, 2000)

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
            }, 800, function () {
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



        $("#prevban").click(function () {
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
            }, 800);



        });




        $("#nextban").click(function () {
            clearTimeout(timer);
            node++;

            if (node >= ea) {
                node = 0;
            }
            $("#bannerul").stop().animate({
                "left": -banner_width + "px"
            }, 800, function () {
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

        });


        $("#bannerul").on("click", "li", function () {
            var links = $(this).attr("links");
            // console.log(links);
            location.href = links;
        });


    }





});