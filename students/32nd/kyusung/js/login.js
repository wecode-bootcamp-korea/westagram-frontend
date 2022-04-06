const login_id = document.getElementById('login_id');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

// login_id.addEventListener('keyup', loginEnabled);
// password.addEventListener('keyup', loginEnabled);



// function loginEnabled(){
//   console.log(!(login_id.value && password.value));
//   switch(!(login_id.value && password.value)){
//     case true:
//       submit.disabled = true;
//       break;
//     case false:
//       submit.disabled = false;
//       break;
//   }
// };


password.addEventListener('keyup', () => {
  const password_input = password.value;
  if(login_id.value && password_input){
    submit.disabled = false;
  }
  if(password_input === '' ){
    submit.disabled = true;
  }
  console.log(password_input);
});