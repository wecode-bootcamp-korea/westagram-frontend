const input = document.querySelector('.inputComment');
const submit = document.querySelector('.inputSubmit');
const commentParent = document.querySelector('.contentsComments')

function isEnter() {
  let div = document.createElement('div')
  div.classList.add('yourComment')

  let comment = document.createElement('span')
  comment.classList.add('comment')

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
  div.appendChild(comment)
  comment.appendChild(strongYourID)
  comment.appendChild(realComment)
  div.appendChild(smallheart_delete)
  smallheart_delete.appendChild(smallheartI)
  smallheart_delete.appendChild(deleteI)

  input.value = ''

  smallheartI.addEventListener('click', () => {
    smallheartI.classList.replace('fa-regular', 'fa-solid')
    smallheartI.style.color = "red"
  })

  //.remove()
  deleteI.addEventListener('click', () => {
    div.remove()
  })
}


input.addEventListener('keyup', (e) => {
  if (e.code === 'Enter' && input.value !== '') {
    isEnter()
  }
})

submit.addEventListener('click', (e) => {
  if (input.value !== '') {
    isEnter()
  }
})

// 실제 인스타 nav 검색창에 아이디를 입력 시 검색 기능이 실행됩니다.
// 아이디 데이터를 담고 있는 배열을 선언해주세요.
// 검색 창에 텍스트 입력 시 배열의 요소 중 해당 텍스트에 일치하는 아이디만 보일 수 있도록 구현해주세요.
// for 문이 아닌 다른 array method를 사용해 구현해주세요.

const centerMenuInput = document.querySelector('.centerMenuInput')

// function isThisId() {

//   const searchIdArray = ['wjddms4107', 'tmdwns1922', 'rhdms0099']

//   let searchId = searchIdArray.filter(element => element === centerMenuInput.value)
//   console.log(searchId)
//   console.log(centerMenuInput.value)
//   if (searchId[0] === centerMenuInput.value) {
//     centerMenuInput.style.color = 'red'
//   }
// }


centerMenuInput.addEventListener('keyup', (e) => {

  if (e.code === 'Enter' && centerMenuInput.value !== '') {

    isThisId()
  }

})