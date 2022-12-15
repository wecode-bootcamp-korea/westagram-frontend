const $ = (selector) => document.querySelector(selector);

function App() {
  $('#loginInput').addEventListener('keyup', (e) => {
    if ($('#loginId').value !== '' && $('#loginPassword').value !== '') {
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

  $('#forgetPassword').addEventListener('click', (e) => {
    alert('편하게 id와 password를 입력해 보세요!');
  });
}

App();
