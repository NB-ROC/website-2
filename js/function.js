function menu(){

    let test = document.getElementById("submenu").style.display;
    console.log(test);

    if(test == "none"){
        document.getElementById("submenu").style.display = "block";
    }
    else{
        document.getElementById("submenu").style.display = "none";
    }
}