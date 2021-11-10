const westagramMainLogo = document.querySelector('.westagram');
const messageInput = document.querySelector('.message-input');
const posingButton = document.querySelector('.posting span');

function backLoginPage() {
  location.href = 'index.html';
}
westagramMainLogo.addEventListener('click', backLoginPage);

function createMessage() {
  return `
  <div class='message'>
  <span
  class='userId'
  style='color: ${color}';
  ${username}</span>
  </div>
  <p class='content'>${createMessageContent(content)}</p>
  <span class='time'>${currentTime(createdAt)}</span>
  <span class='reply'>${reply}</span>
  `
}

const CHAT = {
  type: 'text',
  color: 'black',
  username: 'naniboo_o',
  createdAt: '2021-11-10-T13:51:12.000Z',
  content: createMessageContent,
}

function currentTime(newDate) {
  const hours = String(newDate.getHours()).padStart(2, 0);
  const minutes = String(newDate.getMinutes()).padStart(2, 0);

  return `${hours}시 ${minutes}`;
}
currentTime(new Date());

const messageList = document.querySelector('.message-list');

/*
for (let i = 0; i < CHAT.length; i++) {
  const message = CHAT[i];

  const messageElements = document.querySelector('li');

  if (message.type === 'text') {
    messageElements.innerHTML = createMessage(message);
  }

  messageList.appendChild(messageElements);
}
*/
function createMessageContent(event) {
  event.preventDefault();
  const messageInputValue = messageInput.value;
  const messageElements = document.querySelector('li');

  
    messageElements.innerHTML = messageInputValue;
  

  messageList.appendChild(messageElements);
}
messageInput.addEventListener('submit', createMessageContent);