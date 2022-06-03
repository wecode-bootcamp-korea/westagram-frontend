const chatForm = document.querySelector(".feeds-chating");
const likeBtn = document.querySelector("button");
const likeHeart = likeBtn.querySelector("i");

function handleChatSubmit(event) {
  event.preventDefault();
  const chatScreen = document.querySelector(".feeds-like__chat-screen");
  const chatInput = document.querySelector(".feeds-chating-input");
  const chatFriends = document.querySelector(".feeds-like__chat-friends");
  const newChat = chatInput.value;
  chatInput.value = "";
  const copyChat = chatFriends.cloneNode(true);
  const chat = copyChat.querySelector(
    ".feeds-like__chat-friends-left span:last-child"
  );
  chat.innerText = newChat;
  chatScreen.appendChild(copyChat);
  const copyChatIcon = copyChat.querySelector("i");
  copyChatIcon.addEventListener("click", heartLike);
}

chatForm.addEventListener("submit", handleChatSubmit);

function heartLike(event) {
  event.preventDefault();
  let btn = event.target;
  btn.classList.toggle("fa-solid");
}

likeHeart.addEventListener("click", heartLike);
