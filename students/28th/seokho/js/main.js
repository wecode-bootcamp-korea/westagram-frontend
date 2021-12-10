

// 댓글이 생김
let comments = document.createElement('div');

// 구조?
어디에.addEventListener('엔터 or 버튼 누름', function(){
    댓글이 생김
});

어디에.addEventListener('엔터 or 버튼 누름', function(){
    let comments = document.createElement('div');
});



댓글 input 창에 엔터치거나 "게시" 누르면 -> keydown
댓글이 생김 -> createElement 함수로 생성함

// input에 접근을 해서 

// 1. 댓글 input 창에 엔터치거나 "게시" 누르면
// 2. 댓글 추가되도록 createElement로 요소 생성해서
// 3. input에 입력한 값이 추가 되어야합니다.

// 엔터 / 게시(버튼) -> keydown 
// 댓글 추가 -> createElement
// 
// createElement 함수는 태그(element)를 만들어준다
// appendChild 함수는 자식태그로 넣어준다
// 확인은 개발자 도구의 Element에서 확인 가능
// HTML에서 텍스트가 만들어지는 것은 아님
