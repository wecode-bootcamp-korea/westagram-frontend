import '../../styles/reset.scss';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  // main page move
  const navigate = useNavigate();
  const goToMain = () => {
    true ? navigate('/Main') : alert('다시 입력하세요');
  };

  // input
  const [userId, setUserId] = useState();
  const idLength = event => {
    setUserId(event.target.value.length);
  };

  const [userPw, setUserPw] = useState();
  const pwLength = event => {
    setUserPw(event.target.value.length);
  };

  const [enabled, setEnabled] = useState(true);
  const compare = value => {
    userId > 0 && userPw > 0 ? setEnabled(!value) : setEnabled(value);
  };

  return (
    <div className='boundaryLine'>
      <section className='sectionWrapper'>
        <h1 className='loginTitle'>Westagram</h1>
        <article className='userInterface'>
          <input
            onChange={idLength}
            onKeyUp={compare}
            className='userName'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input
            onChange={pwLength}
            onKeyUp={compare}
            className='userPassword'
            type='password'
            placeholder='비밀번호'
          />
          <button disabled={enabled} onClick={goToMain} className='loginButton'>
            로그인
          </button>
        </article>
        <span className='passwordGuide'>비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
}

export default Login;
