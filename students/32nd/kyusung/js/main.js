"use Strict";

const instaComment = document.querySelector("#submit");
const comments = document.querySelector(".feeds-img-info");
const newComment = document.querySelector(".comments");

instaComment.addEventListener("click", () => {
  const instaUser = document.getElementById("username").value;
  const userComment = document.getElementById("userComments").value;
  if (instaUser !== "" && userComment !== "") {
    const newDiv = document.createElement("div");
    const newDiv2 = document.createElement("div");
    const makeP = document.createElement("p");
    const makeSpan = document.createElement("span");
    const button = document.createElement("button");
    const heartImg = document.createElement("i");

    makeP.innerHTML = `${userComment}`;
    makeSpan.innerHTML = `${instaUser}`;

    newDiv.className = "comments";
    newDiv2.className = "comments-right-info";
    heartImg.className = "fa-regular fa-heart";
    heartImg.setAttribute("onclick", "likeHeart()");
    button.className = "deleteComments";
    button.setAttribute("onClick", "deleteComment()");
    button.innerText = "삭제";

    comments.appendChild(newDiv);
    newDiv.appendChild(makeP);
    newDiv.prepend(makeSpan);
    newDiv.appendChild(newDiv2);
    newDiv2.appendChild(button);
    newDiv2.appendChild(heartImg);

    document.getElementById("username").value = "";
    document.getElementById("userComments").value = "";
  } else if (
    (instaUser === "" && userComment !== "") ||
    (instaUser === "" && userComment === "")
  ) {
    alert("아이디를 입력해주세요");
    document.getElementById("username").focus();
  } else {
    alert("댓글을 입력해주세요");
    document.getElementById("userComments").focus();
  }
});

function enterKey() {
  if (window.event.keyCode == 13) {
    let instaUser = document.getElementById("username");
    let userComment = document.getElementById("userComments");
    if (instaUser !== "" && userComment !== "") {
      const newDiv = document.createElement("div");
      const newDiv2 = document.createElement("div");
      const makeP = document.createElement("p");
      const makeSpan = document.createElement("span");
      const button = document.createElement("button");
      const heartImg = document.createElement("i");

      makeP.innerHTML = instaUser.value;
      makeSpan.innerHTML = userComment.value;

      newDiv.className = "comments";
      newDiv2.className = "comments-right-info";
      heartImg.className = "fa-regular fa-heart";
      heartImg.setAttribute("onclick", "likeHeart()");
      button.className = "deleteComments";
      button.setAttribute("onClick", "deleteComment()");
      button.innerText = "삭제";

      comments.appendChild(newDiv);
      newDiv.appendChild(makeP);
      newDiv.prepend(makeSpan);
      newDiv.appendChild(newDiv2);
      newDiv2.appendChild(button);
      newDiv2.appendChild(heartImg);
    } else if (
      (instaUser === "" && userComment !== "") ||
      (instaUser === "" && userComment === "")
    ) {
      alert("아이디를 입력해주세요");
      document.getElementById("username").focus();
    } else {
      alert("댓글을 입력해주세요");
      document.getElementById("userComments").focus();
    }
    document.getElementById("username").value = "";
    document.getElementById("userComments").value = "";
  }
}

function deleteComment() {
  const el = document.querySelectorAll(".deleteComments");
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", (event) => {
      event.target.closest(".comments").remove();
    });
  }
}

function likeHeart() {
  const likeHeart = document.querySelectorAll(".fa-regular.fa-heart");
  const filledHeart = document.querySelectorAll(".fa-solid.fa-heart");

  for (let i = 0; i < likeHeart.length; i++) {
    likeHeart[i].addEventListener("click", (e) => {
      console.log(e.target.className);

      if (e.target.className === "fa-regular fa-heart") {
        e.target.className = "fa-solid fa-heart";
      }
    });
  }
  for (let i = 0; i < filledHeart.length; i++) {
    filledHeart[i].addEventListener("click", (e) => {
      console.log(e.target.className);

      if (e.target.className === "fa-solid fa-heart") {
        e.target.className = "fa-regular fa-heart";
      }
    });
  }
}
