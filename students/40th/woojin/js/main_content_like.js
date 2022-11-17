const likeBtnElement = document.getElementById("likeBtnArticle");

const numberOfLike = document.getElementById("NumOfLike");

likeBtnElement.addEventListener("click", function (e) {
  // -1 when already clicked like
  if (
    likeBtnElement.style.backgroundImage ==
    'url("/students/40th/woojin/main_structure_image/colorheart.png")'
  ) {
    likeBtnElement.style.backgroundImage =
      'url("/students/40th/woojin/main_structure_image/heart.png")';
    let stringValue = numberOfLike.textContent;
    let valueToNumber = Number(stringValue);
    numberOfLike.innerHTML = valueToNumber -= 1;
  }
  // +1 when no-click like
  else {
    likeBtnElement.style.backgroundImage =
      'url("/students/40th/woojin/main_structure_image/colorheart.png")';
    let stringValue = numberOfLike.textContent;
    let valueToNumber = Number(stringValue);
    numberOfLike.innerHTML = valueToNumber += 1;
  }
});
