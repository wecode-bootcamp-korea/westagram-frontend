
const id = document.getElementById('userId');
const pw = document.getElementById('password');
const btn = document.getElementById('btn');

const btnColor = btn.querySelector('button').children;
console.log(btn)

document.addEventListener('click', function(){
    if( (id.value !== '') && (pw.value !== '') ) {

        btnColor.style.backgroundColor = '#0094f6';
    } else {
        btnColor.style.backgroundColor = '#0094f656';
    }
})



