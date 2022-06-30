const commentInput = document.querySelector(".comment-box");
const test = document.querySelector(".content");
const form = document.querySelector("#id");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //event를 실행하지않게 해주는 (페이지 이동하지않게해주는)
  const p = document.createElement("p"); // tag('p') 생성
  p.innerHTML = commentInput.value;
  test.appendChild(p); //부모에다.자식을 추가해라(태그를)
});

//댓글창 타이핑 활성화 색상변경
commentInput.addEventListener("keyup", () => {
  const submit = document.querySelector(".comment-up");
  if (commentInput.value) {
    submit.disabled = true;
    submit.style.opacity = 0.7;
  } else {
    submit.disabled = false;
    submit.style.opacity = 0.3;
  }
});
// const handleClick = function () {
//   const p = document.createElement("p"); // tag('p') 생성
//   p.innerHTML = "공부하세요";
//   test.appendChild(p);
// };
// commentInput.addEventListener("click", handleClick);
