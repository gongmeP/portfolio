function menu(x) {

    switch(x){

        case 1 :{
            location.href = "./login.html";
        }
        break;
        case 2 :{
            location.href = "./membership.html";
        }
        break;
        case 3 :{
            location.href = "./coupon.html";
        }
        break;
        case 4 :{
            document.getElementById("topbox2").style.display = "block";
        }
        break;


    }

}

function tvinghome(){
    location.href = "https://www.tving.com/onboarding"
}