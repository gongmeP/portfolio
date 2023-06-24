agree_text();

function agree_text() {
    console.log("text");
    var opentext = new XMLHttpRequest();
    opentext.open("GET", "./agree/agree1.txt", false);
    opentext.send();
    document.getElementById("ag1").innerText = opentext.response;
    var opentext = new XMLHttpRequest();
    opentext.open("GET", "./agree/agree2.txt", false);
    opentext.send();
    document.getElementById("ag2").innerText = opentext.response;
};

function allchk(chkTF) {
    var chks = document.getElementsByClassName("chks");
    var chksea = chks.length;
    var x = 0;

    while (x < chksea) {
        chks[x].checked = chkTF;
        x++;
    }
}

function agree_next() {
    if (ship.m_agree1.checked == false) {
        alert("이용약관에 동의 하세요.")
    } else if (ship.m_agree2.checked == false) {
        alert("이용약관에 동의 하세요.")
    } else {
        ship.submit();
    }
}

