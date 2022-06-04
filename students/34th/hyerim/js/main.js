const btn = document.querySelector(".btn");
let text = document.querySelector(".comment_in");

function comment() {
  btn.addEventListener("click", function () {
    let a = document.querySelector(".comment_add");
    let p = document.createElement("p");
    p.style.display = "flex";

    let span = document.createElement("span");
    let i = document.createElement("i");

    a.appendChild(p);
    p.appendChild(span);

    span.setAttribute("class", "name");
    i.setAttribute("class", "fa-regular fa-heart like_heart");

    p.innerHTML = ` <div class="comment_addBoxtitle">
    <p><span class="name">wecode</span>${text.value}</p>
    <i class="fa-regular fa-heart like_heart"></i>
    </div>`;
  });
}
comment();
