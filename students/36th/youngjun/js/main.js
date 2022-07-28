const comment = document.querySelectorAll('.comment');
const submit = document.querySelector(".submitCommentBtn")
const commentInput = document.querySelector(".commentInput");
const commentContent = document.querySelector(".commentContent");
const logoImg = document.querySelector("#logoImg");
const emptyHeartImg = document.querySelectorAll('.emptyHeartImg');
const filledHeartImg = document.querySelectorAll('.filledHeartImg');
const deleteImg = document.querySelectorAll('.deleteImg');
const commentsIcon = document.querySelectorAll('.commentsIcon')

const modal = document.querySelector(".modalOff")
const searchInput = document.querySelector(".searchInput")

//go to login page
logoImg.addEventListener('click', ()=>{
	location.href = "./login.html"
});

//comment, heart 
deleteImg.forEach((e) => e.addEventListener("click", ()=>{
	comment.forEach((e) => e.addEventListener("click", ()=>{
		e.remove();
	}));
}))

emptyHeartImg.forEach((e) => e.addEventListener("click", ()=>{
	commentsIcon.forEach((e) => e.addEventListener("click", ()=>{
		const a = document.createElement('div');
		a.classList.add('commentsIcon');

		const filledHeartImg = document.createElement('img');
		filledHeartImg.classList.add('filledHeartImg');
		filledHeartImg.setAttribute("src", "./img/heart (1).png");

		// const deleteImg = document.createElement('img');
		// deleteImg.classList.add('deleteImg');
		// deleteImg.setAttribute("src", "./img/delete.png")

		e.appendChild(filledHeartImg);
		// e.appendChild(deleteImg);

	}));
}));

submit.addEventListener('click', ()=>{
	createComment(commentInput.value,commentContent);
});

commentInput.addEventListener('keypress', (e)=>{
	if(e.key === 'Enter'){
		createComment(commentInput.value,commentContent,comment);
		commentInput.value = ""
	}
});

function createComment(value,commentContent) {
	
  const newCommentDiv = document.createElement('div');
	newCommentDiv.classList.add('comment');

	// const newCommentHead = document.createElement('div');
	// newCommentHead.classList.add('commentHead');

	// const commentNickname = document.createElement('div');
	// commentNickname.classList.add('commentName');

	// const commentP = document.createElement('p');
	// const commentValue = document.createTextNode(value);

	// const commentsIcon = document.createElement('div');
	// commentsIcon.classList.add('commentsIcon');

	// const emptyHeartImg = document.createElement('img');
	// emptyHeartImg.classList.add('emptyHeartImg');
	// emptyHeartImg.setAttribute("src", "./img/heart.png");
	
	// const seeMoreImg = document.createElement('img');
	// seeMoreImg.classList.add('seeMoreImg');
	// seeMoreImg.setAttribute("src", "./img/See_More.png");


	// newCommentDiv.appendChild(newCommentHead)
	// newCommentDiv.appendChild(commentsIcon);

	// commentNickname.appendChild(document.createTextNode("닉네임"));
  // newCommentHead.appendChild(commentNickname);

	// commentsIcon.appendChild(emptyHeartImg);
	// commentsIcon.appendChild(seeMoreImg);

	// commentP.appendChild(commentValue);
	// newCommentHead.appendChild(commentP);

	
  commentContent.appendChild(newCommentDiv);

	const deleteComment = document.querySelectorAll('.comment');
	const newComment = document.querySelectorAll('.newComment');

	deleteComment.forEach((e) => e.addEventListener("click", ()=>{
		e.remove();
	}));

	newCommentDiv.innerHTML = 
	`             
	<div class = "commentHead">
		<div class = "commentName"> 닉네임 </div> 
		<p>${value}</p>
	</div>
	<div class = commentsIcon>
	<img class = "emptyHeartImg" src = "img/heart.png" alt = "emptyHeartImg">
	<img class = "deleteImg" src = "img/delete.png" alt = "deleteImg">
</div>
	`

}

// modal

searchInput.addEventListener('keyup',()=>{
		modal.classList.add('modal')
		modal.classList.remove('modalOff')
			if (searchInput.value) {
        const filteredID = accountArray.filter( x => matchSearch(x.id))
        if (filteredID) {
            filteredID.forEach(function(e) {
                showFilteredID(e)
            })
        }
    }
});

function matchSearch(value) {
	const searchID = searchInput.value;
	return value.indexOf(searchID) != -1;
}

function showFilteredID(id) {
				modal.innerHTML = 
			`             
			<div class = "userBox">
				<div class = "user">
					<img src = ${id.img} alt = "userImg">
					<div class = "userInfo">
						<p class = "userNickname"> ${id.id}</p>
						<p class = "info"> ${id.nickname} </p>
					</div>
				</div>
			</div>
			<p class = "line2"></p>
			`
}

document.addEventListener("click",(e) =>{
		if (!e.target.closest(".modal")) {
			modal.classList.remove('modal')
			modal.classList.add('modalOff')
		}
	}
);

const accountArray = [
	{
		id: "wecode_bootcamp",
		nickname: ">wecode | 위코드",
		img: "./img/bookmark-white.png",
	},
	{
		id: "selP",
		nickname: ">wecode | 권영준",
    img: "./img/bookmark-white.png",
	},
	{
		id: "wecode",
		nickname: ">gg",
		img: "./img/delete.png",
	},
	{
		id: "hi",
		nickname: "hello",
    img: "./img/heart.png",
	}
]   
