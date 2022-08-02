import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');
  // const [btn, setBtn] = useState(true);

  // const saveUserId = e => {
  //   e.target.value.includes('@') && pw.length >= 5
  //     ? setBtn(true)
  //     : setBtn(false);
  //   setId(e.target.value);
  // };

  // const saveUserPw = e => {
  //   id.indexOf('@') !== -1 && pw.length >= 5 ? setBtn(true) : setBtn(false);
  //   setPw(e.target.value);
  // };

  // const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/main');
  // };

  return (
    <div className="loginApp">
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <div className="loginCtl">
            <input
              type="text"
              className="id"
              placeholder="전화번호, 사용자 이름또는 이메일"
              // onChange={saveUserId}
            />
          </div>
          <div className="loginCtl">
            <input
              type="password"
              className="password"
              placeholder="비밀번호"
              // onChange={saveUserPw}
            />
          </div>
          <Link to="/main">
            <button
              type="submit"
              className="loginBtn"
              // disabled={btn}
              // onClick={goToMain}
            >
              로그인
            </button>
          </Link>
        </form>
        <div className="midLine">
          <div className="line"></div>
          <div className="or">
            <span>또는</span>
          </div>
          <div className="line"></div>
        </div>
        <Link to="#" className="pwdFind">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
};
