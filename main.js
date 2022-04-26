let hamburgerBtn = document.getElementById("hamburgerBtn");
let collapseMenu = document.getElementById("collapseMenu");

hamburgerBtn.onclick = function(){
    hamburgerBtn.classList.toggle('cross');
    collapseMenu.classList.toggle('show');
}

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}