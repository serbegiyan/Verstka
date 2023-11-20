let select = document.querySelector('select');
let options = document.querySelectorAll('option');
let city = document.querySelector('#city');
let emeil = document.querySelector('#meil');
let button = document.querySelector('button');
let note = document.querySelector('#note');
let comment = document.querySelector('#comment');

select.addEventListener('change', function(){
    for (let opt of select){
        if (opt.selected == true){
            city.value = opt.textContent;
        } 
    }
});

emeil.addEventListener('blur', function(){
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emeil.value)) {
        let er = document.createElement('p');
        er.textContent = 'Вы ввели некорректный email';
        er.classList.add('er');
        emeil.insertAdjacentElement('afterend', er);
    } 
});

emeil.addEventListener('focus', function(){
    let er = comment.querySelector('p');
    er.remove();
});

city.addEventListener('focus', function(){
    let er = comment.querySelector('p');
    er.remove();
});

note.addEventListener('focus', function(){
    let er = comment.querySelector('p');
    er.remove();
})

button.addEventListener('click', function(event){
    event.preventDefault();
    if (city.value == ''){
        let er = document.createElement('p');
        er.textContent = 'Выбирите или введите название города';
        er.classList.add('er');
        city.insertAdjacentElement('afterend', er);
    }
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emeil.value)) {
        let er = document.createElement('p');
        er.textContent = 'Введите корректный email';
        er.classList.add('er');
        emeil.insertAdjacentElement('afterend', er);
    }
    if (note.value == ''){
        let er = document.createElement('p');
        er.textContent = 'Введите ваш комментарий';
        er.classList.add('er');
        note.insertAdjacentElement('afterend', er);
    }
    if (note.value != '' && city.value != '' &&
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emeil.value)){
        alert('Ваше сообщение успешно отправлено');
    }
})
