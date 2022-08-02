import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  const [loginDate, setLoginDate] = useState({
    id: '',
    password: '',
  });

  const loginDateSave = ({ target }) => {
    const { name, value } = target;
    setLoginDate({ ...loginDate, [name]: value });
  };

  const { id, password } = loginDate;

  const isActive = id.includes('@') && password.length >= 5;

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="loginApp">
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <div className="loginCtl">
            <input
              type="text"
              name="id"
              className="id"
              placeholder="전화번호, 사용자 이름또는 이메일"
              onChange={loginDateSave}
            />
          </div>
          <div className="loginCtl">
            <input
              type="password"
              name="password"
              className="password"
              placeholder="비밀번호"
              onChange={loginDateSave}
            />
          </div>
          <button
            type="submit"
            className="loginBtn"
            disabled={!isActive}
            onClick={goToMain}
          >
            로그인
          </button>
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
