// Input 텍스트 입력시 버튼 활성화
let idInput = document.getElementsByClassName('boxProperty')[0];
let pwInput= document.getElementsByClassName('boxProperty')[1];

document.addEventListener('keyup', function() {
    if (idInput.value && pwInput.value) {                 
        let color = document.getElementById('btn');
        color.style.backgroundColor = "#0095F6";
    }
});



