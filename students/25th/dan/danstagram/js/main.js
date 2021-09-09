
// 댓글 input 창에 엔터치거나 
// "게시" 누르면
// 댓글 추가되도록 createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다

const getComment = document.getElementById('list_comment');
const getNewComment = document.getElementById('new_comment');
const postComment = document.getElementById('btn_post');

postComment.addEventListener('click', addComment);
getNewComment.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addComment()
    }
});

function addComment(){
    const listComment = document.getElementById('list_comment')

    // 새 코멘트 공간만들어서 코멘트 리스트에 추가
    const newCommentTxt = document.createElement('p');
    newCommentTxt.classList.add('txt_comment');

    //위치 중요)input에 적힌 값 할당
    const getNewCommentTxt = getNewComment.value;

    // 코멘트 안에 출력될 ID 공간
    newCommentTxt.innerHTML = '<a href="#n" class="txt_id">follow ID</a>';

    // 코멘트 안에 출력될 내용
    let span = document.createElement("span")
    newCommentTxt.append(span)
    newCommentTxt.lastChild.innerText = getNewCommentTxt;

    // 코멘트 리스트에 추가
    getComment.appendChild(newCommentTxt)
    console.log(getNewComment)

    // 코멘트 리스트에 추가되면 input비움
    getNewComment.value = ''
    //document.getElementById("list_comment").innerText = getNewComment;
}