"use strict";

const comment = document.getElementById("comment")
const commentSubmit = document.getElementById("commentSubmit")



function newComments () {
  if (comment.value.length>0){
      return commentSubmit.style.color="#6eacf5";
             

  } else if (comment.value.length === 0) {
    return commentSubmit.style.color="";
  }
}

comment.addEventListener("keyup",newComments)