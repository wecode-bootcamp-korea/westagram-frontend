

// #0095F6#0095F6#0095F6

const inputId = document.getElementsByClassName('input_id')[0];
const inputPw = document.getElementsByClassName('input_pw')[0];
const inputBtn = document.getElementsByClassName('btnOn')[0];


function btnOn(){
    const id = inputId.value;
    const pw = inputPw.value;

    if(id && pw){
        inputBtn.classList.remove('btnOff');
    }else{
        inputBtn.classList.add('btnOff');
    }
};
inputId.addEventListener('keyup', btnOn);
inputPw.addEventListener('keyup', btnOn);

