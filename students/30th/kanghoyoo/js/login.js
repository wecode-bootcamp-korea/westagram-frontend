const id = document.getElementById("id");
const pw = document.getElementById("pw");
const bt = document.getElementById("login");

id.addEventListener("keyup", function () {
  const idValue = id.value;
  const pwValue = pw.value;
  // const pwValue = pw.value;

  if (idValue !== "" && pwValue !== "") {
    bt.style.backgroundColor = "rgb(0, 150, 250)";
    bt.disabled = false;
  } else if (id.value === "" || pw.value === "") {
    bt.style.backgroundColor = "rgb(176, 213, 255)";
    bt.style.disabled = true;
  }
});

pw.addEventListener("keyup", function () {
  const idValue = id.value;
  const pwValue = pw.value;
  // const pwValue = pw.value;

  if (idValue !== "" && pwValue !== "") {
    bt.style.backgroundColor = "rgb(0, 150, 250)";
    bt.disabled = false;
  } else if (id.value === "" || pw.value === "") {
    bt.style.backgroundColor = "rgb(176, 213, 255)";
    bt.style.disabled = true;
  }
});
