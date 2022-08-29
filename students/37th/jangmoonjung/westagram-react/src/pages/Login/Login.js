import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const btnNavigate = useNavigate();

  return (
    <main className='login'>
      <article className='container'>
        <h1 className='logo'>Westagram</h1>
        <form className='form'>
          <input
            className='id'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input className='pw' type='password' placeholder='비밀번호' />
          {/* <button
            onClick={() => {
              btnNavigate('/main');
            }}
            type='button'
            disabled
            className='btn'
          >
            로그인
          </button> */}

          <Link to='/Main'>
            <button type='button' className='btn'>
              로그인
            </button>
          </Link>
        </form>
        <span className='validation'></span>
        <div className='find'>비밀번호를 잊으셨나요?</div>
      </article>
    </main>
  );
};

export default Login;
