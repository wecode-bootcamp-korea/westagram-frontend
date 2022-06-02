const chatForm = document.querySelector(".feeds-chating");
const chatInput = document.querySelector(".feeds-chating-input");

function handleChatSubmit(event) {
  event.preventDefault();
  const chatScreen = document.querySelector(".feeds-like__chat-screen");
  const chatFriends = document.querySelector(".feeds-like__chat-friends");
  const newChat = chatInput.value;
  chatInput.value = "";
  const test = chatFriends.cloneNode(true);
  const chat = test.querySelector(
    ".feeds-like__chat-friends-left span:last-child"
  );
  chat.innerText = newChat;
  chatScreen.appendChild(test);
}

chatForm.addEventListener("submit", handleChatSubmit);

const likeBtn = document.querySelectorAll(".like-button")[0];
const likeBtn2 = document.querySelectorAll(".like-button")[1];

function likeBtnHandler(event) {
  event.preventDefault();

  likeBtn.classList.add("hidden");
  likeBtn2.classList.remove("hidden");
}

likeBtn.addEventListener("click", likeBtnHandler);
