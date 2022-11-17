// content of article element
const contentText = document.getElementsByClassName("contentText")[0];
// 'see more' button element
const seeMoreBtnElement = document.getElementsByClassName("seeMoreContent")[0];

// get text only from content element
const contentTextString = contentText.textContent;

// delete blanks front of the text
let contentTextWithoutBlank = contentTextString.trim();

// hide text, appear 'see more'
function appearSeeMoreContent() {
  let shortText = contentTextWithoutBlank.slice(0, 12);
  if (contentTextWithoutBlank.length >= 12) {
    contentText.innerHTML = shortText;
    seeMoreBtnElement.style.display = "block";
  }
}
appearSeeMoreContent();

// section element for change display style
let contentSectionElement = document.getElementById("contSection");

// click 'see more' event to show full content
seeMoreBtnElement.addEventListener("click", function (e) {
  contentText.innerHTML = contentTextWithoutBlank;
  seeMoreBtnElement.style.display = "none";
  /// display : flex -> block
  contentSectionElement.style.display = "block";
});
