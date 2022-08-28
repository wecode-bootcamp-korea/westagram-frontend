import React from 'react';

const Login = () => {
  return (
    <main className='login'>
      <article className='login__container'>
        <h1 className='login__logo'>Westagram</h1>
        <form className='login__form'>
          <input
            className='login__id'
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input className='login__pw' type='password' placeholder='비밀번호' />
          <button type='button' disabled className='login__btn'>
            로그인
          </button>
        </form>
        <span className='validation'></span>
        <div className='login__find'>비밀번호를 잊으셨나요?</div>
      </article>
    </main>
  );
};

export default Login;
