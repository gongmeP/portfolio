imgs();

function imgs() {

    var x = 1;

    while (x < 6) {
        var text1 = document.createTextNode(text(x));
        var li = document.createElement("li");
        var div = document.createElement("div");
        div.id = "imgtext" + x;
        div.append(text1);
        li.append(div);

        li.id = "weekli" + x;
        li.setAttribute("onmouseenter", "menumsi(" + x + ")")
        li.setAttribute("onmouseleave", "menumso(" + x + ")")
        document.getElementById("weekul").append(li);
        document.getElementById("weekli" + x).style.backgroundImage = "url('./contents/b13_" + x + ".png')";

        x++;
    };


}

function menumsi(x) {
    
    document.getElementById("imgtext" + x).style.display = "block";

}

function menumso(x) {

    document.getElementById("imgtext" + x).style.display = "none";

}

function text(textname) {

    switch (textname) {
        case 1:
            return "타짜 : 원아이드잭"

        case 2:
            return "이스케이프룸2(노 웨이 아웃)"

        case 3:
            return "리미트리스"

        case 4:
            return "나를 찾아줘"

        case 5:
            return "더 이퀄라이저2"

        default:
            return;

    }


}