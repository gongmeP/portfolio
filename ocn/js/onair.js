ajax();

function ajax() {
    var data;

    function win() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();

        }
    }

    function fileopen() {

        if (data.readyState == XMLHttpRequest.DONE && data.status == 200) {

            _newpro(JSON.parse(this.response))

        }

    }

    data = win();
    data.onreadystatechange = fileopen;
    data.open("GET", "./json/new_program.json?v=1", true);
    data.send();
}

function onairad() {
    location.href = "https://biz.skbroadband.com"
}

var html1 = "";
var html2 = "";

function _newpro(data) {


    console.log(data);

    data.forEach(function (a, b, c) {

        if (b <= 7) {

            html1 += "<li title='" + a.new_pg + "'><img src='" + a.new_thumb + "'></li>"

            document.getElementById("leftul1").innerHTML = html1;
        } else
        if (b > 7) {

            html2 += "<li title='" + a.new_pg + "'><img src='" + a.new_thumb + "'></li>"

            document.getElementById("leftul2").innerHTML = html2;

        }
        console.log(b);


    });

};

$(function () {


    $("#the").stop().click(function () {
        $(".leftul").fadeToggle(800);

    });
});