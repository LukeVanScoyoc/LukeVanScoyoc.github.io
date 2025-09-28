let switchButton = document.getElementById("switchButton");
let header = document.getElementById("header");

switchButton.addEventListener("click", (e) => {
    if(header.className() == "light"){
        header.className = "dark";
    }
    else {
        header.className = "light";
    }
})