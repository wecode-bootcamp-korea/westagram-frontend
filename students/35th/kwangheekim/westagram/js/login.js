const loginBtn = document.getElementById('loginBtn');

document.addEventListener('keyup', function(event) {
  const name = document.getElementById('userName');
  const password = document.getElementById('userPassword');
  localStorage.setItem('userid', name.value);

  (name.value.includes('@')&&password.value.length>=5) ? (
    loginBtn.classList.remove('disabled'),
    loginBtn.disabled = false,
    event.key === 'Enter' ? window.location.href = 'main.html' : false
  ) : (
    loginBtn.classList.add('disabled'),
    loginBtn.disabled = true
  );
});

loginBtn.addEventListener("click", function(event) {
  window.location.href = 'main.html';
});
