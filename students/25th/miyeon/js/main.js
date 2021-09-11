const commentList = document.querySelector('.commentList');
const inputEl = document.querySelector('.comment');
const uploadClick = document.querySelector('#textUpload');

inputEl.addEventListener('keyup', btnColorChange)
uploadClick.addEventListener('click', btnClick);
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btnClick();
    }
}); // 엔터 치면 댓글 업로드하는 함수

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