const inp = document.querySelector('.inp');
const saveBtn = document.querySelector('.save');
const reflect = document.querySelector('.ref');



function save(){
    localStorage.setItem('InputValue',inp.value);
    reflect.innerText = inp.value;
    inp.value = "";
}


saveBtn.addEventListener('click',save);