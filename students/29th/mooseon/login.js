const btnSubmit = document.getElementById('btn');
const login1 = document.getElementById('login1');
const login2 = document.getElementById('login2');

login1.addEventListener('keyup', function () {
  if (login1.value && login2.value) {
    console.log();
    btnSubmit.style.backgroundColor = 'blue';
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.backgroundColor = '#c4e1fb';
  }
});

login2.addEventListener('keyup', function () {
  if (login1.value && login2.value) {
    btnSubmit.style.backgroundColor = 'blue';
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.backgroundColor = '#c4e1fb';
  }
});
