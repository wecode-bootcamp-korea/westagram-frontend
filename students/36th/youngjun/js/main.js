const comment = document.querySelector(".comment")
const submit = document.querySelector(".submitCommentBtn")
const commentInput = document.querySelector(".commentInput");
const commentContent = document.querySelector(".commentContent");
const logoImg = document.querySelector("#logoImg");
const emptyHeartImg = document.getElementsByClassName('emptyHeartImg')
const commentsIcon = document.querySelector('.commentsIcon')
const seeMoreImg = document.querySelector('.seeMoreImg')

logoImg.addEventListener('click', ()=>{
	location.href = "./login.html"
});

Array.from(emptyHeartImg).forEach(function(emptyHeartImg) {
	emptyHeartImg.addEventListener('click', ()=>{
		emptyHeartImg.remove();
		commentsIcon.innerHTML=
		`              
		<img id = "filledHeartImg" src = "img/heart (1).png" alt = "filledHeartImg">
		<img src = "img/See_More.png" alt = "seeMoreImg">
		`
	});
})

// for (const i in emptyHeartImg) {
// 	// if (Object.hasOwnProperty.call(emptyHeartImg, key)) {
// 	// 	const element = emptyHeartImg[key];
// 	// 	console.log(element)
// 	// }

// 		emptyHeartImg.addEventListener('click', ()=>{
// 		emptyHeartImg.remove();
// 		commentsIcon.innerHTML=
// 		`              
// 		<img id = "filledHeartImg" src = "img/heart (1).png" alt = "filledHeartImg">
// 		<img src = "img/See_More.png" alt = "seeMoreImg">
// 		`
// 	});
// }

// for(var i=0; i < emptyHeartImg.length; i++){
// 	emptyHeartImg[i].addEventListener("click",function(){
// 			console.log(i);
// });
// }

// Array.from(commentInput).forEach(function(commentInput) {
// 	Array.from(commentContent).forEach(function(commentContent) {
// 		commentInput.addEventListener('keypress', (e)=>{
// 			if(e.key === 'Enter'){
// 				createDiv(commentInput.value,commentContent);
// 			}
// 		});
// 	});
// });

// Array.from(commentInput).forEach(function(commentInput) {
// 	Array.from(commentContent).forEach(function(commentContent) {
// 		submit.addEventListener('click', ()=>{
// 			createDiv(commentInput.value,commentContent);
// 		});
// 	});
// });

submit.addEventListener('click', ()=>{
	createDiv(commentInput.value,commentContent);
});

commentInput.addEventListener('keypress', (e)=>{
	if(e.key === 'Enter'){
		createDiv(commentInput.value,commentContent);
		commentInput.value = ""
	}
});

seeMoreImg.addEventListener('click', ()=>{
	comment.remove();
});


function createDiv(value,commentContent) {
	
  const newCommentDiv = document.createElement('div');
	newCommentDiv.classList.add('comment');

	// const newCommentHead = document.createElement('div');
	// newCommentHead.classList.add('commentHead');

	// const commentNickname = document.createElement('div');
	// commentNickname.classList.add('commentName');

	// const commentP = document.createElement('p');
	// const commentValue = document.createTextNode(value);

	// newCommentDiv.appendChild(newCommentHead)
	// commentNickname.appendChild(document.createTextNode("닉네임"));
  // newCommentHead.appendChild(commentNickname);
  commentContent.appendChild(newCommentDiv);

	// commentP.appendChild(commentValue);
	// newCommentHead.appendChild(commentP);

	newCommentDiv.innerHTML = 
	`             
	<div class = "commentHead">
		<div class = "commentName"> 닉네임 </div> 
		<p>${value}</p>
	</div>
	<div class = commentsIcon>
		<img class = "emptyHeartImg" src = "img/heart.png" alt = "emptyHeartImg">
		<img src = "img/See_More.png" alt = "seeMoreImg">
	</div>
	`

}
