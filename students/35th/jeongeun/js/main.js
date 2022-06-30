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
