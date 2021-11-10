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


function onBtnClick() {

    const commentContent = feedComment.value;
    const myId = "jihyun ";
    const fontBoldClass = 'font-bold';

    let user = myId;
    
    
    let li = document.createElement('li'); 
    let span = document.createElement('span');



    commentList.append(li);   //    <ul><li> </li></ul>
    li.append(commentContent);     //    <ul><li><댓글 내용<li><ul>
    
    feedComment.value = "";
    
       
    span.append(myId);   //  <span>atom </span>
    
    li.prepend(span);     // 2. <li><span>atom </span></li>


    // <li><span class> atom </span>dsfsdfsfsa 내용 삽입하기 </li>


    span.classList.add(fontBoldClass);    // <span class="font-bold"></span>
    
    
}


$btn.addEventListener('click', onBtnClick);

