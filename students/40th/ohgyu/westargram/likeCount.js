const likeCheck = document.getElementById("likeCheck");

const likeResult = parseInt(document.getElementById("likeResult").innerHTML);

function likeCount() {
  if (likeCheck.checked) {
    console.log("체크됨");
  } else console.log("체크해제됨");
}

likeCount();
