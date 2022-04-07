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
    button.className = "deleteComments";
    button.setAttribute("onClick", "deleteCom()");
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
      let newDiv = document.createElement("div");
      newDiv.className = "comments";
      let makeP = document.createElement("p");
      let makeSpan = document.createElement("span");
      const heartImg = document.createElement("i");
      let newImg = document.createElement("img");
      newImg.src =
        "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";

      makeP.innerHTML = instaUser.value;
      makeSpan.innerHTML = userComment.value;
      heartImg.className = "fa-regular fa-heart";

      comments.appendChild(newDiv);
      newDiv.appendChild(makeP);
      newDiv.prepend(makeSpan);
      newDiv.appendChild(heartImg);
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

// 댓글삭제
function deleteCom() {
  const deleteComment = document.querySelectorAll(".deleteComments");
  for (let i = 0; i < deleteComment.length; i++) {
    deleteComment[i].addEventListener("click", (event) => {
      event.target.closest(".comments").remove();
    });
  }
}
