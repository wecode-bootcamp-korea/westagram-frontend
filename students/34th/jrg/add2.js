const comment = document.querySelector('.comment_box');
const uploadBtn = document.querySelector('.upload_btn');

const commentAddBox = document.querySelector('.comments');

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
    
    let img = document.createElement('img');
    img.setAttribute('src','https://ifh.cc/g/b41PGW.png')
    img.setAttribute('class', 'comment_size');

    img.addEventListener("click",clickLike)

    let span3 = document.createElement('button');
    span3.setAttribute('class','del_comment')
    span3.innerHTML = 'X'

    span3.addEventListener("click", deleteComment);

    div.appendChild(div2);
    div2.appendChild(span);
    div2.appendChild(span2);
    div.appendChild(img);
    div2.appendChild(span3);

    commentAddBox.appendChild(div);

    console.log(commentValue);

    commentValue=null;

};


function deleteComment(e) {
    let commentPick = e.target.parentNode.parentNode;
    commentPick.remove();
}

function clickLike(e) {
    let img = e.target;
    let heart = "https://ifh.cc/g/L7KsFY.png";
    let noHeart = "https://ifh.cc/g/b41PGW.png"

    img.src = (img.src === heart)? noHeart:heart;
}



function enterkey() {
    if(window.event.keyCode == 13 ) {
        //엔터키 눌렸을때
        comment_upload()
        comment.value=null;
    }
}


uploadBtn.addEventListener("click", comment_upload);

