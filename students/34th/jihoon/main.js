
function commentInputValue() {
  const commentButton = document.querySelector('.print');
  const commentValue = document.querySelector('.mainComment');

  commentButton.addEventListener('click', () => {
    // let listHtag = document.createElement('h4');
    // document.querySelector('.contentsMessage').appendChild(listHtag);
    // listHtag.innerHTML = commentValue.value;
    let commentTemp = `<div class="contentsMessageBox">
                          <p><span>Qmzmzejj</span> ${commentValue.value}</p>
                          <p class="commentDeleteButton">X</p>
                        </div>
                        <p class="gray">1시간 전</p>`;
    if (commentValue.value === "") {
      alert("댓글을 입력해주세요!");
    } else {
      document.querySelector('.contentsMessage').insertAdjacentHTML('beforeend', commentTemp);
      commentValue.value = "";
    }
  })
}
commentInputValue();

// 댓글 삭제 기능 구현 중
function commentDelete() {
  let test = document.querySelector('.contentsMessageBox');
  test.addEventListener()
};