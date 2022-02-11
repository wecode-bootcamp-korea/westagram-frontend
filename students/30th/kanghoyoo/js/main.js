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
  const mentGet = document.getElementsByClassName("commentInput")[0];
  const mentTimes = document.getElementsByClassName("mentTime")[0];
  if (mentGet.value !== "") {
    ment.innerHTML +=
      '<p class="mentsMoreWrap"><span class="commentId">Kangho_Yoo</span><span class="comment">' +
      mentGet.value +
      "</span><input type='button' class='delate' onclick='delate();' value='X'/></p>";
    mentTimes.innerText = "1초 전";
  }
  mentGet.value = "";
}

function enterkey() {
  if (window.event.keyCode == 13) mentSend();
}

function delate() {
  document.getElementsByClassName("mentsMoreWrap")[0].remove();
}
