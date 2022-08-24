const feedsForm = document.querySelector("#feedsForm");
const feedsInput = document.querySelector("#feedsInput");

function addComments (event) {
    event.preventDefault();
    const feeds = feedsInput.value;
    const li = document.createElement("li");
    const ul = document.querySelector("#feedsList");
    li.innerText = feeds;
    ul.appendChild(li);
    feedsInput.value = "";
}

feedsForm.addEventListener('submit', addComments)

