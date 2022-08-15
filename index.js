const inputEl = document.querySelector('.input');

const bodyEl = document.querySelector("body");
(localStorage.getItem('mode'))
inputEl.checked = JSON.parse;

updateBody();

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

function updateLocalStorage(){
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}