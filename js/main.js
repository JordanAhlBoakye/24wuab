document.querySelector(".fadelayer").addEventListener("click",showMenu);

document.querySelector(".menu-button").addEventListener("click",showMenu);

function showMenu(){
    let menu=document.querySelector("nav.menu");
    menu.classList.toggle("show");
    let layer=document.querySelector(".fadelayer");
    layer.classList.toggle("visible")
}