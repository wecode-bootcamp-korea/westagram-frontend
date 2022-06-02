const realID = "hasang0.0";
const realPW = "1234";

function goMain() {
    const ids = document.querySelector('.idBox').value;
    const pws = document.querySelector('.pwBox').value;

    if(ids === realID && pws === realPW){
        window.location.href = "./main.html"
        alert("nice!")
    }
    else{
        alert("아이디/비밀번호를 확인해주세요")
    }
}
window.addEventListener('keyup', function() {
    const button = document.querySelector('.login');
    const id = document.querySelector('.idBox').value;
    const pw = document.querySelector('.pwBox').value;

    if( id&&pw ){
        button.style.backgroundColor ="#0095F6";
        button.disabled = false;
    }
    else{
        button.style.backgroundColor = "#C0DFFD"
        button.className ="login";
    }
});

window.addEventListener('keyup',function(event){
    if(event.code =="Enter" || event.code =="NumpadEnter"){
        goMain();
    }
})
