"use strict";

//comments를 삽입할 부모노드
let $bottom = document.querySelectorAll('.bottom');
//comments를 삽입하고 싶은 위치 바로 뒤의 노드
let $timeAgo = document.querySelectorAll('.time-ago');

let $input = document.querySelectorAll('.do-input');
let $button = document.querySelectorAll('.input-button');
let $commentsForm = document.querySelectorAll('.input-comments');

for (let n = 0; n < $commentsForm.length; n++) {

    //댓글 '게시' 버튼 활성화
    const activeCommentsBtn = () => {

        //댓글이 작성되면
        if ($input[n].value) {
            //'게시'버튼 활성화
            $button[n].disabled = false;
            //색 진하게 변경
            $button[n].classList.add('active');
        } else if (!$input[n].value) {
            $button[n].disabled = true;
            $button[n].classList.remove('active');
        }
    }

    //댓글 기능 (Form 구성 > 입력 내용 받기 > 전송)
    const sendComments = (e) => {
        // 댓글 Form 작성
        /*
        <div class="comments flex">
            <span class="user-id">Yelihi</span>
            <span class="details">대박이군요~!</span>
        </div> 
        */
        e.preventDefault();

        const $comments = document.createElement('div');
        $comments.classList.add("comments");
        const $userId = document.createElement('span');
        $userId.classList.add('user-id');
        const $details = document.createElement('span');
        $details.classList.add('details');

        $comments.appendChild($userId);
        $comments.appendChild($details);
        //comments노드를 bottom노드의 자식노드인 timeAgo노드 앞에 붙이기
        $bottom[n].insertBefore($comments, $timeAgo[n]);

        //comments 내용 작성
        $userId.innerText = "m.minzzy";
        $details.innerText = $input[n].value;

        //input창의 내용 삭제
        $input[n].value = "";
    }

    //피드가 여러개로 늘어나도 댓글 기능이 가능하도록 반복문 활용
    $commentsForm[n].addEventListener('keyup', activeCommentsBtn);
    $commentsForm[n].addEventListener('submit', sendComments);
}
