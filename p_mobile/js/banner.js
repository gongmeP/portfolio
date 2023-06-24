$( () => {
    var timer;
    var n = 0; // 최초 노드번호 변수 

    var ea; 
    
    $.fn.banner_ani = function () {
        ea =  $("#ba_div > img").length; // 출력된 배너 갯수를 가져오는 변수

        $("#ba_div > img").eq(n).fadeOut(800);
        n++;
        if(n >= ea){
            n = 0;

        }
        $("#ba_div > img").eq(n).fadeIn(800);

       


        timer = setTimeout($.fn.banner_ani, 2000);

    };

    timer = setTimeout($.fn.banner_ani, 2000);

});