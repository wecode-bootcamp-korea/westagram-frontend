const loginBtn = document.getElementsByClassName('loginBtn')[0];
const id = document.getElementsByClassName('id')[0];
const pw = document.getElementsByClassName('pw')[0];

id.addEventListener('keyup',()=>{
    (id.value.length>=5 && pw.value.length>0) ?
    (loginBtn.disabled = false) :
    (id.value.length<5 || pw.value.length===0) ?
    (loginBtn.disabled = true) : false
});

pw.addEventListener('keyup',()=>{
    (id.value.length>=5 && pw.value.length>0) ?
    (loginBtn.disabled = false) :
    (id.value.length<5 || pw.value.length===0) ?
    (loginBtn.disabled = true) : false
});

//Login 확인
loginBtn.addEventListener('click',()=>{
    if(id.value==="1q2w3e4r"&&pw.value==="1q2w3e4r"){
        console.log("okay");
        return window.location.href = 'main.html';
        
    }
})
