// 피드 버튼
let likeBtn = document.querySelectorAll(".icon_heart");

likeBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("icon_heart_full");
  });
});

// 코멘트
let commentsContainer = document.querySelector(".comments");
let commentInput = document.querySelector(".add_comment input");
let addBtn = document.querySelector(".add_comment button");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let commentList = document.createElement("div");
  commentsContainer.appendChild(commentList);
  commentList.classList = "commentList";

  let user = document.createElement("div");
  user.innerHTML = `<div class="username">iamchloe</div><div>${commentInput.value}</div>`;
  commentList.appendChild(user);

  let buttonBox = document.createElement("div");
  commentList.appendChild(buttonBox);
  let likeBtn = document.createElement("div");
  buttonBox.appendChild(likeBtn);
  likeBtn.className = "iconImg icon_heart";
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("icon_heart_full");
  });

  let deleteBtn = document.createElement("button");
  buttonBox.appendChild(deleteBtn);
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => {
    commentList.remove();
  });

  commentInput.value = "";
});

// sub nav
let profile = document.querySelector("nav > ul > li:nth-child(3) a");
let mNav = document.querySelector(".sub_nav");

profile.addEventListener("click", () => {
  mNav.classList.toggle("open");
});

// 검색
let userArray = [
  {
    username: "Jessica",
    description: "hello!",
    userImg:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    username: "Jane",
    description: "Welcome",
    userImg:
      "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    username: "Jennifer",
    description: "I am developer",
    userImg:
      "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    username: "Millie",
    description: "From NY",
    userImg:
      "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

let searchInput = document.querySelector("#search_input");
let searchResult = document.querySelector(".search_result");
let newArr = [];

function searchUser() {
  if (searchInput.value !== "") {
    newArr = userArray.filter((el) =>
      el.username.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    searchResult.innerHTML = "";

    newArr.map((user) => {
      let result = document.createElement("div");
      searchResult.appendChild(result);
      result.innerHTML = `<div><img src="${user.userImg}"/></div><div>${user.username}<div>${user.description}</div></div>`;
    });
  } else {
    searchResult.innerHTML = "";
  }
}

searchInput.addEventListener("input", searchUser);
