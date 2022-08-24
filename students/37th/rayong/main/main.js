const feedsForm = document.querySelector("#feedsForm");
const feedsInput = document.querySelector("#feedsInput");

function addComments (event) {
    event.preventDefault();
    const feeds = feedsInput.value;
    const li = document.createElement("li");
    const ul = document.querySelector("#feedsList");
    const iconLike = document.createElement("p");
    const iconDelete = document.createElement("p");
    const iconBox = document.createElement("div");
    iconLike.classList.add("like");
    iconDelete.classList.add("del");
    li.innerText = feeds;
    iconLike.innerText = '♥';
    iconDelete.innerText = '✖';
    iconBox.appendChild(iconLike);
    iconBox.appendChild(iconDelete);
    li.appendChild(iconBox);
    ul.appendChild(li);
    feedsInput.value = "";
    
    const likeIcon = document.querySelector("p.like");
    function changeIconColor(event) {
        likeIcon.classList.toggle("icon-red");
    }
    likeIcon.addEventListener('click', changeIconColor);


    const deleteIcon = document.querySelector("p.del");
    function deleteComments() {
        li.remove();
    }
    deleteIcon.addEventListener('click', deleteComments)
}


feedsForm.addEventListener('submit', addComments)
