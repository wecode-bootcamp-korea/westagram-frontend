/** @format */

const westagramMainLogo = document.querySelector(".westagram");
const messageInput = document.querySelector(".message-input");
const postingButton = document.querySelector(".posting button");

const messageList = document.querySelector(".message-list");
const messageListId = document.querySelector(".message-list-id");
const messageListContent = document.querySelector(".message-list-content");
const messageListHeart = document.querySelector(".message-list-heart");
const messageListButton = document.querySelector(".message-list-button");

const allForm = document.querySelector(".comment-input-bar");

const POINTER_CURSOR = "non-disabled";

function backLoginPage() {
	location.href = "index.html";
}
westagramMainLogo.addEventListener("click", backLoginPage);

function createMessage(event) {
	event.preventDefault();
	const text = messageInput.value;

	const commentList = document.createElement("li");
	commentList.setAttribute("class", "comment-list");
	const textId = document.createElement("p");
	textId.setAttribute("class", "text-id");
	const textElements = document.createElement("li");
	textElements.setAttribute("class", "text-elements");
	const deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "delete-button");
	const textHeart = document.createElement("i");
	textHeart.setAttribute("class", "far fa-heart");

	textId.textContent = "naniboo_o";
	textElements.textContent = text;
	deleteButton.textContent = "X";

	commentList.appendChild(textId);
	commentList.appendChild(textElements);
	commentList.appendChild(deleteButton);
	commentList.appendChild(textHeart);

	messageList.appendChild(commentList);

	function deleteMessage() {
		commentList.remove();
	}
	deleteButton.addEventListener("click", deleteMessage);

	messageInput.value = "";
}

allForm.addEventListener("submit", createMessage);

function handleCommentAction() {
	if (messageInput.value) {
		postingButton.disabled = false;
		postingButton.style.color = "#0095F6";
		postingButton.classList.add(POINTER_CURSOR);
	} else if (!messageInput.value) {
		postingButton.disabled = true;
		postingButton.style.color = "#b5d7fa";
		postingButton.classList.remove(POINTER_CURSOR);
	}
}
allForm.addEventListener("keydown", handleCommentAction);
