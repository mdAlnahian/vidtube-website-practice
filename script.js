var nahian = document.querySelector(".menu-icon");
var slidebar = document.querySelector(".slidebar");
var container = document.querySelector(".container");


nahian.onclick = function(){
    slidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
