
function repleAdd () {
    let postBtn = document.querySelector('.post');
    let repleInput = document.querySelector('.replePost');
    let isValue;

    // input recently value check
    repleInput.addEventListener('keyup',function(event){
        isValue = document.querySelector('.replePost').value;

        if ( (event.code == 'Enter') && (isValue.length > 0) ){
            makeReple(isValue);
            repleInput.value = null;
            postBtn.classList.remove('active');
        } else if (isValue.length > 0) {
            postBtn.classList.add('active');
        } else if (isValue.length == 0) {
            postBtn.classList.remove('active');
        }
    });

    // 게시버튼 클릭시 댓글 추가 기능
    postBtn.addEventListener('click',function(event){
        isValue = document.querySelector('.replePost').value;

        if ( (event) && (isValue.length > 0) ){
            makeReple(isValue);
            repleInput.value = null;
            postBtn.classList.remove('active');
        } else if (isValue.length > 0) {
            postBtn.classList.add('active');
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

}

// 함수호출모음
repleAdd();
