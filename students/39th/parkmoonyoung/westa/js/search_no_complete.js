
// 함수호출모음
repleAdd();
searchResult();

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


// 검색창- 검색에 필요한 아이디 데이터
let idData = ['user1','user2','user3','myp1','user4','myp2','myp3'];

// 검색창 - 아이디 검색시 맞는 아이디 목록창 뜨는 기능
function searchResult () {
    let searchInput = document.querySelector('.mainSearch');
    let searchResultBox = document.querySelector('.searchResultBox');
    let searchResultParent = document.querySelector('.searchResultBox > ul');

    let isSearchValue;

    searchInput.addEventListener('keyup',function(){
        isSearchValue = searchInput.value;

        console.log(isSearchValue.length);

        idData.map(function(element){
            // 서치박스 논/블록 
            if ( element.includes(isSearchValue) && (isSearchValue.length > 0) ) {
                console.log('element: ' + element);
                console.log('isSearchValue: ' + isSearchValue);
                console.log('searchResultBox: ' + searchResultBox.innerHTML);

                searchResultBox.classList.add('active');

                // li 생성하여 추가하는 방식  - 보류1
                searchUserList (searchResultParent, element);

            } else {
                searchResultBox.classList.remove('active');
            }
        });
    });
}

// 검색창 아이디 리스트 동적 생성 기능 - 보류1
function searchUserList (searchResultParent, userId) {
    
    let makeLi = document.createElement('li');
    let makeB = document.createElement('b');
    let _li = searchResultParent.appendChild(makeLi);
    let _b = _li.appendChild(makeB);
    _b.classList.add('searchId');
    _b.innerHTML = userId;
}