let icons = document.querySelectorAll('.icon');
let galery = document.querySelector('#galery');
let parent = document.querySelector('#parent');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let images = galery.querySelectorAll('img');
let figcaps = galery.querySelectorAll('figcaption');
let marker = 0;

for (let icon of icons){
    icon.firstElementChild.addEventListener('click', function(){         
        removeImg();    
        let img = document.createElement('img');
        let figText = document.createElement('figcaption');
        img.src = this.src;
        figText.textContent = this.nextElementSibling.textContent;
        parent.append(img);
        parent.append(figText);                        
        icon.firstElementChild.classList.add('active');         
        for (let i = 0; i < images.length; i++){
            if (images[i].classList.contains('active')){
                marker = i;                
            }
        }          
    });        
}

next.addEventListener('click', function(){
    removeImg(); 
    let img = document.createElement('img');
    let figText = document.createElement('figcaption');
    marker++;
    if (marker == images.length){
        marker = 0; 
    }
    img.src = images[marker].src;
    figText.textContent = figcaps[marker].textContent;
    parent.append(img);
    parent.append(figText);                        
    images[marker].classList.add('active');        
});

prev.addEventListener('click', function(){
    removeImg(); 
    let img = document.createElement('img');
    let figText = document.createElement('figcaption');    
    if (marker == 0){
        marker = images.length;
    }
    marker--;
    img.src = images[marker].src;
    figText.textContent = figcaps[marker].textContent;
    parent.append(img);
    parent.append(figText);                           
    images[marker].classList.add('active');        
}); 

function removeImg(){
    for (let imageMark of images){
        imageMark.classList.remove('active');
    }
    let imgRM = parent.querySelector('img');
    let textRM = parent.querySelector('figcaption');
    imgRM.remove();
    textRM.remove();
}     
