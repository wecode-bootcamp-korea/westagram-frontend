const userEmail = document.querySelector('.user-name');
const userPw = document.querySelector('.user-pw');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    userEmail.getAttribute('required') === 'true' &&
    userPw.value.length > 5
  ) {
    return loginBtn.classList.add('active');
  } else {
    return loginBtn.classList.remove('active');
  }
});

userEmail.addEventListener('keydown', (e) => {
  let regExp = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  if (!regExp.test(e.target.value)) {
    return userEmail.setAttribute('required', false);
  } else {
    return userEmail.setAttribute('required', true);
  }
});

// const emailCheck = (email) => {

//   if (regExp.test(email)) {
//     console.log('i');
//   } else {
//     console.log('no');
//   }
// };
