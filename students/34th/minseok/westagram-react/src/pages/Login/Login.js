import '../../styles/reset.scss';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  // main page move
  const navigate = useNavigate();
  const goToMain = () => {
    !enabled ? navigate('/Main') : alert('아무것도 입력되지 않았어요');
  };

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const valueHandler = event => {
    setUserInfo(value => {
      return { ...value, [event.target.name]: event.target.value };
    });
  };

  let enabled = !Boolean(
    userInfo.userId && userInfo.userPw && userInfo.userId.includes('@')
  );

  return (
    <div className='boundaryLine'>
      <section className='sectionWrapper'>
        <h1 className='loginTitle'>Westagram</h1>
        <article className='userInterface'>
          <input
            onChange={valueHandler}
            name='userId'
            className='userName'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input
            onChange={valueHandler}
            name='userPw'
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
