const loginBtn = document.getElementsByClassName('loginBtn')[0];
const id = document.getElementsByClassName('id')[0];
const pw = document.getElementsByClassName('pw')[0];

id.addEventListener('keyup',()=>{
    const idV = id.value;
    (id.value.length > 0 && pw.value.length >= 5 && idV.indexOf('@')!==-1) ?
    (loginBtn.disabled = false) :
    (id.value.length === 0 || pw.value.length < 5 || idV.indexOf('@')===-1) ?
    (loginBtn.disabled = true) : false
});

pw.addEventListener('keyup',()=>{
    const idV = id.value;
    (id.value.length > 0 && pw.value.length >= 5 && idV.indexOf('@')!==-1) ?
    (loginBtn.disabled = false) :
    (id.value.length === 0 || pw.value.length < 5 || idV.indexOf('@')===-1) ?
    (loginBtn.disabled = true) : false
});

//Login 확인
loginBtn.addEventListener('click',()=>{
    if(id.value==="seungmin@gmail.com"&&pw.value==="1q2w3e4r"){
        console.log("okay");
        return window.location.href = 'main.html';
        
    }
})
