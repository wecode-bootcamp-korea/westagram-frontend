// input태그 변수
let claSsID = document.getElementsByClassName('id')[0];
let claSsPassword = document.getElementsByClassName('pwd')[0]
// 버튼태그 변수
let buTtonTag = document.getElementsByClassName("btn")[0]
let iD = '';
let paSsword = " ";
console.log(buTtonTag);
// input을 글씨를 썻을떄 버튼태그의 백그라운드 색을 변경


// if(//아이디만 입력했ㅡ떄){이벤트 비활성 }
// if(claSsID.length>1 && claSsPassword.length>1){ 이벤트 활성화}

// else {활성 버튼을 진한색}

// else {이벤트 비활성}

claSsID.addEventListener('keydown', logKey);

function logKey(event) {
    iD = event.target.value;
} 

claSsPassword.addEventListener('keydown', logKey2);

function logKey2(event) {
    paSsword = event.target.value;
    
    if(iD.length >-1  && paSsword.length >-1 ){ 
        console.log('ddd')
        buTtonTag.style.backgroundColor = "#196ab6";
    }
}


