const loginBtn = document.getElementById('loginBtn');
const id = document.getElementById('id');
const pw = document.getElementById('pw');

//btn 활성화
id.addEventListener('keyup',()=>{
    const idValue = document.getElementById('id').value;
    const pwValue = document.getElementById('pw').value;

    if(idValue.length>0 && pwValue.length>0){
        console.log(idValue.length);
        return loginBtn.disabled = false;
        
    }
    if(idValue.length===0 || pwValue.length===0){
        console.log(idValue.length);
        return loginBtn.disabled = true;
    }
})
pw.addEventListener('keyup',()=>{
    const idValue = document.getElementById('id').value;
    const pwValue = document.getElementById('pw').value;

    if(idValue.length>0 && pwValue.length>0){
        return loginBtn.disabled = false;
    }
    if(idValue.length ===0 || pwValue.length===0){
        return loginBtn.disabled = true;
    }
})

//Login 확인
loginBtn.addEventListener('click',()=>{
    const idValue = document.getElementById('id').value;
    const pwValue = document.getElementById('pw').value;

    if(idValue==="1q2w3e4r"&&pwValue==="1q2w3e4r"){
        console.log("okay");
        return window.location.href = 'main.html';

    }
})
