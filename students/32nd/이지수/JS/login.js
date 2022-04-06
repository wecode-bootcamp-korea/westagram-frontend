//login
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");
export let idvalue;
let pwvalue;

function checkBlank(e) {
  if (e.target.id === `id`) {
    idvalue = e.target.value;
  }
  if (e.target.id === "pw") {
    pwvalue = e.target.value;
  }
  if (idvalue !== undefined && pwvalue !== undefined) {
    btn.disabled = false;
    btn.style.backgroundColor = "blue";
  }
}

id.addEventListener("change", checkBlank);
pw.addEventListener("change", checkBlank);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  location.replace("/main.html");
});
