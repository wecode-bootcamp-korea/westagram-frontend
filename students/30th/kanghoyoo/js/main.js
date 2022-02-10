<<<<<<< HEAD
const textBox = document.getElementsByClassName("textbox")[0];
const searchImg = document.getElementsByClassName("fa-search")[0];
const textBoxValue = textBox.value;

textBox.addEventListener("keydown", function () {
  const callbackSearch = () => {
    if (textBox.value === "") {
      searchImg.visibility = "visible";
    } else if (textBox.value !== "") {
      searchImg.style.visibility = "hidden";
    }
  };
  callbackSearch();
});

// function toggleImg() {
//   bt = document.getElementsByClassName("fa-heart");
//   bt.style.color = "red";
// }

const ment = document.getElementsByClassName("mentsWrap")[1];
function mentSend() {
  const mentGet = document.getElementsByClassName("commentInput")[0].value;
  const mentTimes = document.getElementsByClassName("mentTime")[0];
  ment.innerHTML +=
    '<p class="mentsMoreWrap"><span class="commentId">Kangho_Yoo</span><span class="comment">' +
    mentGet +
    "</span></p>";
  mentTimes.innerText = "1초 전";
  mentGet = "";
=======
function toggleImg() {
  bt = document.getElementsByClassName("fa-heart");
  bt.style.color = "red";
>>>>>>> 1898555e0107f98e18ae5c97a0016a4371c384d4
}
