const chatting = document.querySelector('.chatting');
const chatInput = document.querySelector(".input");
const chatBtn = document.querySelector(".submit");
const chat =document.querySelector('.event');




chatting.addEventListener("submit", (e) => {
    e.preventDefault();
    const contents = chatInput.value;
    const top =chat.scrollHeight;
    chat.scrollTop = top;
    chat.append(`${contents}\n`)
    chatInput.value = ""
})

