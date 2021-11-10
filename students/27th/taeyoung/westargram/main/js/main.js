const getRecomment = document.querySelector('.recommnetInput');
const recommentButton = document.querySelector('.recommnetBt');
const commentBox = document.querySelector('.feedComment');

// 엔터 눌렀을 때 댓글 달기
function getComment(e) {

    if (e.keyCode === 13) {
        
        let container = document.createElement('div'); // 다음 댓글 전체 영역
        let nickname = document.createElement('span'); // 작성자 이름 영역
        let comment = document.createElement('span'); // 댓글 영역
        let time = document.createElement('span'); // 시간 영역


        commentBox.appendChild(container); //commentBox에 div를 자식요소로 넣는다
        container.appendChild(nickname); // Container에 닉네임을 자식요소로
        container.appendChild(comment); // comment 닉네임을 자식요소로
        container.appendChild(time); // Container에 타임을 자식요소로

        nickname.innerHTML = "taeyong";
        comment.innerHTML = getRecomment.value;
        time.innerHTML = "1시간 전";

        container.className = "feedCommentLeft";
        nickname.className = "feedUserName";
        comment.className = "moreComment";
        time.className = "feedTime";

        getRecomment.value = '';
    }
};

// 게시버튼 눌렀을 때 댓글 달기
function gettComment() {

    if (getRecomment) {
        
        let container = document.createElement('div'); // 다음 댓글 전체 영역
        let nickname = document.createElement('span'); // 작성자 이름 영역
        let comment = document.createElement('span'); // 댓글 영역
        let time = document.createElement('span'); // 시간 영역


        commentBox.appendChild(container); //commentBox에 div를 자식요소로 넣는다
        container.appendChild(nickname); // Container에 닉네임을 자식요소로
        container.appendChild(comment); // comment 닉네임을 자식요소로
        container.appendChild(time); // Container에 타임을 자식요소로

        nickname.innerHTML = "taeyong";
        comment.innerHTML = getRecomment.value;
        time.innerHTML = "1시간 전";

        container.className = "feedCommentLeft";
        nickname.className = "feedUserName";
        comment.className = "moreComment";
        time.className = "feedTime";

        getRecomment.value = '';
    }
};

getRecomment.addEventListener('keyup', getComment);
recommentButton.addEventListener('click', gettComment);


//버튼, 인풋, 댓글 작성칸, 

//키보드 input의 value를 받아오기
// 게시버튼 또는 엔터를 눌렀을 때 
//value의 값을 특정 위치에 추가

// 댓글의 value가 없다면
// 아무런 기능을 하지 않는다.