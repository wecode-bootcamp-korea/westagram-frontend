const input = document.querySelector('.input__comment');
const submit = document.querySelector('.input__submit');
const parentComment = document.querySelector('.contents__comments');
// const smallheart = document.querySelector('.smallheart');

function isEnter(e) {
  //enter는 e.code === "Enter" -> 이거 더 좋다고 함
  //enter는 keyCode = 13

  let div = document.createElement('div')
  div.className = 'yourComment'
  let span = document.createElement('span')
  span.className = 'comment1'
  span.innerHTML = `<span class="bold">freindID</span>&nbsp;&nbsp;${input.value}`
  // console.log(span)
  parentComment.appendChild(div)
  div.appendChild(span)
  // console.log(div)
  input.value = ''; 
}

input.addEventListener('keyup', (e) => {
  // console.log(e)
  // console.dir(e)
  if(e.code === 'Enter' && input.value !== '') {
    isEnter()
  }
})


submit.addEventListener('click', (e) => {
  if(input.value !== '') {
    isEnter()
  }
} )



