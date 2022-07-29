const btn = document.querySelector(".replyButton");

function addComment(event) {
  event.preventDefault();
  let input = document.querySelector(".reply");
  let comment = document.querySelector(".commentList");
  let newDiv = document.createElement("div");
  let newId = document.createElement("strong");
  let newValue = document.createElement("span");
  let newImg = document.createElement("img");
  newDiv.classList.add("newDiv");
  newImg.classList.add("newImg");
  newId.innerHTML = `id`;
  newValue.innerHTML = `&nbsp${input.value}`;
  newImg.setAttribute(
    "src",
    "https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
  );
  comment.appendChild(newDiv);
  newDiv.append(newId, newValue, newImg);
  input.value = "";
}

btn.addEventListener("click", addComment);
