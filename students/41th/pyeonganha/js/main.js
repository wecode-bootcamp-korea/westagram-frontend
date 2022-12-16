const inputTextnAndBtn = () => {
  const commentInput = document.getElementById("commentjs");
  const commentBtn = document.getElementById("btn");

  const addNewComment = () => {
    const addUl = document.getElementsByClassName("addcommentul")[0];
    const addLi = document.createElement("li");

    addLi.innerHTML = `<div class="pincomment">
        <span>WecodeID : </span>
        <span>${commentInput.value}</span><button id="delButton"><i class="fa-regular fa-circle-xmark"></i></button><button class="heartOnOff"><i class="fa-solid fa-heart"></i></button>
      </div>`;

    addUl.appendChild(addLi);
    commentInput.value = "";

    const btnDel = document.getElementById("delButton");
    btnDel.addEventListener("click", () => {
      addUl.removeChild(addLi);
    });

    const heartbtn = document.querySelector(".heartOnOff");
    heartbtn.addEventListener("click", () => {
      heartbtn.classList.toggle("hearttoggle");
    });
  };

  commentBtn.addEventListener("click", () => {
    if (commentInput.value) {
      addNewComment();
    } else {
      alert("댓글을 달아주세요.");
    }
  });

  commentInput.addEventListener("keypress", (e) => {
    if (commentInput.value.length !== 0 && e.key === "Enter") {
      addNewComment();
    }
  });
};

inputTextnAndBtn();

const popup = document.getElementsByClassName("headertextline")[0];

popup.addEventListener("click", () => {
  const popuppage1 = document.getElementsByClassName("searchpopuppage")[0];
  popuppage1.classList.toggle("popuppage");
});
