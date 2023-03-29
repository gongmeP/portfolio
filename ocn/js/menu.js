ajax();

function ocnl() {
    location.href = "https://ocn.cjenm.com/ko/"
}

function ajax() {
    var data;

    function win() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();

        }
    }

    function fileopen() {

        if (data.readyState == XMLHttpRequest.DONE && data.status == 200) {
            _menus(JSON.parse(this.response))

        }

    }

    data = win();
    data.onreadystatechange = fileopen;
    data.open("GET", "./json/menu.json?v=1", true);
    data.send();
}

function _menus(data) {
    // console.log(data);

    data.forEach(function (a, b, c) {
        var o_li = document.createElement("li");

        // console.log(a);
        // console.log(b);

        var i_ul = document.createElement("ul");
        var area = (data[b].menu_list.length);
        var x = 0;
        while (x < area) {
            var i_li = document.createElement("li");
            var xx = x+1

            i_li.id = "lis" + xx + b;
            i_li.setAttribute("link", data[b].menu_link[x])

            i_li.setAttribute("onclick", "clicklink("+ xx + b + ")")
            i_li.append(data[b].menu_list[x])

            i_ul.id = "ulid" + b;

            i_ul.append(i_li)

            x++;
        }

        o_li.id = "oli" + b;
        o_li.setAttribute("onmouseenter", "mi(" + b + ")")
        o_li.setAttribute("onmouseleave", "mo(" + b + ")")
        o_li.append(i_ul)

        // console.log(data[b].main_menu);

        o_li.prepend(data[b].main_menu);
        document.getElementById("menu").append(o_li);
    });


}

function mi(x) {

    document.getElementById("ulid" + x).style.display = "block";
}

function mo(x) {

    document.getElementById("ulid" + x).style.display = "none";
}


function clicklink(x) {
    console.log(x);
    var x1 = document.getElementById("lis" + x).getAttribute("link");
    location.href = x1;
}