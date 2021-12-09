'use strict';

// const body = document.querySelector("body");
// body.addEventListener('keyup', function(e){
//     // console.log(e.keyCode);
//     if (e.keyCode === 13) {
//         console.log("엔터를치셧네요");
//     }
// });

const thisIsButton = document.getElementsByClassName('comment_btn')[0];
//버튼 요소를 변수에 할당한다.
console.log(thisIsButton);

thisIsButton.addEventListener('click', function(){
//게시 라는 버튼을 클릭이라는 이벤트가 하면 콜백함수가 작동하게 한다.

    const comment = document.getElementsByClassName('input_comment')[0].value;
    //input에 담긴 값을 받아온다. 그리고 comment에 할당한다.
   
    let createComment = document.createElement("div");
    //div 요소를 생성한다. 그리고 그것은 createComment라는 변수에 할당한다. 

    createComment.innerHTML = `<strong>username:</strong> ${comment}`;
    //생성한 div에 username과 'comment'과 같이 삽입한다.

    createComment.className = 'comment';
    //comment라는 클래스를 부여한다. 이유는 css에서 comment라는 클래스들에게 마진값들을 부여하고 있었기 때문에 그것을 주기위함

    let commentInsert = document.querySelector('.total_comment');
    commentInsert.appendChild(createComment);
    //댓글이 달리는 영역의 부모 클래스를 가지고 와서 그 안의 맨마지막에 input에서 가져온 값이 담긴 변수를 삽입함으로써 댓글을 넣는다.
    
    
});



const thisIsEnter = document.querySelector('.input_comment');
//input 요소를 선택을 해서 변수에 할당한다. 위에서는 '버튼 클릭' 이벤트 였지만, 여기서는 input에서 일어나는 이벤트를 

thisIsEnter.addEventListener('keyup', function(e){
    //keyup이나 keydown 어떤 키를 눌렀는지 나타내는 코드
    console.log(e.keyCode);//Enter keycode는 13이 뜬다.
    if(e.keyCode === 13){
        // 이벤트의 key코드가 13이라면 
        //e.key === 'Enter'와 동일

        const comment = document.getElementsByClassName('input_comment')[0].value;
        //input에 입력된 댓글의 값을 받아온다.
    
        let createComment = document.createElement("div");
        createComment.innerHTML = `<strong>username:</strong> ${comment}`;
        createComment.className = 'comment';
        //div요소를 생성해서 그 안에 username과 comment를 삽입한다.

        let commentInsert = document.querySelector('.total_comment');
        return commentInsert.appendChild(createComment);
        //댓글이 달리는 영역의 부모 클래스를 가지고 와서 그 안의 맨마지막에 input에서 가져온 값이 담긴 변수를 삽입함으로써 댓글을 넣는다. 
    }
    
});
