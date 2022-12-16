const $ = (selector) => document.querySelector(selector);

function App() {
  $('#loginInput').addEventListener('keyup', (e) => {
    if (
      $('#loginId').value.includes('@') &&
      $('#loginPassword').value.length >= 5
    ) {
      $('#loginBtn').style.backgroundColor = '#0095F6';
    }
  });

  // 로그인 클릭시 이동
  $('#loginBtn').addEventListener('click', (e) => {
    if ($('#loginId').value !== '' && $('#loginPassword').value !== '') {
      alert('로그인했습니다.');
      window.open('main.html');
    }
  });

  // enter 입력하면 입력
  $('#loginInput').addEventListener('keypress', (e) => {
    if ($('#loginId').value !== '' && $('#loginPassword').value !== '') {
      if (e.key !== 'Enter') {
        return;
      }
      alert('로그인했습니다.');
      window.open('main.html');
    }
  });

  $('#forgetPassword').addEventListener('click', (e) => {
    alert('@ 포함한 id와 5자리 이상 password를 입력해 보세요!');
  });
}

App();
