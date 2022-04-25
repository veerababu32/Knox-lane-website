let hamburgerBtn = document.getElementById("hamburgerBtn");
let collapseMenu = document.getElementById("collapseMenu");

hamburgerBtn.onclick = function(){
    hamburgerBtn.classList.toggle('cross');
    collapseMenu.classList.toggle('show');
}