let navIcon = document.getElementById('nav-burger-icon');
let navList = document.getElementById('nav-list-options');
let showNav = false;
let navTopmost = document.getElementById('nav-topmost');
function navListHandler(){
    if(showNav){
        navTopmost.classList.add('hidden')
        navList.classList.remove('showNav');
        showNav = false;
        navIcon.classList.remove('fa-xmark');
        navIcon.classList.add('fa-ellipsis-vertical');
    }else{
        navTopmost.classList.remove('hidden')
        navList.classList.add('showNav');
        showNav = true;
        navIcon.classList.remove('fa-ellipsis-vertical');
        navIcon.classList.add('fa-xmark');
    }
}