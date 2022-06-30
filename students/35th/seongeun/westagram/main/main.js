

const comments = document.querySelector('.comments');
// const commentsComment = document.getElementsByClassName('comments-comment')[1];

// const comment = document.getElementsByClassName('comment')[1];
// const commentUserName= document.getElementsByClassName('comment_user-name')[1];
// const commentContent = document.getElementsByClassName('comment_content')[1];
// const heartI = document.getElementsByClassName('far fa-heart')[1];

const input = document.querySelector('.input-comments');
const submit = document.querySelector('.comments-btn');

input.addEventListener("keyup", () => {
        if(input.value.length !== 0){
            submit.classList.add('onBtn')
        }else{
            submit.classList.remove('onBtn')
        }
    });

//버튼 클릭시 업로드 함수 생성
submit.addEventListener("click", () => {
    if(input.value.length !== 0){
        addComment();
    }
});

//enter 눌렀을때 업로드 함수 생성
input.addEventListener("keypress", (e) =>{
    if (e.key === "Enter") {
        if(input.value.length !== 0){
            addComment();
        }
    }
} );


//input에 쓴 코멘트를 페이지에 업
function addComment() {
    const comments = document.querySelector('.comments');
    const inputcomment = input.value;
    //  let newComment1 = document.createElement('div');
    // newComment1.className="comments-comment";
    const newComment =  `<div class="comments-comment">
    <div class="comment">
    <span class="comment_user-name">whoAmI</span>
    <p class="comment_content">${inputcomment}</p>
</div>
<i class="far fa-heart"></i>`;

    comments.appendChild(newComment);
       
        // comments.appendChild(newComment1)
        input.value = "";

    console.log(newComment1);







    // let newComment1 = document.createElement('div');
    //     newComment1.className="comments-comment";
    //     newComment1.innerHTML = 
    //     `<div class="comment">
    //         <span class="comment_user-name">whoAmI</span>
    //         <p class="comment_content">${inputcomment}</p>
    //     </div>
    //         <i class="far fa-heart"></i>`
    //         comments.appendChild(newComment1)
    //         input.value = "";
    


        
    }
    

// 



        function createComment (event) {
            if(input.value){
                if(event.key === 'Enter') {
                let newComment1 = document.createElement('div');
            newComment1.className="'comments-comment";
            comments.appendChild(newComment1)
            newComment1.innerHTML = input.value;
            input.value = "";
            }
        }
        }
        input.addEventListener('keyup',createComment)






// function addComment() {
//     comments.append(commentsComment);
//     commentsComment.append(comment);
//     comment.append(commentUserName);
//     comment.append(commentContent);
//     commentsComment.append(heartI);


// }

// input.addEventListener('keyup', addComment())



// const addComment = () => {
//     const text = inputComments.value;
// }

// inputBtn.addEventListener('click', () =>{
//     addComment();
// }); 






// function writeComments() {
//     if(inputComments.value.length>1){
//             inputBtn.classList.add('onBtn');

//             let addCommentWrap = document.createElement("div");
//             let addComment = document.createElement('div');
//             let addUserName = document.createElement('span');
//             let addContent = document.createElement('p');
//             let addIcon = document.createElement('i');
            
//             addCommentWrap.className = "comments-comment";
//             addComment.className = "comment";
//             addUserName.className = "comment_user-name";    
//             addContent.className = "comment_content";
//             addIcon.className = "far fa-heart";

//             inputComments.addEventListener('keydown', function(e) {
//                 writeComments();
//                 if (e.key === 'Enter') {
            
//                 comments.appendChild(addCommentWrap);
//                 addCommentWrap.appendChild(addComment);
//                 addCommentWrap.appendChild(addIcon);
//                 addComment.appendChild(addUserName);
//                 addComment.appendChild(addContent);
            
//                 addUserName.innerText = "Calcifer";
//                 addContent.innerText = inputComments.value;
                    
//                 } else {
//                     return;
//                 }
//             })

//         }else if(inputComments.value.length == 0)
//         inputBtn.classList.remove('onBtn');
    
// }






    //  게시버튼 활성화
    





    // function inputValueToContent() { 
    //     //input 내용을 content 안에 넣어준다
    //     content.innerText = inputComments.value;
    //     console.log(content)
    // }
    // inputValueToContent()
    


// inputComments.addEventListener('keyup', writeComments)
// inputComments.value = "";

