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
