//댓글 입력 후 엔터키를 누르거나 게시 버튼 클릭 시 댓글이 추가될 수 있도록 구현해주세요.
//함수 로직이 같은 경우 함수를 분리해서 코드를 재활용해주세요.

const commentValue = document.getElementsByClassName('comment')[0];
const commentSpace = document.querySelector('.commentSpace li');

const commentBtn = document.getElementsByClassName('commentBtn')[0];
const feedForm = document.getElementsByClassName('feedForm')[0];
console.log(commentValue);
console.log(commentSpace);
console.log(commentBtn);

// if(commentValue.value) {


//     commentSpace.appendChild(commentValue);
// }

// commentBtn.addEventListener('click', function(e){
//     const commentVal = commentValue.value;
//     const newComment = document.createElement('li');

//     if(commentVal) {
//         newComment.append(commentVal);
//     }
// })

const onAdd = () => {
    const commentVal = commentValue.value;
    // const commentListSpace = commentSpace.createElement('li');
    if( commentVal ) {
        commentSpace.append(commentVal);
    }
}

commentBtn.addEventListener('click', (e) => {
    onAdd();
    e.preventDefault();
})