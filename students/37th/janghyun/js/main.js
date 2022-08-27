const isInput = document.getElementById('feedInput');
const isSubmitButton = document.getElementById('submitButton');
const isFeedBoxWrap = document.getElementsByClassName('feedboxWrap')[0];
const isFeedIconWrap = document.getElementsByClassName('feedIconWrap')[0];
const isInputForm = document.getElementsByClassName('feedInputBox')[0];
const isHeartIcon = document.getElementsByClassName('heartIcon')[0];
const isHeartIconFull = document.querySelector('.heartIconFull');

function deleteComment(e) {

    const li = e.target;
    
    e.target.closest("li").remove();

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
                <span class="heartIconFull"><i class="fa-solid fa-heart"></i></span>
            </div>
        
    `;

    if(isComment.length > 0) { // 입력 값이 있을때 동작 08. 27 추가

        const isFeedBox = document.querySelector('.feedBox');

        isFeedBox.appendChild(isNewFeedBox);
        isNewFeedBox.innerHTML = content;

        const isFeedDelete = document.querySelectorAll('.trashIcon'); // querySelector 는 첫번째 요소만 반환함 절대 다음 요소 선택 불가 ㅠㅠ
        
        for (const button of isFeedDelete) { // ** 중요 ** querySelectorAll은 NodeList객체를 for문으로 각각 요소에 이벤트 리스너를 추가
            button.addEventListener('click', deleteComment);
        }

        isInput.value = '';
    }
};




isInputForm.addEventListener('submit', registerComment);
// isFeedIconWrap.addEventListener('click', changeColor);