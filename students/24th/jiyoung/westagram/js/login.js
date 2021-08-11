let $id = document.querySelector(".user-id");
let $pw = document.querySelector(".user-pw");
let $loginBtn = document.querySelector(".login button");

function activateLoginBtn() {
  $loginBtn.classList.add('active');
  if (($id.value) == '' || ($pw.value) == '') {
    $loginBtn.classList.remove('active');
  }
}

$id.addEventListener('input', activateLoginBtn);
$pw.addEventListener('input', activateLoginBtn);