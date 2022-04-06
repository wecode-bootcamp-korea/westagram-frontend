const inputId = document.querySelector('.input-login')
const inputPw = document.querySelector('.input-pw')
const button = document.querySelector('.button')

inputId.addEventListener('keyup', function(){
  const idValue = inputId.value;
  const pwValue = inputPw.value;

  if(idValue.includes('@') && pwValue.length >= 5){
    //이제 .button 태그의 css 속성 중 background-color만 변경해주기!
    button.style.backgroundColor = '#0295f6'
  }
})

inputPw.addEventListener('keyup', function(){
  const idValue = inputId.value;
  const pwValue = inputPw.value;

  if(idValue.includes('@') && pwValue.length >= 5){
    //이제 .button 태그의 css 속성 중 background-color만 변경해주기!
    button.style.backgroundColor = '#0295f6'
  }
})