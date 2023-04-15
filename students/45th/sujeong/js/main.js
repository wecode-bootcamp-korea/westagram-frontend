/** @format */
const commentTxt = document.getElementsByClassName("comment_input")[ 0 ]
const commentList = document.getElementsByClassName("comment_list")[ 0 ]

commentTxt.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    outputValue()
  }
})

function outputValue () {
  const addCommentLi = document.createElement("li")
  const commentInList = commentList.appendChild(addCommentLi)

  function addUsername (userId) {
    const addUserSpan = document.createElement("span")
    const spanInLi = commentInList.appendChild(addUserSpan)
    const userName = userId;
    spanInLi.innerText = userName
    addUserSpan.classList.add("user_name_bold")
  }

  function AddCommentSpan () {
    const CommentSpan = document.createElement("span")
    const addCommentSpan = commentInList.appendChild(CommentSpan)
    addCommentSpan.innerText = commentTxt.value;
    const howLong = addCommentSpan.clientWidth
    
    console.log(howLong);

    function seeMore () {
      CommentSpan.classList.add("too_long_comment")
      const seeMoreSpan = document.createElement("span");
      commentInList.appendChild(seeMoreSpan);
      seeMoreSpan.innerText = "더보기";
      seeMoreSpan.classList.add("see_more");
    };

    (howLong > 230 ?  
      seeMore() :
      CommentSpan.classList.remove("too_long_comment")   
      )
  }

  return addUsername("krystalk170"), AddCommentSpan(), commentTxt.value = ""

}

