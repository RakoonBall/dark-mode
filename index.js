const inputEl = document.querySelector('.input');

inputEl.checked = true;

const bodyEl = document.querySelector(body);

updateBody();

console.log(inputEl.checked);

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white"
    }
};

inputEl.addEventListener('input', ()=>{
    updateBody();
})