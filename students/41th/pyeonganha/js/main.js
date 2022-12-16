const inputTextnAndBtn = () => {
  const commentInput = document.getElementById("commentjs");
  const commentBtn = document.getElementById("btn");

  const addNewComment = () => {
    const addUl = document.getElementsByClassName("addcommentul")[0];
    const addLi = document.createElement("li");

    addLi.innerHTML = `<div class="pincomment">
        <span>WecodeID : </span>
        <span>${commentInput.value}</span><button id="delButton"><i class="fa-regular fa-circle-xmark"></i></button><button id="heartOnOff"><i class="fa-regular fa-heart"></i></button>
      </div>`;

    addUl.appendChild(addLi);
    commentInput.value = "";

    const btnDel = document.getElementById("delButton");
    btnDel.addEventListener("click", () => {
      addUl.removeChild(addLi);
    });

    const heartbtn = document.getElementById("heartOnOff");
    heartbtn.addEventListener("click", (e) => {
      if (e) {
        console.log(e);
        heartbtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        heartbtn.style.color = "red";
      }
    });
  };

  commentBtn.addEventListener("click", () => {
    if (commentInput.value) {
      addNewComment();
    } else {
      alert("댓글을 달아주세요.");
    }
  });
};

inputTextnAndBtn();
