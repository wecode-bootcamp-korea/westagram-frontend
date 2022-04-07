const form = document.querySelector('.comment-action-wrap');
const input = document.querySelector('.comment-input');
const list = document.querySelector('.comment-list-wrap');

let commentArray = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  commentArray.push({
    comment: input.value,
    regDate: new Date(),
    id: '사용자 아이디 :',
    diffTime: '',
    index: commentArray.length + 1,
  });
  list.innerHTML = insetComment();
  input.value = '';
});

const insetComment = () => {
  return commentArray
    .map((value) =>
      makeCommentEl(value.id, value.comment, value.regDate, value.index)
    )
    .join('');
};

const makeCommentEl = (id, comment, regDate, index) => {
  return `<dl class="comment-wrap" >
              <dt class="comment-id">${id}</dt>
              <dd class="comment">${comment}</dd>
              <dd class="comment-diff-time">${
                (new Date() - regDate) / 1000
              }초 전...</dd>
              <dd class="delete" data-index=${index}>삭제</dd>
          </dl>`;
};
