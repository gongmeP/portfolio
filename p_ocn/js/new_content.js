content();

function content() {

    var x = 0;

    while (x < 5) {

        var imgx = x + 1;
        li = document.createElement("li");

        li.title = tips(x);
        li.id = "contli" + x;
        li.setAttribute("onmouseenter", "msi(" + x + ")")
        li.setAttribute("onmouseleave", "mso(" + x + ")")
        document.getElementById("contentul").append(li);
        document.getElementById("contli" + x).style.backgroundImage = "url('./contents/mini" + imgx + "-black.png')";
        x++;
    }


}

function tips(tipname) {
  
    switch (tipname) {
        case 0:
            return "게임덱후들(유민상,김준현)"

        case 1:
            return "44층 지하던전"

        case 2:
            return "켠왕켜놩(켠김에왕까지-허준)"

        case 3:
            return "핑거게임(신동엽, 장도연)"

        case 4:
            return "플레이어2 (이수근,이진호, 이용진, 이이경, 이진호, 정혁, 황치열, 김동현)"

        default:
            return;

    }

}

function msi(x) {
    var imgx2 = x + 1
    document.getElementById("contli" + x).style.backgroundImage = "url('./contents/mini" + imgx2 + "-color.png')";
}

function mso(x) {
    var imgx3 = x + 1
  
    document.getElementById("contli" + x).style.backgroundImage = "url('./contents/mini" + imgx3 + "-black.png')";
}