const feedComment = document.querySelector('.feed-comment input');
const $btn = document.querySelector('.post-comment');
const commentList = document.querySelector('.feed-comment-list');

/* < ��� �ޱ� >
 * 1. ���ڸ� �Է¹��� ������ �����Ѵ�.
 * 2. ���ڸ� �Է��Ѵ�.
 * 2. �Խù�ư�� ������.
 * 3. ������ �̺�Ʈ �߻�
 * 4. �� ������ ���Եȴ�. <br>
 **/



/* <��� �ޱ�>
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
    li.append(commentContent);     //    <ul><li><��� ����<li><ul>
    
    feedComment.value = "";
    
       
    span.append(myId);   //  <span>atom </span>
    
    li.prepend(span);     // 2. <li><span>atom </span></li>


    // <li><span class> atom </span>dsfsdfsfsa ���� �����ϱ� </li>


    span.classList.add(fontBoldClass);    // <span class="font-bold"></span>
    
    
}


$btn.addEventListener('click', onBtnClick);

