//login
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");
let idvalue;
let pwvalue;
pw.setAttribute("minlength", 5);
const checkBlank = function (e) {
  if (e.target.id === `id`) {
    idvalue = e.target.value;
  }
  if (e.target.id === "pw") {
    pwvalue = e.target.value;
  }
  if (idvalue.includes("@") && pwvalue.length >= 5) {
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
  }
};

id.addEventListener("change", checkBlank);
pw.addEventListener("change", checkBlank);

btn.addEventListener("click", (e) => {
  const path = window.location.pathname;
  const num = path.indexOf("login");
  const resultPath = path.substring(0, num);
  e.preventDefault();
  location.href = `${resultPath}main.html`;
});
