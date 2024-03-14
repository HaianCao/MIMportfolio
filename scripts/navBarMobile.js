function menu(){
    let x = document.getElementsByClassName("nav-items");
    if(window.getComputedStyle(x[0]).display==="none"){
        x[0].style.display="block";
    }
    else{
        x[0].style.display="none";
    }
}