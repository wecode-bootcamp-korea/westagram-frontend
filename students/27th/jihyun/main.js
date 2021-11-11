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

// ��� ���ƿ� ���
/* 1. ��� �߰��� �� ���� �������� �����ؾ� �ҵ�
 * 2. <li><span class="font-bold">id</span>����</li>
 * 3. <i class="fas fa-heart"></i> �̰� ��Ʈ ������
 * 4. <li><span class="font-bold">ID</span>����<i class="fas fa-heart"></i></li>
 * */


// ��� �߰� + ���ƿ� ���
function onBtnClick() {
    event.preventDefault();
    const commentContent = feedComment.value;

    if (commentContent.length >= 1) {
        const myId = "jihyun ";
        const fontBoldClass = 'font-bold';
        const heart1 = "fas";
        const heart2 = "fa-heart";

        let user = myId;


        let li = document.createElement('li');
        let span = document.createElement('span');
        let i = document.createElement('i');


        commentList.append(li);   //    <ul><li> </li></ul>
        li.append(commentContent);     //    <ul><li><��� ����<li><ul>
        li.append(i);
        i.classList.add(heart1, heart2);


        feedComment.value = "";


        span.append(myId);   //  <span>atom </span>

        li.prepend(span);     // 2. <li><span>atom </span></li>


        // <li><span class> atom </span>dsfsdfsfsa ���� �����ϱ� </li>


        span.classList.add(fontBoldClass);    // <span class="font-bold"></span>



        // ��ư ����, Ŀ�� �ʱ�ȭ
        $btn.style.color = "#4693a4";
        $btn.style.cursor = "default";
    }
}


// ��� ���ƿ� ��ư ������ ���
function onLikeClick(e) {
    // e.target.style.color = "red";    // classList �� �� �ȵɱ�  ---> �켱������ �и� ��
    if (e.target.tagName === 'I') {
        e.target.classList.toggle("red");
    }
}

commentList.addEventListener('click', onLikeClick);






// ���ڰ� 1�� �̻��̸� ��ư ���� �ٲٱ�
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





// ��� ���� ���
/* 1. ���콺�� �����ϸ� ���� ��ư�� �����.
 * 1-1. ���� ��ư�� ���� x �� ����.
 * 1-2. <li><span class> atom </span>dsfsdfsfsa ���� �����ϱ� <i></i></li>
 * 2. �� ���� ��ư�� ������ ���� �Ǿ�����.
 * */

function onDeleteComment(e) {
    if (e.target.tagName === 'LI') {
        console.log(e.target);
        const span = document.createElement('span');

    }
}

commentList.addEventListener('mouseover', onDeleteComment);







feedComment.addEventListener('keyup', onBtnColorChange);

$btn.addEventListener('click', onBtnClick);

