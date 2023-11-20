let menu = document.querySelector('#menuHide');
let nav = document.querySelector('nav');
let ul = document.querySelector('ul');

menu.addEventListener('click', function(){ 
    ul.classList.remove('none');
    ul.classList.remove('desctop');
    nav.classList.add('visible');    
});

nav.addEventListener('click', function(){
    nav.classList.remove('visible');
    ul.classList.add('none');
    ul.classList.add('desctop');
})