const postBtn = document.querySelector(".button-style")
const postInput = document.querySelector(".feed__input")
const replyTarget = document.querySelector(".repl-section");

function appendDiv() {
    let postInputValue = postInput.value;
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(postInputValue);

    newDiv.appendChild(newContent);
    newDiv.className += "repl-setting";
    replyTarget.appendChild( newDiv );
    replyTarget.scrollTop = replyTarget.scrollHeight;
};

const inputResetAndPush = (event) => {
    event.preventDefault()
    appendDiv();
    // console.log(event)
    postInput.value = "";
}



postBtn.addEventListener('click', inputResetAndPush);

//지우고 html에 Form만 추가했는데 동일한 기능 구현됨,



// const inputResetAndPushWithEnter = (event) => {
//     event.preventDefault();
//     appendDivWithEnter();
//     postInput.value = "";
// }


// postInput.addEventListener('keypress',appendDivWithEnter)


