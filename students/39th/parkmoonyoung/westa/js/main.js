
// 함수호출모음
repleAdd();

// 댓글 추가 함수
function repleAdd () {
    let postBtn = document.querySelector('.post');
    let repleInput = document.querySelector('.replePost');
    let deleteBtn = document.querySelectorAll('.delete');
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

    prevHeartToggle();
    repleDelete(deleteBtn);

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

    //삭제 버튼
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn');
    btnDelete.classList.add('delete');
    btnDelete.innerHTML = '<span class="blind">삭제</span>';

    //지난시간
    let prevTime = document.createElement('p');
    prevTime.classList.add('prevTime');
    prevTime.innerHTML = '1분전';
    
    // li에 내용 추가
    makeLi.appendChild(makeText);
    makeLi.appendChild(btnHeart);
    makeLi.appendChild(btnDelete);
    makeLi.appendChild(prevTime);

    repleWrap.appendChild(makeLi);

    // 좋아요 토글 이벤트
    btnHeart.addEventListener('click',function(){
        heartToggle(btnHeart);
    });

    // 추가된 리플에서 삭제버튼 클릭시 리플삭제 기능
    addRepleDelete(btnDelete);

}

// 추가된 댓글-좋아요 토글 기능
function heartToggle(status){
    if ( status.classList.contains('on') ){
        status.classList.remove('on');
    } else {
        status.classList.add('on');
    }
}

//기존 댓글-좋아요 토글 기능
function prevHeartToggle(){

    let prevRepleUl = document.querySelector('.repleList');
    let prevRepleLi = prevRepleUl.children; // li의 Arr

    for (var i = 0; i < prevRepleLi.length; i++) {
        let isHeartBtn = prevRepleLi[i].getElementsByClassName('heart')[0];
        let _this;
        isHeartBtn.addEventListener('click',function(){
            _this = this;
            if ( _this.classList.contains('on') ){
                _this.classList.remove('on');
            } else {
                _this.classList.add('on');
            }
        });
    }
}

// 기존댓글-삭제 기능
function repleDelete(deleteBtnArr){
    let _this;
    let deleteReple;
    
    deleteBtnArr.forEach(function(deleteBtn){
        deleteBtn.addEventListener('click',function(){
            _this = this;
            deleteReple = _this.parentNode;

            deleteReple.innerHTML = null;
            
        });
    });
}

// 추가된 댓글-삭제 기능
function addRepleDelete(status){
    status.addEventListener('click',function(){
        let _this = this;
        let deleteReple = this.parentNode;

        deleteReple.innerHTML = null;
    });
}