let div_bird = document.querySelector('#birdy');
let tab_bird = document.querySelector('#bir_field');
let info = document.querySelector('#info');
let start = document.querySelector('#start');
let go = document.querySelector('#continiu');
let level = document.querySelector('#level');
let span = document.querySelector('#number');
let schetchik = document.querySelector('#schetchik');
 
if (window.innerWidth >= 992){
    for (let i = 0; i < 10; i++){
        let tr_bird = document.createElement('tr');
        tab_bird.append(tr_bird);
        for (let j = 0; j < 10; j++){
            let td_bird = document.createElement('td');
            tr_bird.append(td_bird);
        }
    }

    function getRandom(){
        return Math.round(Math.random() * 99);
    }
}
if (window.innerWidth < 992){
    

    for (let i = 0; i < 10; i++){
        let tr_bird = document.createElement('tr');
        tab_bird.append(tr_bird);
        for (let j = 0; j < 7; j++){
            let td_bird = document.createElement('td');
            tr_bird.append(td_bird);
        }
    }

    function getRandom(){
        return Math.round(Math.random() * 69);
    }
}

let n = 1;
let timer;
let stoper;

let am = 1;
tab_bird.addEventListener('click', function(){
    schetchik.textContent = 'Попытка ' + am;
    ++am;
});

let td_birds = tab_bird.querySelectorAll('td');
function timeOut (param){
    timer = setInterval(function (elem){
        elem = param;
        let randomNum = getRandom();
        td_birds[randomNum].classList.add('bird');
        setTimeout(function (){
            td_birds[randomNum].classList.remove('bird');
            }, elem);        
    }, param);
}

let flag = false;

function sound() {
    let audio = new Audio(); 
    audio.src = '..//audio/vic.mp3'; 
    audio.autoplay = true; 
  }

function flyOfBird(){
for (let td_bird of td_birds){
    td_bird.addEventListener('click', function(){
        if (td_bird.classList.contains('bird')){
            clearInterval(timer);
            span.textContent = n;
            info.textContent = "Вы поймали звездолёт!";
            level.textContent = 'Вы прошли уровень ' +
        n + ' с попытки ' + am + ' . Если хотите попробовать на скорости ' + (n + 1) + ', нажмите "Продолжить"';
            sound();
            flag = true;
            go.classList.remove('passive');
            start.classList.remove('active');
            start.classList.add('passive');
            go.classList.add('active');
            am = 0;
        }
    });
}
}

let k = 1000;
function repeat(){
    k = k - 100;
    timeOut(k);
}

go.classList.add('passive');
start.classList.add('active');

start.addEventListener('click', function pusk(){
    flyOfBird();
    timeOut(k);
    start.removeEventListener('click', pusk);
    level.textContent = "Уровень " + n;
});

go.addEventListener('click', function vpered(){
    if (flag == false){
        info.textContent = '';
        level.textContent = '';
        go.removeEventListener('click', vpered);
    }
    if (flag == true){
        info.textContent = '';
        repeat();
        n++;
        level.textContent = "Уровень " + n;
        flag = false;
    }    
});
if (n >= 10){
        level.textContent = 'Поздравляем! Вы прошли игру!';
        tab_bird.remove();
        go.removeEventListener('click', vpered);
    }
 
