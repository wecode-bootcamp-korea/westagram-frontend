

const Btn = document.querySelector(".button-style")
const Input = document.querySelector(".feed__input")


function registerComment() {
    let InputValue = Input.value;
    let commentLists = document.getElementById("repl-section");
    let newCommentList = document.createElement("li");
    // console.log("commentLists:", commentLists)
    let newUserId = document.createElement("span");


    newUserId.className = "name1";
    newUserId.innerText = "wecode36";

    let commentValue = document.createElement("span");
    commentValue.innerText = InputValue


    // newSpan.appendChild(newContent);
    // newSpan.className += "repl-setting";
    // reply.appendChild(newSpan);
    newCommentList.appendChild(newUserId);
    newCommentList.appendChild(commentValue);
    commentLists.appendChild(newCommentList);
    
    commentLists.scrollTop = commentLists.scrollHeight;
};

const inputReset = (event) => {
    event.preventDefault();
    registerComment();
    // console.log(event)
    Input.value = "";
}



Btn.addEventListener('click', inputReset);

// 멘토님이 작성한 방식
//refactoring