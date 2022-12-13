const $ = (selector) => document.querySelector(selector);

function App() {
  $('#loginInput').addEventListener('keyup', (e) => {
    if ($('#loginId').value !== '' && $('#loginPassword').value !== '') {
      $('#loginBtn').style.backgroundColor = '#0095F6';
      console.log('hi');
    }
  });

  $('#loginBtn').addEventListener('click', (e) => {
    if ($('#loginId').value !== '' && $('#loginPassword').value !== '') {
      alert('로그인했습니다.');
      console.log('hi');
      window.open('main.html');
    }
  });
}

App();
