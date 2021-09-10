
document.getElementById("event-handler").addEventListener("keypress",function(e){
// enter 키 입력시 댓글을 comment-insert div 안에 삽입시켜주는 함수
    if(e.key === "Enter"){
        let getComment = document.getElementById("event-handler").value;
        //event-handler 라는 아이디를 가지고있는  input창에 입력된 값을 getComment 라는 변수에 저장
        let inputComment = document.createElement("P");
        //createElement 를 통해 paragraph 를 생성
        inputComment.innerHTML = getComment;
        //innterHTML 을 통해 생성된 pragraph에 getComment 의 내용을 추가
        const location = document.getElementById("comment-insert");
        // 삽입할 위치인 comment-insert div 의 위치를 변수에 저장 
        location.appendChild(inputComment);
        // appendChild 를 통해 해당 로케이션에 추가
    }
});
document.getElementById("button-id").addEventListener("click",function(){
// 게시버튼 클릭시 댓글을 comment-insert div 안에 삽입시켜주는 함수
        let getComment = document.getElementById("event-handler").value;
        let inputComment = document.createElement("P");
        inputComment.innerHTML = getComment;
        const location = document.getElementById("comment-insert");
        location.appendChild(inputComment);
});