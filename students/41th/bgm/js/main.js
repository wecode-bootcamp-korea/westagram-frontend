const comentInput = document.querySelector(".comentInput");
const comentBtn = document.querySelector(".comentBtn");
const comentList = document.querySelector(".comentsList");

function list() {
  const li = document.createElement("li");
  const spanName = document.createElement("span");
  const spanText = document.createElement("span");
  const btnBox = document.createElement("div");
  const img = document.createElement("img");
  const delBtn = document.createElement("img");

  spanText.innerText = comentInput.value;
  spanName.innerText = "junhn";
  spanName.setAttribute("style", "font-weight: bold");
  img.setAttribute("src", "./js/img/heart.png");
  delBtn.setAttribute("src", "./js/img/delete.png");

  // 댓글 하트 토글 이벤트 함수
  img.addEventListener("click", function () {
    if (
      img.src === "http://127.0.0.1:5500/students/41th/bgm/js/img/heart.png"
    ) {
      img.src = "http://127.0.0.1:5500/students/41th/bgm/js/img/redheart.png";
    } else {
      img.src = "http://127.0.0.1:5500/students/41th/bgm/js/img/heart.png";
    }
  });

  // 댓글 삭제 이벤트 함수
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(spanName);
  li.appendChild(spanText);
  li.appendChild(btnBox);
  btnBox.appendChild(img);
  btnBox.appendChild(delBtn);

  img.classList.add("fst");
  btnBox.classList.add("imgBox");
  comentList.appendChild(li);

  comentInput.value = "";
}

// 댓글 게시 클릭 이벤트 함수
comentBtn.addEventListener("click", function () {
  if (comentInput.value === "") {
    alert("댓글을 입력해 주세요");
  } else {
    list();
  }
});

//  댓글 게시 엔터 이벤트 함수
comentInput.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (comentInput.value === "") {
      alert("댓글을 입력해주세요.");
    } else {
      list();
    }
  }
});

// 댓글 입력 시 게시글 글씨 색변화 이벤트 함수
function comentS() {
  if (comentInput.value != "") {
    comentBtn.style.color = "blue";
  } else {
    console.log(1);
    comentBtn.style.color = "rgba(96, 96, 240, 0.495)";
  }
}

comentInput.addEventListener("keyup", function () {
  comentS();
});

// 검색창 검색 시 네비게이션 출력 이벤트 함수 구현중 ------

const searchNav = document.querySelector("#search");

function searchId() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  searchNav.appendChild(nav);
  nav.appendChild(ul);
  nav.appendChild(li);

  searchNav.classList.toggle("navBox");
  ul.classList.add("navId");
}

searchNav.addEventListener("click", function () {
  searchId();
});
