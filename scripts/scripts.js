let switchButton = document.getElementById("switchButton");
let header = document.getElementById("header");
let style = "light";

switchButton.addEventListener("click", (e) => {
    if(style == "light"){
        header.className = "dark";
        style = "dark";
    }
    else {
        header.className = "light";
        style = "light";
    }
})