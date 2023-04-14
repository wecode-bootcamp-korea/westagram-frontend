/** @format */
const commentTxt = document.getElementsByClassName("comment_input")[ 0 ];
const commentList = document.getElementsByClassName("comment_list")[ 0 ]

commentTxt.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    outputValue()
  }
})

function outputValue () {
  const addCommentLi = document.createElement("li")
  const commentInList = commentList.appendChild(addCommentLi)

  return commentInList.innerText = commentTxt.value, commentTxt.value = null
}


