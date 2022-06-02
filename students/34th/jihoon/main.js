function commentInputValue() {
  const commentButton = document.querySelector('.print');
  const commentValue = document.querySelector('.mainComment');

  commentButton.addEventListener('click', () => {
    // let listHtag = document.createElement('h4');
    let commentTemp = `<p><span>Qmzmzmbti</span> ${commentValue.value}</p>
                    <p class="gray">1시간 전</p>`;
    if (commentValue.value === "") {
      alert("댓글을 입력해주세요!");
    } else {
      // document.querySelector('.contentsMessage').appendChild(listHtag);
      // listHtag.innerHTML = commentValue.value;
      document.querySelector('.contentsMessage').insertAdjacentHTML('beforeend', commentTemp);
      commentValue.value = "";
      // document.querySelector('.mainLeftContents').style.height = "300px";
      // 댓글처럼 나오긴 하는데 댓글이 늘어난 만큼 박스크기가 늘어나지 않음;
    }
  })
}
commentInputValue();

