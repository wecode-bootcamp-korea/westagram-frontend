const id = document.getElementById("id");
const pw = document.getElementById("password");
const button = document.querySelector(".button");

document.body.addEventListener("keyup", () => {
  if (id.value.length >= 1 && pw.value.length >= 5) {
    button.style.backgroundColor = "blue";
  } else {
    button.style.backgroundColor = "#c4e0fc";
  }
});

document.body.addEventListener("keyup", (event) => {
  if (id.value.includes("@") && pw.value.length >= 5) {
    if (event.key === "Enter") {
      alert("로그인 성공!");
    }
  } else if (!id.value.includes("@") && pw.value.length >= 5)
    if (event.key === "Enter") {
      alert("아이디를 확인해주세요.");
    }
});
