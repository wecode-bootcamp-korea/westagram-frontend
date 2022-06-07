import '../../styles/reset.css';
import './Login.css';

function Login() {
  return (
    <div className='boundaryLine'>
      <section className='sectionWrapper'>
        <h1 className='loginTitle'>Westagram</h1>
        <article className='userInterface'>
          <input
            className='userName'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input
            className='userPassword'
            type='password'
            placeholder='비밀번호'
          />
          <button className='loginButton' submit='#' disabled>
            로그인
          </button>
        </article>
        <span className='passwordGuide'>비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
}

export default Login;
