//comments를 삽입할 부모노드
let $bottom = document.querySelectorAll('.bottom');
//comments를 삽입하고 싶은 위치 바로 뒤의 노드
let $timeAgo = document.querySelectorAll('.time-ago');

let $input = document.querySelectorAll('.do-input');
let $button = document.querySelectorAll('.input-button');
let $commentsForm = document.querySelectorAll('.input-comments');

//댓글이 피드의 갯수만큼 달아지도록 반복문을 사용함
for(let n = 0; n < $commentsForm.length; n++){

    //댓글이 작성되면 '게시' 버튼 활성화 & 색 진하게 변화
    $commentsForm[n].addEventListener('keyup', () => {

        //댓글이 작성되면
        if($input[n].value){
            //'게시'버튼 활성화
            $button[n].disabled = false;
            //색 진하게
            $button[n].classList.add('active');
        } else if(!$input[n].value){
            $button[n].disabled = true;
            $button[n].classList.remove('active');
        }
    });

    //댓글 Form 작성 > 내용 작성 > 전송
    $commentsForm[n].addEventListener('submit', (e) => {
        //submit 후 새로고침 막기
        e.preventDefault();

        // 댓글 Form 작성
        /*
        <div class="comments flex">
            <div class="user-id">Yelihi</div>
            <div class="details">대박이군요~!</div>
        </div> 
        */
        const $comments = document.createElement('div');
        $comments.classList.add("comments");
        const $userId = document.createElement('span');
        $userId.classList.add('user-id');
        const $details = document.createElement('span');
        $details.classList.add('details');

        //comments 내용 작성
        $userId.innerHTML = "m.minzzy";
        $comments.appendChild($userId);
        $details.innerHTML = $input[n].value;
        $comments.appendChild($details);

        //comments노드를 bottom노드의 자식노드인 timeAgo노드 앞에 붙여라
        $bottom[n].insertBefore($comments, $timeAgo[n]);

        //input창의 내용 삭제
        $input[n].value = "";
    });
}