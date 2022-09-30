const id_box = document.getElementById("login_id");
const pw_box = document.getElementById("login_pw");

id_box.addEventListener("keyup", function () {
  if (id_box.value !== "" && pw_box.value.length >= 1) {
    document.getElementById("login_bt").style.opacity = "1";
  }
});

pw_box.addEventListener("keyup", function () {
  if (id_box.value !== "" && pw_box.value.length >= 1) {
    document.getElementById("login_bt").style.opacity = "1";
  }
});
