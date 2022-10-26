repleAdd();

function repleAdd () {
    console.log("aa");

    let repleInput = document.querySelector('.replePost');
    let isValue;


    console.log(repleInput);

    // input recently value check
    repleInput.addEventListener('keyup',function(event){
        isValue = document.querySelector('.replePost').value;

        if ( event.code == 'Enter' ){
            console.log(isValue);
            makeReple(isValue);
        }

    });
}

// 댓글 html 만들고 추가하는 함수
function makeReple(value){
    const repleWrap = document.querySelector('.repleList');

    let makeLi = document.createElement('li');
    makeLi.innerHTML = '<b class="nickName">myp</b>';

    //makeText
    let makeText = document.createElement('span');
    makeText.classList.add('txt');
    makeText.innerHTML = value;

    //좋아요버튼
    let btnHeart = document.createElement('button');
    btnHeart.classList.add('btn');
    btnHeart.classList.add('heart');
    btnHeart.innerHTML = '<span class="blind">좋아요</span>';

    //지난시간
    let prevTime = document.createElement('p');
    prevTime.classList.add('prevTime');
    prevTime.innerHTML = '1분전';
    

    // li에 내용 추가
    makeLi.appendChild(makeText);
    makeLi.appendChild(btnHeart);
    makeLi.appendChild(prevTime);

    repleWrap.appendChild(makeLi);
    console.log(repleWrap);

}