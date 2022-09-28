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
  commentList.classList = "indi_comment";

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
    commentList.classList.add("hide");
  });

  commentInput.value = "";
});

// 모바일 nav
let profile = document.querySelector("nav > ul > li:nth-child(3) a");
let mNav = document.querySelector(".mobile_nav");

profile.addEventListener("click", () => {
  mNav.classList.toggle("open");
});

// 검색
let searchInput = document.querySelector("#search_input");
let searchResult = document.querySelector(".search_result");

let userArray = [
  {
    username: "jessica",
    userImg:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    username: "jane",
    userImg:
      "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    username: "jennifer",
    userImg:
      "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    username: "millie",
    userImg:
      "https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

let newArr = [];

searchInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  newArr = [];

  let newBox = userArray.filter((el) => {
    if (el.username.includes(e.target.value)) {
      return newArr.push(el);
    } else {
      console.log("dd");
    }
  });

  console.log(newBox);
});

function search() {}

{
  // userArray
  //   .filter((el) => {
  //     if (el.username.indexOf(searchInput.value) !== -1) {
  //       return el;
  //     } else if (!searchInput.value) {
  //       console.log("blank");
  //     }
  //   })
  //   .map((user) => {
  //     let result = document.createElement("div");
  //     document.body.appendChild(result);
  //     result.innerHTML = `<div>${user.username}</div><img src="${user.userImg}"/>`;
  //   });
}
