// 검색창 포커스 됬을 경우

const $input = document.querySelector('#input');
const $search = document.querySelector('#search');
const $exit = document.querySelector('#exit');

$input.onfocus = () => {
  $search.style.display = 'none';
  $exit.style.display = 'block';
  $input.classList.add('focus');
};

$input.onblur = () => {
  $search.style.display = 'block';
  $exit.style.display = 'none';
  $input.classList.remove('focus');
};


