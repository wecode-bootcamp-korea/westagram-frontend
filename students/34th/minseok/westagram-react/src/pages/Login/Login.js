import '../../styles/reset.scss';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState();
  const [userPw, setPw] = useState();
  const navigate = useNavigate();
  const goToMain = () => {
    userName.length > 6 && userPw.length > 5
      ? navigate('/Main')
      : alert('다시 입력하세요');
  };
  return (
    <div className='boundaryLine'>
      <section className='sectionWrapper'>
        <h1 className='loginTitle'>Westagram</h1>
        <article className='userInterface'>
          <input
            onChange={e => {
              setUserName(e.target.value);
            }}
            value={userName}
            className='userName'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input
            onChange={e => {
              setPw(e.target.value);
            }}
            value={userPw}
            className='userPassword'
            type='password'
            placeholder='비밀번호'
          />
          <button onClick={goToMain} className='loginButton' submit='#'>
            로그인
          </button>
        </article>
        <span className='passwordGuide'>비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
}

export default Login;
