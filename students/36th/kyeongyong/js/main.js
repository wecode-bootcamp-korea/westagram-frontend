const commentA = document.querySelector(".com_txt");
const btn = document.querySelector(".btn");

commentA.addEventListener("keydown", a);
commentA.addEventListener("keydown", c);

function a() {
  const commentC = commentA.value.length;
  const btnColor = document.querySelector(".btn");
  if (commentC >= 0) {
    btnColor.style.color = "#5197e9";
  }
}

function b() {
  const commentB = commentA.value;
  const tagDiv = document.querySelector(".com_txt_block");
  const tagP = document.createElement("p");
  const tagSpan = document.createElement("span");

  tagSpan.innerText = "jelly_je2";
  console.log(tagSpan);
  tagP.innerHTML = commentB;
  tagP.prepend(tagSpan);
  tagDiv.appendChild(tagP);
  console.log(tagDiv);
  commentA.value = "";
}

function c() {
  if (event.keyCode == 13) {
    b();
  }
}
