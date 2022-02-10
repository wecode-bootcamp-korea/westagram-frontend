const id = document.getElementsByClassName("id")[0];
const pw = document.getElementsByClassName("pw")[0];
const bt = document.getElementsByClassName("login")[0];
const input = document.getElementsByClassName("input")[0];

input.addEventListener("keyup", function () {
  const idValue = id.value;
  const pwValue = pw.value;

  const loginSucces = () => {
    idValue !== "" && pwValue !== ""
      ? (bt.style.backgroundColor = "rgb(0, 150, 250)") && (bt.disabled = false)
      : (bt.style.backgroundColor =
          "rgb(176, 213, 255)" && (bt.style.disabled = true));
  };

  const loginFail = () => {
    idValue === "" || pwValue === ""
      ? (bt.style.backgroundColor = "rgb(176, 213, 255)") &&
        (bt.disabled = true)
      : "rgb(0, 150, 250)" && (bt.disabled = false);
  };
  loginSucces();
  loginFail();

  if (window.event.keyCode == 13) {
    if (bt.disabled != true) loginLink();
  }
});

function loginLink() {
  window.location.href = "./main.html";
}
