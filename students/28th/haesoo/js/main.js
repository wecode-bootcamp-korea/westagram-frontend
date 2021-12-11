const commentContainer = document.querySelector(".js-feed-comment");
const commentInput = document.querySelector(".js-comment-input");
const commentButton = document.querySelector(".js-comment-button");

const searchInput = document.querySelector(".js-search-input");
const idList = [
  {
    id: "kyung___lee",
    name: "이경진",
    src: "/students/28th/haesoo/src/story_images/1.JPG",
  },
  {
    id: "sungnam_byun",
    name: "변성남",
    src: "/students/28th/haesoo/src/story_images/2.JPG",
  },
  {
    id: "bumikeem",
    name: "김부미",
    src: "/students/28th/haesoo/src/story_images/2.JPG",
  },
];

commentInput.addEventListener("keydown", handleInput);
commentButton.addEventListener("click", handleClick);
searchInput.addEventListener("keyup", handleSearch);

function handleInput(event) {
  const comment = commentInput.value;
  if (comment && event.key === "Enter") {
    makeComment(comment);
  }
}

function handleClick() {
  const comment = commentInput.value;
  if (comment) {
    makeComment(comment);
  }
}

function makeComment(text) {
  const commentWrapper = document.createElement("ul");
  commentWrapper.className = "comment-wrapper";

  const comment = `
    <span class="comment-id">__jaehyunjeong</span>
    <span class="comment-text">${text}</span>
    <button class="delete-button">X</button>
  `;
  commentWrapper.innerHTML = comment;
  commentContainer.appendChild(commentWrapper);
  commentInput.value = "";

  deleteComment(commentWrapper);
}

function deleteComment(comment) {
  const deleteButton = comment.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    comment.remove();
  });
}

function checkedSearchId(word) {
  // 이벤트가 발생할 때마다 innerHTML을 비워주고 다시 그려준다.
  const searchList = document.querySelector(".search-list");
  searchList.innerHTML = "";
  idList.forEach((info) => {
    if (info.id.includes(word)) {
      const li = document.createElement("li");
      const liContents = `
        <img alt="profile image"
          src=${info.src}
          class="search-image"
        />
        <div class="search-profile">
          <p class="search-id">${info.id}</p>
          <p class="search-name">${info.name}</p>
        </div>
      `;
      li.innerHTML = liContents;
      searchList.appendChild(li);
    }
  });
}

function handleSearch() {
  const searchContainer = document.querySelector(".search-container");
  const searchingId = searchInput.value;

  if (searchInput.value) {
    searchContainer.classList.remove("hide");
    checkedSearchId(searchingId);
  } else {
    searchContainer.classList.add("hide");
  }
}
