let pluss = document.querySelector('.plus');
let minuss = document.querySelector('.minus');
let num = document.querySelector('#number');
let number2 = 0;

pluss.addEventListener("click", function(){

    num.innerText = ++number2;
})

minuss.addEventListener("click",function(){
    if(number2 !== 0)
    num.innerText = --number2;
})