const feedComment = document.querySelector('.feed-comment input');
const $btn = document.querySelector('.post-comment');
const commentList = document.querySelector('.feed-comment-list');

/* < 댓글 달기 >
 * 1. 글자를 입력받을 변수를 생성한다.
 * 2. 글자를 입력한다.
 * 2. 게시버튼을 누른다.
 * 3. 누르면 이벤트 발생
 * 4. 그 변수가 삽입된다. <br>
 **/



/* <댓글 달기>
 * <li><span class="font-bold"></span></li>
 **/

// 댓글 좋아요 기능
/* 1. 댓글 추가할 때 같이 아이콘을 생성해야 할듯
 * 2. <li><span class="font-bold">id</span>내용</li>
 * 3. <i class="fas fa-heart"></i> 이게 하트 아이콘
 * 4. <li><span class="font-bold">ID</span>내용<i class="fas fa-heart"></i></li>
 * */


// 댓글 추가 + 좋아요 기능
function onBtnClick() {
    event.preventDefault();
    const commentContent = feedComment.value;

    if (commentContent.length >= 1) {
        const myId = "jihyun ";
        const fontBoldClass = 'font-bold';
        const heart1 = "fas";
        const heart2 = "fa-heart";
        const trash1 = "far";
        const trash2 = "fa-trash-alt";

        let user = myId;


        let li = document.createElement('li');
        let span = document.createElement('span');
        let i = document.createElement('i');
        let i2 = document.createElement('i');


        commentList.append(li);   //    <ul><li> </li></ul>
        li.append(commentContent);     //    <ul><li><댓글 내용<li><ul>
        li.append(i);
        i.classList.add(heart1, heart2);
        li.append(i2);
        i2.classList.add(trash1, trash2);


        feedComment.value = "";


        span.append(myId);   //  <span>atom </span>

        li.prepend(span);     // 2. <li><span>atom </span></li>


        // <li><span class> atom </span>dsfsdfsfsa 내용 삽입하기 </li>


        span.classList.add(fontBoldClass);    // <span class="font-bold"></span>



        // 버튼 색깔, 커서 초기화
        $btn.style.color = "#4693a4";
        $btn.style.cursor = "default";
    }
}


// 댓글 좋아요 버튼 누르기 기능
function onLikeClick(e) {
    // e.target.style.color = "red";    // classList 가 왜 안될까  ---> 우선순위가 밀린 것
    
    if (e.target.classList.contains('fa-heart')) {
        e.target.classList.toggle("red");
        console.log(e.target.classList);
    }
}

commentList.addEventListener('click', onLikeClick);






// 글자가 1자 이상이면 버튼 색깔 바꾸기
function onBtnColorChange() {
    const inputValue = feedComment.value;
    let color = "";
    let btnCursor = "";

    if (inputValue.length >= 1) {
        color = "blue";
        btnCursor = "pointer";
    }
    else if (inputValue.length === 0) {
        color = "#4693a4";
        btnCursor = "default";
    }
    $btn.style.color = color;
    $btn.style.cursor = btnCursor;
}





// 댓글 삭제 기능
/* 
 * 1. */






function onDeleteComment(e) {
    if (e.target.tagName === 'LI') {
        console.log(e.target.children);

        for (let i = 0; i < e.target.children.length; i++) {
            console.log(e.target.children[i].className);
            if (e.target.children[i].className.contains('fa-trash-alt')){
                console.log('ddd');
            }
        }

        //if () {    // 휴지통 아이콘이 이미 있다면
            
            


        //    trashIcon.addEventListener('click', onClickTrash);
        //}
    }
}

commentList.addEventListener('mouseover', onDeleteComment);






feedComment.addEventListener('keyup', onBtnColorChange);

$btn.addEventListener('click', onBtnClick);

