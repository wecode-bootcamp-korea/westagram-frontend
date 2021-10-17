// const commentInput = document.querySelctor(".user-input");
// const submit = document.querySelctor(".post");

// function checkInput() {
// 	if(!commentInput.value.length){
// 		alert("댓글입")
// 	}
// 	else {
// 		registerComment(commentInput.value)
// 	}
// }

// function registerComment(value) {
// 	const commentLists = document.querySelctor("feed-comments");
// 	const newCommentList = document.createElement("li");
// 	const newComment = '<span class="name">JiwanJeon</span><span>${value}</span><span class="delte">x</span>';

// 	newCommentList.innerHTML = newComment;
// 	deleteComment(newCommentList);
// 	commentLists.appendChild(newCommentList);

// 	commentInput.value="";
// }

// const init = () => {
// 	submit.addEventListener("click", checkInput)
// }

// init();

let input = document.querySelector(".user-input");
let ul = document.querySelector(".feed-comments");
let postButton = document.querySelector("#post");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //after clikcing enter, clear the space
}

function addListAfterClick() {
    console.log("click is working");
    // console.log(input.value);
    if (inputLength() > 0){
        console.log("test")
        createListElement();
    }
}


function addListAfterKeypress(event){
    // console.log(event);
    if (inputLength() > 0 && event.keycode === 13){
        createListElement();
    }
}
postButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
input.addEventListener("keyup", active)

// function active() {
// 	if(input.value.length > 0 && password.value.length > 0){
// 		postButton.style.backgroundColor='#0095F6';
// 		postButton.disabled = false; 
// 		if(postButton.disabled === false) console.log("test")
// 	} else {
// 		postButton.style.backgroundColor='#B2DFFC'
// 		postButton.disabled = true;
// 		if(postButton.disabled	=== true) console.log("test22")
//  	}
// }
