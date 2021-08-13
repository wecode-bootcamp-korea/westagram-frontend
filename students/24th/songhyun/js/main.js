let comments = [];
const addCommentForm = document.querySelector('.add-comment');
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('.add-btn');
const commentList = document.querySelector('.feeds-comment');

addCommentForm.addEventListener('keydown', (e) => {
  return e.keyCode === 13 ? addComment(e) : false;
});

const addComment = (e) => {
  e.preventDefault();

  if (addInput.value === '') {
    return addInput.setAttribute('required', false);
  }
  addCommentItem(addInput.value);
  addInput.setAttribute('required', true);
  addInput.value = '';
};

const addCommentItem = (value) => {
  const id = Math.floor(Math.random() * 999);
  comments.push({
    id,
    name: 'vi2920va',
    content: value,
  });
  commentCreateItem(id);
};

const commentCreateItem = (id) => {
  const li = document.createElement('li');
  const strong = document.createElement('strong');
  const em = document.createElement('em');
  const span = document.createElement('span');
  li.setAttribute('class', 'feeds-comment--new');

  const item = comments.find((item) => {
    return item.id === id;
  });

  strong.textContent = item.name;
  em.textContent = item.content;
  span.textContent = '더 보기';
  li.appendChild(strong);
  li.insertBefore(em, strong.nextSibling);
  li.insertBefore(span, em.nextSibling);
  commentList.appendChild(li);
};
