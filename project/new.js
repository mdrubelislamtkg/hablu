const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');

btn_1.addEventListener('click', function(){
    btn_2.classList.add('red')
})
btn_2.addEventListener('click', function(){
    btn_1.classList.add('green')
})
        