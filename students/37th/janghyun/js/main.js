const isInput = document.getElementById('feedInput');
const isSubmitButton = document.getElementById('submitButton');
const isFeedBoxWrap = document.getElementsByClassName('feedboxWrap')[0];
const isFeedIconWrap = document.getElementsByClassName('feedIconWrap')[0];
const isInputForm = document.getElementsByClassName('feedInputBox')[0];
const isHeartIcon = document.getElementsByClassName('heartIcon')[0];

function colorChange(e) { // 입력 값이 있을때 동작 08. 27 수정

    //console.log(e.target.style);
    let iconName = e.target.className;
    //console.log(iconName);
    //e.target.style.display = 'none';
    if(iconName === 'fa-regular fa-heart') {
        e.target.className = 'fa-solid fa-heart';
        e.target.style.color = 'red';
    } else if(iconName === 'fa-solid fa-heart') {
        e.target.className = 'fa-regular fa-heart';
        e.target.style.color = 'black';
    }

}

function deleteComment(e) { // 입력 값이 있을때 동작 08. 27 수정

    const li = e.target;
    
    li.closest("li").remove();

}

function registerComment(e) {

    e.preventDefault();
    
    const isComment = isInput.value;
    const isNewFeedBox = document.createElement('li');
    const content = `
        
            <div class="feedWrap">
                <span id="feedId">canon_mj</span>
                <span id="feed">${isComment}</span>
                <span id="feedMore">더 보기</span>
            </div>
            <div class="feedIconWrap">
                <span class="trashIcon"><i class="fa-regular fa-trash-can"></i></span>
                <span class="heartIcon"><i class="fa-regular fa-heart"></i></span>
            </div>
        
    `;

    if(isComment.length > 0) { // 입력 값이 있을때 동작 08. 27 추가

        const isFeedBox = document.querySelector('.feedBox');

        isFeedBox.appendChild(isNewFeedBox);
        isNewFeedBox.innerHTML = content;

        const isFeedDelete = document.querySelectorAll('.trashIcon'); // querySelector 는 첫번째 요소만 반환함 절대 다음 요소 선택 불가 ㅠㅠ
        const isFeedLikeColorChange = document.querySelectorAll('.heartIcon');
        const isFeedLikeColorChangeFull = document.querySelectorAll('.heartIconFull');
        
        for (const button of isFeedDelete) { // ** 중요 ** querySelectorAll은 NodeList객체를 for문으로 각각 요소에 이벤트 리스너를 추가
            button.addEventListener('click', deleteComment);
        };

        for (const button of isFeedLikeColorChange) { 
            button.addEventListener('click', colorChange);
        };

        isInput.value = '';
    }
};

isInputForm.addEventListener('submit', registerComment);