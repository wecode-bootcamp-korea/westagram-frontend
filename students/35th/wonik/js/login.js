// 로그인 부분 사진 변동시키기

const $image = document.querySelectorAll('.image');

const onChangeImage = setInterval(() => {
  if($image[0].classList.contains('active')){
    $image[0].classList.remove('active');
    $image[1].classList.add('active');
  }else if($image[1].classList.contains('active')){
    $image[1].classList.remove('active');
    $image[2].classList.add('active');
  }else if($image[2].classList.contains('active')){
    $image[2].classList.remove('active');
    $image[0].classList.add('active');
  }
}, 5000);

// 로그인 입력값 생성시 버튼 활성화

const $inputID = document.querySelector('.login-input__ID');
const $inputPW = document.querySelector('.login-input__PW');
const $button = document.querySelector('.login-button');
const $form = document.querySelector('.login-input');

/*$form.addEventListener('keyup', () => {
  if($inputID.value && $inputPW.value){
    $button.disabled = false;
    $button.classList.add('focus');
  }else{
    $button.disabled = true;
    $button.classList.remove('focus');
  }
})*/

$form.addEventListener('keyup', () => {
  const able = ($inputID.value && $inputPW.value) ? $button.disabled = false : $button.disabled = true;
  const focus = ($inputID.value && $inputPW.value) ? $button.classList.add('focus') : $button.classList.remove('focus');
})


