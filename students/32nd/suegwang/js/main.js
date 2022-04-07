const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");

instaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  /*
a 태그나 submit 태그는 누르게 되면 href 를 통해 이동 또는 창이 새로고침하여 실행.
preventDefault를 통해 이러한 동작을 막아준다.

주로 사용되는 경우는
1. a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)
*/

  const usernameInput = instaForm.elements.username;
  const commentInput = instaForm.elements.comment;
  //                   는 instaForm 요소의 [       ] 이다;

  addComment(usernameInput.value, commentInput.value);
  usernameInput.value = "sooboi";
  commentInput.value = "";
});

// .createElement() : 요소를 만든다.
const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");

  // .append : 선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가한다.
  bTag.append(username);
  newComment.append(bTag);
  newComment.append(` ${comment}`);
  commentsContainer.append(newComment);
};
