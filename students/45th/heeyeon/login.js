const inputBoxes = document.querySelectorAll(".input-box");
const logBtn = document.querySelector(".login-btn");

inputBoxes.forEach((box) => {
  box.addEventListener("input", () => {
    let isAllInputFilled = true;

    inputBoxes.forEach((box) => {
      isAllInputFilled = box.value.length !== 0 ? isAllInputFilled : false;

      logBtn.disabled = isAllInputFilled ? false : true;
      isAllInputFilled
        ? logBtn.classList.add("color-change")
        : logBtn.classList.remove("color-change");
    });
  });
});

logBtn.addEventListener("click", () => {
  const id = inputBoxes[0].value;
  const pw = inputBoxes[1].value;

  if (id.includes("@") && pw.length >= 5) {
    logBtn.disabled = false;
  } else {
    logBtn.disabled = true;
    return alert("Please check your Id and Password");
  }
});
