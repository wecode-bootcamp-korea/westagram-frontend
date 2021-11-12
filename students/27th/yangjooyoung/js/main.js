//댓글 입력 후 엔터키를 누르거나 게시 버튼 클릭 시 댓글이 추가될 수 있도록 구현해주세요.
//함수 로직이 같은 경우 함수를 분리해서 코드를 재활용해주세요.

const commentValue = document.getElementsByClassName('comment')[0];
const commentSpace = document.querySelector('.commentSpace');


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
    const value = commentValue.value;
    const li = document.createElement('li');
    commentSpace.appendChild(li);
    li.className = "commentLi";
    
    const commentText = document.createElement('div');
    li.appendChild(commentText);
    commentText.className = "commentText";

    const commentLikes = document.createElement('div');
    li.appendChild(commentLikes);
    commentLikes.className = 'commentLikes';
    commentLikes.innerHTML = '<img src="img/likes.png" alt="" width="13px" height="13px" />';

    const user = document.createElement('div');
    commentText.appendChild(user);
    user.className = 'user';
    user.innerHTML = "j00_00";

    const text = document.createElement('div');
    text.className = 'text';
    text.innerHTML = value;
    commentText.appendChild(text);


    //const commentVal = document.createTextNode(value);
    // const commentLi = li.appendChild(value);
    // console.log(li.appendChild(commentVal));

    
    // commentSpace.appendChild(commentLi);
}


commentBtn.addEventListener('click', (e) => {
    onAdd();
    e.preventDefault();
    commentValue.value = '';
})