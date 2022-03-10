// login Elements
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

// Main Elements
const mainContainer = document.querySelector("main");
const commentInput = document.getElementById("comment-input");
const commentForm = document.getElementById("comment-form");
const comments = document.getElementById("comments");
const userIdEl = document.getElementById("user-id");

// Nav Elements
const nav = document.querySelector("nav");
const navForm = document.getElementById("nav-form");
const navInput = document.getElementById("nav-input");
const searchResults = document.querySelector(".search-info");
const profileMenu = document.querySelector(".profile-menu");
const logoutBtn = document.getElementById("logout-btn");

let id = localStorage.getItem("id") ? localStorage.getItem("id") : "hyodduru";

if (localStorage.getItem("id")) {
  loginContainer.classList.add("hidden");
  nav.classList.remove("hidden");
  mainContainer.classList.remove("hidden");
} else {
  nav.classList.remove("hidden");
  nav.classList.add("hidden");
  mainContainer.classList.add("hidden");
}

//user's data
const userIds = [
  {
    id: "wecode",
    img: "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside",
    name: "위코드",
  },
  {
    id: "nonak_c",
    img: "https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    name: "노낙",
  },
  {
    id: "hapataka_123",
    img: "https://images.unsplash.com/photo-1603112579965-e24332cc453a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "해피데이",
  },
  {
    id: "jsw_010203",
    img: "https://images.unsplash.com/photo-1600657644140-aa5b5e003829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "박지우",
  },
  {
    id: "ilovemaday",
    img: "https://images.unsplash.com/photo-1594813967918-3d04c5af997d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "",
  },
  {
    id: "innist0_0ry",
    img: "https://images.unsplash.com/photo-1605923487072-a672d2189c72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "이네미네",
  },
  {
    id: "gay20n",
    img: "https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "갸니",
  },
  {
    id: "xoxo_0",
    img: "https://images.unsplash.com/photo-1527784281695-866fa715d9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "박소영",
  },
  {
    id: "jiing_ni",
    img: "https://images.unsplash.com/photo-1592198429453-ded8a9872137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "김지은",
  },
  {
    id: "_0.3.2_",
    img: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "박선정",
  },
  {
    id: "dhxo_kwon_",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXNpYW4lMjBndXl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    name: "오태하🔥",
  },
  {
    id: "phr1108",
    img: "https://images.unsplash.com/photo-1556260756-440a4066245a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "화라나",
  },
  {
    id: "2yeoni__",
    img: (src =
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"),
    name: "나는 성여니",
  },
];
let resultIds = [];

//user search function
function filterResult(term) {
  resultIds = userIds.filter((user) => user.id.includes(term));
  if (term === "") resultIds = [];

  searchResults.innerHTML = `${resultIds
    .map((user) => {
      return `<li class="user">
    <img class="profile" src=${user.img} />
    <div class="user-info">
      <strong>${user.id}</strong>
      <p>${user.name}</p>
    </div>
  </li>`;
    })
    .join("")}`;
}

// article - comment part
function createComment(comment) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${id}</strong> ${comment}  <button class ="heart-btn" ><i class ="far fa-heart"></i></button>  <button class="delete-btn"  ><i class="fas fa-times"></i></button>`;
  li.className = "comment";
  comments.appendChild(li);
}

function submitComment(e) {
  e.preventDefault();
  if (commentInput.value === "") return;
  const newComment = commentInput.value;
  createComment(newComment);
  commentInput.value = "";
}

function handleCommentBtn(e) {
  const comment = e.target.closest("li");

  if (e.target.classList.contains("fa-times")) {
    comment.remove();
  }

  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("fas");
  }
}

// comment submit event
commentForm.addEventListener("submit", submitComment);
commentForm.addEventListener("input", (e) => {
  commentForm.classList.add("activate");
  if (commentInput.value === "") commentForm.classList.remove("activate");
});

// Handle delete Btn, heart Btn on the comment line
comments.addEventListener("click", handleCommentBtn);

//Clicking heart, bookmark on the article-btns bar
document
  .querySelector(".article-heart-btn")
  .addEventListener("click", function () {
    this.querySelector("i").classList.toggle("fas");
  });
document.querySelector(".absolute").addEventListener("click", function () {
  this.querySelector("i").classList.toggle("fas");
});

// Show nav - profile menu when clicking the profile icon
document.addEventListener("click", (e) => {
  const profileIcon = e.target.closest(".profile-icon");
  if (profileIcon) profileMenu.classList.toggle("open");
  else {
    profileMenu.classList.remove("open");
  }
});

// Search user's id & activate search button
navForm.addEventListener("input", (e) => {
  navForm.classList.add("activate");
  if (navInput.value === "") navForm.classList.remove("activate");
  const term = e.target.value;
  filterResult(term);
});

let isValid;
function checkValidity(id, password) {
  const korCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
  const spcCheck = /[~!#$%^&*();_+|<>?:{}]/g;

  isValid = false;

  if (id === null || id === "") alert("아이디 입력은 필수입니다.");
  else if (spcCheck.test(id)) alert("적합한 아이디 형식이 아닙니다.");
  else if (korCheck.test(id)) alert("영문으로 입력해주세요.");
  else if (id.length > 0 && id.length < 3) alert("아이디는 3자 이상입니다.");
  else if (id.length > 15) alert("15자 이내로 입력해주세요.");
  else if (id.search(/\s/) !== -1)
    alert("아이디는 빈 칸을 포함 할 수 없습니다.");
  else if (password === null || password === "")
    alert("비밀번호 입력은 필수입니다.");
  else if (password.length > 0 && password.length < 5)
    alert("비밀번호는 5자 이상입니다.");
  else if (password.length > 20) alert("비밀번호는 20자 미만입니다.");
  else isValid = true;

  return isValid;
}

// Login handling
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (id.length === 0 || password.length === 0) return;

  id = idInput.value;
  password = passwordInput.value;

  checkValidity(id, password);

  console.log(id, password);
  //Clear input
  idInput.value = passwordInput.value = "";

  //Hide Login Form & Render main page && store user ID
  if (isValid) {
    loginContainer.classList.add("hidden");
    mainContainer.classList.remove("hidden");
    nav.classList.remove("hidden");
    localStorage.setItem("id", id);
    userIdEl.innerText = id;
  }
});

//activate login-btn
loginForm.addEventListener("input", () => {
  loginForm.classList.add("active");
  if (idInput.value === "" && passwordInput.value === "")
    loginForm.classList.remove("active");
});

//log out when clicking logout button
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("id");
  location.reload();
});

userIdEl.innerText = id;
