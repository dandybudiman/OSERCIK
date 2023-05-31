function changenav() {
    if (document.getElementById("check").checked == true){
        document.getElementById("navbar1").style.visibility = "visible";
        document.getElementById("navbar2").style.visibility = "visible";
        document.getElementById("navbar3").style.visibility = "visible";
        document.getElementById("navbar4").style.visibility = "visible";
        document.getElementById("navbar1").className = "navbar1";
        document.getElementById("navbar2").className = "navbar2";
        document.getElementById("navbar3").className = "navbar3";
        document.getElementById("navbar4").className = "navbar4";
        document.getElementById("home").style.height = "120vh";
    }
    
    else{
        document.getElementById("navbar1").style.visibility = "hidden";
        document.getElementById("navbar2").style.visibility = "hidden";
        document.getElementById("navbar3").style.visibility = "hidden";
        document.getElementById("navbar4").style.visibility = "hidden";
        document.getElementById("navbar1").className = "navbar11";
        document.getElementById("navbar2").className = "navbar22";
        document.getElementById("navbar3").className = "navbar33";
        document.getElementById("navbar4").className = "navbar44";
        document.getElementById("home").style.height = "100vh";
        }
    }

if(window.innerWidth < 600){
    changenav()
}

