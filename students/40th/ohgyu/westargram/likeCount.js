const likeCheck = document.getElementById("likeCheck");

let likeResultNum = parseInt(document.getElementById("likeResult").innerHTML);

const likeResult = document.getElementById("likeResult");

function likeCount() {
  if (likeCheck.checked) {
    likeResultNum += 1;
  } else if (likeCheck.checked !== true && likeResultNum >= 1) {
    likeResultNum -= 1;
  }
  likeResult.innerHTML = likeResultNum;
}
