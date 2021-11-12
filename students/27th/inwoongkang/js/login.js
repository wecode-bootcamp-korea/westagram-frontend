const idBox = document.querySelector(".idBox");
const passwordBox = document.querySelector(".passwordBox");
const input = document.querySelector("input");

function init() {
  function dovalidate() {
    if (passwordBox.value.length >= 5 && idBox.value.includes("@")) {
      document.querySelector("button").disabled = false;
      document.querySelector("button").style.backgroundColor = "blue";
      document.querySelector("button").style.cursor = "pointer";
    } else if (passwordBox.value.length < 5 || !idBox.value.includes("@")) {
      document.querySelector("button").disabled = true;
      document.querySelector("button").style.cursor = "default";
      document.querySelector("button").style.backgroundColor =
        "rgb(166, 166, 245)";
    }
  }

  idBox.addEventListener("keyup", dovalidate);
  passwordBox.addEventListener("keyup", dovalidate);
}

init();
