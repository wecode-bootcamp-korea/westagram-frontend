import '../../styles/reset.css';
import './Login.css';

function Login() {
  return (
    <div className='boundaryLine'>
      <section className='loginArea'>
        <h1 className='loginArea_loginTitle'>Westagram</h1>
        <article className='loginArea_userInterface'>
          <input
            className='loginArea_userInterface_userName'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input
            className='loginArea_userInterface_userPassword'
            type='password'
            placeholder='비밀번호'
          />
          <button
            className='loginArea_userInterface_loginButton'
            submit='#'
            disabled
          >
            로그인
          </button>
        </article>
        <span className='loginArea_passwordGuide'>비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
}

export default Login;
