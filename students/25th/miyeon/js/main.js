const commentList = document.querySelector('.commentList'); // 댓글 목록
const inputEl = document.querySelector('.comment'); // 댓글 입력 인풋창
const uploadClick = document.querySelector('#textUpload'); // 댓글 입력 버튼
const searchInput = document.querySelector('.searchBar'); // 헤더 상단 검색창

// 댓글창에 값이 있을 때와 없을 때의 색상 변경 함수
function btnColorChange() {
    if (inputEl.value) {
        uploadClick.style.color = "#0095f6";
    } else if (inputEl.value == "") { // null !== "" 공백이 있으면 버튼 비활성화
        uploadClick.style.color = "#b9def7";
    }
}

// 댓글 입력 버튼을 클릭했을 때 댓글 업로드 함수
function btnClick() {
    if (inputEl.value == "") { // null !== "" 공백이 있으면 버튼 비활성화
        const notActive = `{$uploadClick}`.attr('disabled');
        notActive = false;
    } else {
    const createEl = document.createElement("li");
    createEl.innerHTML = `<b>buzzi_nyang</b>&nbsp; ` + inputEl.value;
    commentList.appendChild(createEl);
    inputEl.value = null;
    btnColorChange();
    }
}

// 필수 기능 구현
inputEl.addEventListener('keyup', btnColorChange)
uploadClick.addEventListener('click', btnClick);
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btnClick();
    }
}); // 엔터 치면 댓글 업로드하는 함수

// 추가 기능 구현
searchInput.addEventListener('keyup', () => {
    const searchIcon = document.querySelector('.searchIcon');
    const centerBar = document.querySelector('.centerBar');
    if (searchInput.value.length > 0) {
        searchIcon.style.display = 'none'; // 비활성화
    } else if (searchInput.value.length == 0) {
        searchIcon.style.display = '';     // 활성화
        }
}) // 헤더의 검색창에 입력시 돋보기 아이콘 활성화, 미입력시 비활성화