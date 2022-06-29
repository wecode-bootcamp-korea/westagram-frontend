const input = document.querySelector('.input__comment');
const submit = document.querySelector('.input__submit');

// 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록 createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.
// .classList.add('이름')
// .classList.add('여러개','추가')
// .classList.replace('변경전이름','변경후이름')
// .classList.remove('삭제할 클래스명1','삭제할 클래스명2')

const commentParent = document.querySelector('.contents__comments')


function isEnter() {
  let div = document.createElement('div')
  div.classList.add('yourComment')

  let comment1 = document.createElement('span')
  comment1.classList.add('comment1')

  let strongYourID = document.createElement('strong')
  strongYourID.innerHTML = 'yourID'

  let realComment = document.createElement('span')
  realComment.classList.add('realComment')
  realComment.innerHTML = input.value

  let smallheart_delete = document.createElement('span')
  smallheart_delete.classList.add('smallheart_delete')

  let smallheartI = document.createElement('i')
  smallheartI.classList.add('smallheart', 'fa-regular', 'fa-heart')

  let deleteI = document.createElement('i')
  deleteI.classList.add('delete', 'fa-solid', 'fa-eraser')

  commentParent.appendChild(div)
  div.appendChild(comment1)
  comment1.appendChild(strongYourID)
  comment1.appendChild(realComment)
  div.appendChild(smallheart_delete)
  smallheart_delete.appendChild(smallheartI)
  smallheart_delete.appendChild(deleteI)

  // console.log(div)
  input.value = ''
}


input.addEventListener('keyup', (e) => {
  if(e.code === 'Enter' && input.value !== '') {
    isEnter()
  }
})

submit.addEventListener('click', (e) => {
  if(input.value !== '') {
    isEnter()
  }
})












