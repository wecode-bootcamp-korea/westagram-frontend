const inputClick = document.querySelector(".input_a");

const svgClick = document.querySelector(".origsvg");

const lickButton = document.querySelector(".hart_button");
const lickButton1 = document.querySelector(".hart_button_1");

const hartIcon = document.querySelector(".hart");
const hartIcon1 = document.querySelector(".hart_1");

const lieckr = document.querySelector(".lieckr");
const lieckr1 = document.querySelector(".lieckr_1");

const commentInput1 = document.querySelector(".comment_input_1");
const commentButton1 = document.querySelector(".comment_button_1");

const commentInput2 = document.querySelector(".comment_input_2");
const commentButton2 = document.querySelector(".comment_button_2");

const posting1 = document.querySelector(".posting_1");
const posting2 = document.querySelector(".posting_2");

const commentHartButton = document.querySelector(".comment_hart");
const commentHart = document.querySelector(".fa-regular");

const commentLickButton = document.getElementsByClassName("comment_hart_no");

function inputKeyupEvent() {
    if (inputClick.value.length >= 1) {
    inputClick.classList.remove("click_ev");
    svgClick.style.opacity = 0;
  } else {
    inputClick.classList.add("click_ev");
    svgClick.style.opacity = 0.5;
  }
}

function clickEvent() {
  if (lickButton.classList.value == "hart_button") {
    hartIcon.style.opacity = 0;
    lickButton.classList.remove("hart_button");
    lickButton.classList.add("red_hart");
    lieckr.innerText = "10265명"
  } else {
    hartIcon.style.opacity = 1;
    lickButton.classList.remove("red_hart");
    lickButton.classList.add("hart_button");
    lieckr.innerText = "10264명"
  }
}

function clickEvent2() {
  if (lickButton1.classList.value == "hart_button_1") {
    hartIcon1.style.opacity = 0;
    lickButton1.classList.remove("hart_button_1");
    lickButton1.classList.add("red_hart_1");
    lieckr1.innerText = "9135명";
  } else {
    hartIcon1.style.opacity = 1;
    lickButton1.classList.remove("red_hart_1");
    lickButton1.classList.add("hart_button_1");
    lieckr1.innerText = "9134명";
  }
}

function commentEnter2() {
  commentEnvet()
}

function commentEnvet1() {
  if (commentInput1.value.length >= 1) {
    commentButton1.disabled = false;
    posting1.classList.remove("posting_1");
    posting1.classList.add("posting_ok");
  } else {
    commentButton1.disabled = true;
    posting1.classList.remove("posting_ok");
    posting1.classList.add("posting_1");
  }
}

function commentEnvet2() {
  if (commentInput2.value.length >= 1) {
    commentButton2.disabled = false;
    posting2.classList.remove("posting_2");
    posting2.classList.add("posting_ok");
  } else {
    commentButton2.disabled = true;
    posting2.classList.remove("posting_ok");
    posting2.classList.add("posting_2");
  }
}



function runComment1() {
  const box = document.querySelector(".comment_ul_1")
  const userName = "yumsumin725";
  const comments = document.createElement("li");
  comments.innerHTML = `
  <div class="newcomment">
  <div>
      <b>${userName}</b>
      <span>${commentInput2.value}</span>
  </div>
      <button class="comment_hart">
      <i class="fa-regular fa-heart"></i>
      </button> 
  </div>
` 
  box.appendChild(comments);
}

function runComment2() {
  const box = document.querySelector(".comment_ul")
  const userName = "yumsumin725";
  const comments = document.createElement("li")
  comments.innerHTML = `
  <div class="newcomment">
      <div>
          <b>${userName}</b>
          <span>${commentInput2.value}</span>
      </div>
          <button class="comment_hart_no"></button> 
      </div>
  ` 
  box.appendChild(comments);
}


function subnit1() {
  runComment1()
  commentInput1.value = ""
  commentButton1.disabled = true;
}

function subnit2() {
  runComment2()
  commentInput2.value = ""
  commentButton1.disabled = true;
}

function clickHeart() {
  if (commentLickButton.classList.value == "comment_hart_no") {
    commentHartButton.classList.remove("comment_hart_no");
    commentHartButton.classList.add("comment_hart_ok");
  } else {
    commentHartButton.classList.remove("comment_hart_ok");
    commentHartButton.classList.add("comment_hart_no");
  }
}



inputClick.addEventListener("keyup", inputKeyupEvent);

lickButton.addEventListener("click", clickEvent);
lickButton1.addEventListener("click", clickEvent2);

commentInput1.addEventListener("keyup", commentEnvet1);
commentInput2.addEventListener("keyup", commentEnvet2);

commentButton1.addEventListener("click", subnit1);
commentButton2.addEventListener("click", subnit2);

commentLickButton.addEventListener("click", clickHeart);

