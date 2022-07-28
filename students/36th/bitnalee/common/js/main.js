// <댓글 추가 기능>
// 1-1. input 창에 댓글 입력후 게시 클릭하거나 enter를 치면 댓글 입력
//   1-2. 댓글 입력 후 input 창 초기화
//    1-3. 포커스가 input 창에 올 수 있도록


const input = document.querySelector('.commentInput');
//댓글창 셀렉트
const button = document.querySelector('#commentButton');
//버튼창
const addul = document.querySelector('.addul');
//댓글 ul 공간 

const onAdd = function () {
  const text = input.value;

  // text에 댓글창 vaule값 담기

  const str = 'bitnalee ';
  const res = str.bold();

  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  //li 와 해당 클래스 생성
  const itemText = document.createElement('span');
  itemText.setAttribute('class', 'itemText');
  itemText.innerHTML = res + text;
  //span과 해당 클래스 생성
  // 댓글창에 있는 텍스트를 해당 span에 담기

  item.appendChild(itemText);
  // li뒤에 텍스트를 담은 span넣기.
  addul.appendChild(item);
  // ul뒤에 해당 li를 넣기. 각각 li 로 ul 안에 추가 됨. 
  input.value = '';
  input.focus();
}


button.addEventListener('click', function () {
  onAdd();
})

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    onAdd();
  }
});