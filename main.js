let addBtn = document.querySelector('.btn-add'),
    input = document.querySelector('.input'),
    openBtn = document.querySelector('.btn-open'),
    letter = document.querySelector('.letter'),
    result = document.querySelector('.result-holder');

addBtn.addEventListener("click" , function(){
    result.classList.remove('open');
    if(input.value){
        result.innerHTML = "";
        console.log(input.value.split());
        for(let i = 0; i < input.value.length; i++){
            result.innerHTML += '<span class="letter" onclick="this.classList.toggle(\'is-open\')">' + input.value[i] + '</span>';
        }
        input.value = "";
    }
    
    
});

openBtn.addEventListener("click" , function(){
    result.classList.toggle('open');
});
