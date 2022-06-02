const comment = document.querySelector('.comment_box');
const uploadBtn = document.querySelector('.upload_btn');

const commentAddBox = document.querySelector('.comments');

// const deleteBtn = document.querySelector();



uploadBtn.addEventListener("click", comment_upload);

function comment_upload(event) {
    let commentValue = comment.value;
    let div = document.createElement('div')
    div.setAttribute('class','comment_personal')
    let div2 = document.createElement('div');

    let span = document.createElement('span')
    span.setAttribute('class','profile_name')
    span.innerHTML = 'wecode'
    let span2 = document.createElement('span')

    span2.innerHTML = ` ${commentValue}`;
    
    // 검색한 후에 내용 없애야함
    commentValue="";

    let img = document.createElement('img');
    img.setAttribute('src','https://ifh.cc/g/b41PGW.png')
    img.setAttribute('class', 'comment_size');

    // let button = document.createElement('button');
    // button.innerHTML = 'X'
    

//                         <div class="comment_personal">
//     <div>
//     <span class="profile_name">neceosecius</span>
//     <span>거봐 좋았잖아~~~~~!!</span>
// </div>
// <img alt="like" src="https://ifh.cc/g/b41PGW.png" class="comment_size">
// </div>


    div.appendChild(div2);
    div2.appendChild(span);
    div2.appendChild(span2);
    div.appendChild(img);

    commentAddBox.appendChild(div);
    const likeBtn = document.querySelector('.comment_size');
    console.log(likeBtn);
}

// likeBtn.addEventListener('onclick',clickLike)

function clickLike(event) {
    console.log(event.target);
    likeBtn.setAttribute('src','https://ifh.cc/g/L7KsFY.png')
    console.log("click")
}

function enterkey() {
    if(window.event.keyCode == 13 ) {
        //엔터키 눌렸을때
        comment_upload()
    }
}