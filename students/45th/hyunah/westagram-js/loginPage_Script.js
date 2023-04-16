const btn = document.getElementById('button');
const id = document.getElementById('id');
const pw =document.getElementById('password');

//// id & pw input -> button validataion (blue)
window.addEventListener('input', loginValid)

id.addEventListener('input', function(){})

pw.addEventListener('input', function(){})

function loginValid(){
    if(id.value && pw.value) {
        btn.style.backgroundColor = '#4cb5f9';
    }
}
